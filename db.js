const Database = require("better-sqlite3");

const db = new Database("./database.db");

// USERS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`).run();

// REPORTS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS reports (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    type TEXT,
    date TEXT,
    file TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )
`).run();

// VITALS TABLE
db.prepare(`
  CREATE TABLE IF NOT EXISTS vitals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    heartRate INTEGER,
    bloodPressure TEXT,
    sugar INTEGER,
    oxygen INTEGER,
    weight INTEGER,
    temperature REAL,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )
`).run();
db.exec(`
CREATE TABLE IF NOT EXISTS reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  title TEXT,
  type TEXT,
  date TEXT,
  file_path TEXT
)
`);

module.exports = db;
