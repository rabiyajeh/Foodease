const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const db = new sqlite3.Database("./foodease.db", (err) => {
    if (err) console.error("Database connection error:", err.message);
    else console.log("✅ SQLite Database connected.");
});

// Create Tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT CHECK( role IN ('customer', 'admin') ) DEFAULT 'customer'
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS menu (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        image TEXT,
        description TEXT,
        available INTEGER DEFAULT 1
    )`);
});

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "2h" });
};

// **User Registration**
app.post("/api/register", (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword], function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ message: "User registered successfully" });
        });
});

// **User Login**
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
        if (err || !user || !bcrypt.compareSync(password, user.password))
            return res.status(401).json({ message: "Invalid credentials" });

        const token = generateToken(user.id, user.role);
        res.json({ token, user: { id: user.id, name: user.name, role: user.role } });
    });
});

// **Get Menu Items**
app.get("/api/menu", (req, res) => {
    db.all("SELECT * FROM menu", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// **Add a Dish (Admin)**
app.post("/api/menu", (req, res) => {
    const { name, category, price, image, description } = req.body;
    db.run("INSERT INTO menu (name, category, price, image, description) VALUES (?, ?, ?, ?, ?)",
        [name, category, price, image, description], function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID, name, category, price, image, description });
        });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
