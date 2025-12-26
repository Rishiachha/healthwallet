const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// ---------- DB: make sure users table exists ----------
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

// ---------- FILE UPLOAD SETUP ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// ---------- HEALTH CHECK ----------
app.get("/", (req, res) => {
  res.json({ status: "HealthWallet API running" });
});

// ---------- REGISTER ----------
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  try {
    db.prepare(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    ).run(name, email, password);

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Email already exists" });
  }
});

// ---------- LOGIN ----------
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = db
    .prepare("SELECT * FROM users WHERE email=? AND password=?")
    .get(email, password);

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ user });
});

// ---------- UPLOAD REPORT ----------
app.post("/api/reports", upload.single("file"), (req, res) => {
  try {
    const { title, type, date } = req.body;

    if (!req.file)
      return res.status(400).json({ message: "File is required" });

    res.json({
      message: "Report uploaded successfully",
      file: req.file.filename,
      title,
      type,
      date,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------- START SERVER ----------
app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
