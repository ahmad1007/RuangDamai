const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/users/oauth/google/callback",
    },
    (token, tokenSecret, profile, done) => {
      const { id, displayName, emails } = profile;
      const email = emails[0].value;
      const sql = "SELECT * FROM users WHERE google_id = ? OR email = ?";
      db.query(sql, [id, email], (err, results) => {
        if (err) return done(err);
        if (results.length > 0) {
          return done(null, results[0]);
        } else {
          const insertSql =
            "INSERT INTO users (username, email, google_id) VALUES (?, ?, ?)";
          db.query(insertSql, [displayName, email, id], (err, result) => {
            if (err) return done(err);
            const newUser = {
              id: result.insertId,
              username: displayName,
              email,
            };
            return done(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  done(null, token);
});

app.post("/api/users/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql =
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res
            .status(400)
            .json({ message: "Nama pengguna atau email sudah ada" });
        }
        return res.status(500).json({ message: "Gagal mendaftar" });
      }
      res.status(201).json({ message: "Akun berhasil dibuat" });
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal mendaftar" });
  }
});

app.post("/api/users/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Gagal login" });
    }
    if (results.length > 0) {
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(
          { id: user.id, username: user.username, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({ token });
      } else {
        res.status(400).json({ message: "Nama pengguna atau sandi salah" });
      }
    } else {
      res.status(400).json({ message: "Nama pengguna atau sandi salah" });
    }
  });
});

app.get(
  "/api/users/oauth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/api/users/oauth/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    res.redirect(`http://localhost:3000/oauth/callback?token=${req.user}`);
  }
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
