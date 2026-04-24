const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const postsRouter = require("./src/routes/posts");
const jobsRouter = require("./src/routes/jobs");
const tendersRouter = require("./src/routes/tenders");
const documentsRouter = require("./src/routes/documents");
const eventsRouter = require("./src/routes/events");
const noticesRouter = require("./src/routes/notices");
const usersRouter = require("./src/routes/users");
const mailingRouter = require("./src/routes/mailing");

const { Pool } = require("pg");

// Single shared pool — created once at startup, reused for all requests
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const app = express();
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || "http://localhost:3000" }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Attach pool to every request so routers can access it
app.use((req, _res, next) => {
  req.db = pool;
  next();
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = user;
    next();
  });
};

// ─── Public routes (no auth required) ────────────────────────────────────────

app.get("/api/tenders/public", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tenders WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/tenders/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/notices/public", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notices WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/notices/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/events/public", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/events/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/posts/public", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/posts/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/documents/public", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'public' AND archived = FALSE"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/documents/legal", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'legal' AND archived = FALSE"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/legal:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/documents/policy", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM documents WHERE category = 'policy' AND archived = FALSE"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/documents/policy:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/jobs/public", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM jobs WHERE archived = FALSE");
    res.json(result.rows);
  } catch (error) {
    console.error("Error in /api/jobs/public:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ─── Login ────────────────────────────────────────────────────────────────────

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    await pool.query(
      "UPDATE users SET status = 'online', last_login = NOW() WHERE id = $1",
      [user.id]
    );

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: "online",
        last_login: new Date(),
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ─── Authenticated routes ─────────────────────────────────────────────────────

app.use("/api/posts", authenticateToken, postsRouter);
app.use("/api/jobs", authenticateToken, jobsRouter);
app.use("/api/tenders", authenticateToken, tendersRouter);
app.use("/api/documents", authenticateToken, documentsRouter);
app.use("/api/events", authenticateToken, eventsRouter);
app.use("/api/notices", authenticateToken, noticesRouter);
app.use("/api/users", authenticateToken, usersRouter);
app.use("/api/mailing", authenticateToken, mailingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
