const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h2>Hello from Express.js!</h2>");
});
app.get("/user/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`<h3>Hello, ${userName}!</h3><p>This is a personalized response.</p>`);
});
app.post("/submit", (req, res) => {
  res.send("POST request received successfully!");
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});