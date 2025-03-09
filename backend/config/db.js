const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./config/foodease.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) console.error("Error connecting to database:", err.message);
  else console.log("Connected to SQLite database.");
});

module.exports = db;
