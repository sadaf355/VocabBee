require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Health check
app.get("/", (req, res) => {
  res.send("VocabBee backend is running!");
});

// Register endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) return res.status(400).json({ message: "All fields required" });

    const existing = await pool.query("SELECT 1 FROM users WHERE email=$1", [email]);
    if (existing.rows.length > 0) return res.status(409).json({ message: "User already registered" });

    const hashed = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users (email, username, password, onboarded, assessed) VALUES ($1, $2, $3, false, false)",
      [email, username, hashed]
    );

    res.json({ message: "Registered successfully" });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields required" });

    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not registered" });

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      message: "Login successful",
      user: {
        email: user.email,
        username: user.username,
        onboarded: user.onboarded,
        assessed: user.assessed,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// Onboarding
app.post("/api/onboarded", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await pool.query("UPDATE users SET onboarded=true WHERE email=$1 RETURNING *", [email]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Onboarding complete" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update onboarding", error: err.message });
  }
});

// Assessment
app.post("/api/assessed", async (req, res) => {
  try {
    const { email } = req.body;
    const result = await pool.query("UPDATE users SET assessed=true WHERE email=$1 RETURNING *", [email]);
    if (result.rows.length === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "Assessment complete" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update assessment", error: err.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
