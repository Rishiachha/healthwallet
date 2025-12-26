const express = require("express");
const router = express.Router();
const db = require("../db");

// GET CURRENT VITALS
router.get("/:userId", (req, res) => {
  const vitals = db
    .prepare("SELECT * FROM vitals WHERE user_id=? ORDER BY id DESC LIMIT 1")
    .get(req.params.userId);

  res.json(vitals || {});
});

// SAVE VITALS
router.post("/", (req, res) => {
  const { user_id, heartRate, bloodPressure, sugar, oxygen, weight, temperature } = req.body;

  db.prepare(`
    INSERT INTO vitals
    (user_id, heartRate, bloodPressure, sugar, oxygen, weight, temperature)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run(user_id, heartRate, bloodPressure, sugar, oxygen, weight, temperature);

  res.json({ success: true });
});

module.exports = router;
