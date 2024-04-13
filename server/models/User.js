import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema(
  {
    // Basic user information
    firstName: {
      type: String,
      required: [true, "You must provide a first name"],
      maxlength: [25, "Your name cannot exceed 25 characters"],
    },
    lastName: {
      type: String,
      required: [true, "You must provide a last name"],
      maxlength: [25, "Your last name cannot exceed 25 characters"],
    },
    nickname: {
      type: String,
      required: [true, "You must provide a nickname"],
      unique: true,
      maxlength: [25, "Your nickname cannot exceed 25 characters"],
    },
    email: {
      type: String,
      required: [true, "Must be a valid email"],
      unique: true,
      maxlength: [75, "Your email cannot exceed 75 characters"],
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },

    avatar: {
      type: String,
      required: false,
      maxlength: [50, "Filename cannot exceed 50 characters"],
    },
    role: {
      type: String,
      enum: ["USER", "AGENT", "ADMIN"],
      default: "USER",
    },
    agentProfile: {
      type: {
        agencyName: {
          type: String,
          required: function () {
            return this.role === "AGENT"; // Make agency name required only if the user is an agent
          },
        },
        licenseNumber: {
          type: String,
          required: function () {
            return this.role === "AGENT"; // Make license number required only if the user is an agent
          },
        },
        phoneNumber: {
          type: String,
          unique: false, // Set unique to false to allow duplicates, including null

          required: function () {
            return this.role === "AGENT"; // Make license number required only if the user is an agent
          },
        },
        bio: {
          type: String,
          maxlength: 500,
          required: function () {
            return this.role === "AGENT"; // Make bio required only if the user is an agent
          },
        },
        listings: {
          type: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Listing",
            },
          ],
          default: [],
          required: function () {
            return this.role === "AGENT"; // Make listings required only if the user is an agent
          },
        },
      },
      required: function () {
        return this.role === "AGENT"; // Make agentProfile required only if the user is an agent
      },
    },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
      },
    ],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (
    this.role === "AGENT" &&
    (!this.agentProfile.agencyName || !this.agentProfile.licenseNumber)
  ) {
    return next(
      new Error(
        "You must provide an agency name and license number when registering as an agent."
      )
    );
  }
  next();
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const User = mongoose.model("User", UserSchema);

export default User;
