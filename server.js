const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const USERS_FILE = path.join(__dirname, "users.json");

// Load users from file
function loadUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

// Save users to file
function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Default users
const defaultUsers = [
  { username: "student", password: "123", role: "student" },
  { username: "staff", password: "123", role: "staff" }
];

// Register API
app.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  
  if (!username || !password) {
    res.json({ success: false, message: "Username and password are required" });
    return;
  }
  
  const users = loadUsers();
  
  // Check if username already exists
  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    res.json({ success: false, message: "Username already exists" });
    return;
  }
  
  // Add new user
  const newUser = { username, password, role: role || "student" };
  users.push(newUser);
  saveUsers(users);
  
  res.json({ success: true, message: "Registration successful" });
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  
  // Check registered users first
  let user = users.find(u => u.username === username && u.password === password);
  
  // If not found, check default users
  if (!user) {
    user = defaultUsers.find(u => u.username === username && u.password === password);
  }
  
  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.json({ success: false });
  }
});

// AI Chat API
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  res.json({ reply: data.choices[0].message.content });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));