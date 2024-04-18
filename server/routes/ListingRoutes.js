import { Router } from "express";
import {
  index,
  show,
  add,
  edit,
  create,
  update,
  remove,
} from "../controllers/ListingsController.js";
import { isAuthenticated } from "../controllers/AuthenticationController.js";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const corsOptions = {
  origin: process.env.HOST || "http://localhost",
  optionsSuccessStatus: 200,
};

// Configure Multer for file uploads
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, "../listingimages");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}_${file.originalname}`;
    cb(null, filename);
  },
});
const upload = multer({ storage });

// Define a function to handle image upload
function handleImageUpload(req, res, next) {
  console.log("req.files: ", req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).send("No image uploaded.");
  }

  const uploadedImages = []; // Array to store filenames

  req.files.forEach((file) => {
    const filename = `${Date.now()}_${file.originalname}`;
    uploadedImages.push(filename); // Add filename to the array

    // Move the image to the upload directory using the file path
    fs.rename(file.path, path.join(uploadDir, filename), (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  });

  // Assign the array of uploaded image filenames to a request property
  req.uploadedImages = uploadedImages;

  next();
}

router.use(isAuthenticated);
router.get("/", index);
router.get("/new", cors(corsOptions), add);
router.get("/:id", show);
router.get("/:id/edit", cors(corsOptions), edit);

// Modify the create route to handle image upload
router.post(
  "/",
  cors(corsOptions),
  upload.array("images"),
  isAuthenticated,
  handleImageUpload,
  (req, res) => {
    // console.log("files in routes for listing: ", req.files); // Check if the 'image' file is present in req.files

    const { imageFilename } = req.files;
    create(req, res, { uploadedImages: imageFilename });
  }
);
router.post(
  "/:id",
  cors(corsOptions),
  upload.array("images"),
  isAuthenticated,
  handleImageUpload,
  (req, res) => {
    console.log("files in routes for listing: ", req.files); // Check if the 'image' file is present in req.files
    console.log("update route handler called");

    const { imageFilename } = req;
    update(req, res, { uploadedImages: imageFilename });
  }
);

router.delete("/:id", cors(corsOptions), remove);

export default router;
