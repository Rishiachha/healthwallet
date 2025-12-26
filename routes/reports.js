const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// where files will be stored
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { title, type, date } = req.body;

    if (!req.file) return res.status(400).json({ message: "File required" });

    return res.json({
      message: "Uploaded successfully",
      file: req.file.filename,
      title,
      type,
      date
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
