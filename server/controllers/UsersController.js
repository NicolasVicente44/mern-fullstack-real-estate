import User from "../models/User.js";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const temporaryStorage = process.env.TEMP_FILE_STORAGE || "temp";
const permanentStorage = "avatars";

// Rest of your code remains unchanged...


// Function to display a list of Users (admin access only)
export const index = async (_, res, next) => {
  try {
    // Retrieve a list of all users from the database
    const users = await User.find();

    // Render the user list page with the retrieved data
    res.render("users/index", {
      title: "List of Users",
      users,
    });
  } catch (error) {
    next(error);
  }
};

// Function to display a User's profile (admin access only)
export const show = async (req, res, next) => {
  try {
    // Find and verify a user based on the provided request parameters
    const user = await findAndVerifyUser(req);

    // Render the user's profile page with the retrieved user data
    res.format({
      "text/html": () => {
        res.render("users/show", {
          user,
          avatar: user.avatar,
          title: "User View",
        });
      },
      "application/json": () => {
        res.status(200).json({ status: 200, message: "SUCCESS", user });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    next(error);
  }
};

// Function to display a CMS interface for adding a new User
export const add = async (_, res, next) => {
  try {
    // Render the user addition form page
    res.render("users/add", {
      formType: "create",
      title: "New User",
    });
  } catch (error) {
    next(error);
  }
};

// Function to display a CMS interface for updating an existing User
export const edit = async (req, res, next) => {
  try {
    // Find and verify a user based on the provided request parameters
    const user = await findAndVerifyUser(req);

    // Render the user editing form page with the retrieved user data
    res.render("users/edit", {
      user,
      formType: "update",
      title: "Edit User",
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    // Extract and validate user input from the request

    const { firstName, lastName, nickname, email, password, avatar } =
      getStrongParams(req);

    const { isAgent, agentProfile } = req.body;

    console.log(req.body);
    console.log(avatar);
    // Create a new User instance with the provided data
    let role;
    if (isAgent) {
      role = "AGENT";
    } else {
      role = "USER";
    }
    const user = new User({
      firstName,
      lastName,
      nickname,
      email,
      password,
      avatar,
      isAgent,
      agentProfile,
      role,
    });
    console.log(user.avatar);
    console.log("role = ", role);

    // If user is an agent, handle agent profile
    if (role === "AGENT") {
      user.agentProfile = agentProfile;
    }

    console.log("user: ", user);

    // Validate user data and check for errors
    const validationErrors = user.validateSync();
    console.log("is agent var:", isAgent);
    if (validationErrors) {
      // Handle validation errors and display them to the user
      if (avatar && fs.existsSync(avatar.path)) {
        fs.unlinkSync(avatar.path);
      }
      const message = Object.values(validationErrors.errors).map(
        (error) => error.message
      );
      res.status(400);
      throw new Error(message.join("\n"));
    }

// Handle user avatar (if provided)
if (avatar) {
  fs.renameSync(
    path.join(__dirname, "..", temporaryStorage, avatar),
    path.join(__dirname, "..", permanentStorage, avatar)
  );
}

    // Register the user with Passport's User.register method
    await User.register(user, password);

    // Redirect to the user list page after successful user creation
    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "User was created successfully",
          },
        ];
        res.redirect("/users");
      },
      "application/json": () => {
        res.status(201).json({ status: 201, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "User failed to create" },
    ];
    next(error);
  }
};
// Function to update an existing User based on form input
export const update = async (req, res, next) => {
  try {
    // Extract and validate user input from the request
    const {
      firstName,
      lastName,
      nickname,
      email,
      password,
      avatar,
      isAgent,
      agentProfile,
    } = req.body;

    console.log("avatar before setting it to user.avatar: ", avatar);
    // Find and verify a user based on the provided request parameters
    let user = await findAndVerifyUser(req);

    // Update user properties with the provided data
    user.firstName = firstName;
    user.lastName = lastName;
    user.nickname = nickname;
    user.email = email;
    user.avatar = avatar;

    console.log("avatar after setting it to user.avatar: ", avatar);
    if (isAgent) {
      user.role = "AGENT";
      // Check if agentProfile is provided
      if (
        !agentProfile ||
        !agentProfile.agencyName ||
        !agentProfile.licenseNumber
      ) {
        res.status(400);
        throw new Error(
          "You must provide an agency name and license number when registering as an agent."
        );
      }
      user.agentProfile = agentProfile;
    } else {
      user.role = "USER";
      // If the user is no longer an agent, clear the agentProfile
      user.agentProfile = null;
    }
    // If user is an agent, update agent profile
    if (user.role === "AGENT") {
      user.agentProfile = agentProfile;
    }

    console.log("is agent: ", isAgent);
    console.log("role: ", user.role);
    // Validate user data and check for errors
    const validationErrors = user.validateSync();
    if (validationErrors) {
      // Handle validation errors and display them to the user
      if (avatar && fs.existsSync(avatar.path)) {
        fs.unlinkSync(avatar.path);
      }
      const message = Object.values(validationErrors.errors).map(
        (error) => error.message
      );
      res.status(400);
      throw new Error(message.join("\n"));
    }
      // Handle user avatar (if provided)
      if (avatar) {
        fs.renameSync(
          path.join(__dirname, "..", temporaryStorage, avatar),
          path.join(__dirname, "..", permanentStorage, avatar)
        );
      }

    // Save the updated user data
    await user.save();

    // Redirect to the user list page after successful user update
    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "User was updated successfully",
          },
        ];
        res.redirect("/users");
      },
      "application/json": () => {
        res.status(201).json({ status: 201, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "User failed to update" },
    ];
    next(error);
  }
};

// Function to remove an existing User
export const remove = async (req, res, next) => {
  try {
    // Find and verify a user based on the provided request parameters
    const user = await findAndVerifyUser(req);

    // Delete the user's avatar file (if it exists)
    const filepath = `${permanentStorage}/${user.avatar}`;

    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    // Remove the user from the database
    await User.findByIdAndDelete(req.params.id);

    // Redirect to the user list page after successful user removal
    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "User was deleted successfully",
          },
        ];
        res.redirect("/users");
      },
      "application/json": () => {
        res.status(201).json({ status: 201, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "User failed to delete" },
    ];
    next(error);
  }
};

// Helper function to find and verify a user by their ID
async function findAndVerifyUser(req) {
  const user = await User.findById(req.params.id);

  if (!user) {
    // Handle the case where the user does not exist
    req.status = 404;
    throw new Error("User does not exist");
  }

  return user;
}

/**
 * This function is used to ensure that only approved fields are returned and used.
 *
 * @param { ExpressRequestObject } req - The Express request object containing user input
 * @returns { object } - An object containing approved fields
 */
function getStrongParams(req) {
  // If a file was uploaded, extract the filename from req.file
  const avatar = req.file ? req.file.filename : undefined;

  // Extract other approved fields from the request body
  const { id, firstName, lastName, nickname, email, password } = req.body;

  return { id, firstName, lastName, nickname, email, avatar, password };
}
