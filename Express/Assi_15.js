// Assignment_express_basic.js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h2>Welcome to Express.js Demo!</h2><p>This is the Home Page.</p>");
});
app.get("/about", (req, res) => {
  res.send("<h3>About Page</h3><p>This page demonstrates Express.js routes.</p>");
});
app.get("/hello/:name", (req, res) => {
  const userName = req.params.name;
  res.send(`<h3>Hello, ${userName}!</h3><p>This is a personalized route example.</p>`);
});
app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000/");
  console.log("Express server running at http://localhost:3000/hello/indraja");
  console.log("Express server running at http://localhost:3000/about");
});
