const express = require("express");
const router = express.Router();
const db = require("../db");

// REGISTER
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  try {
    db.prepare(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
    ).run(name, email, password);

    res.json({ success: true });
  } catch {
    res.status(400).json({ error: "User already exists" });
  }
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = db
    .prepare("SELECT * FROM users WHERE email=? AND password=?")
    .get(email, password);

  if (!user) return res.status(401).json({ error: "Invalid login" });

  res.json({ user });
});

module.exports = router;
