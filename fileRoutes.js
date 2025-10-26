import express from "express";
import multer from "multer";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Protected route
router.post("/upload", protect, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "No file uploaded" });
  }
  res.json({ success: true, file: req.file });
});

export default router;
