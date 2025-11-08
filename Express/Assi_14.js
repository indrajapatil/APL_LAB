const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h2>Welcome to Express GET & POST Demo</h2>");
});
app.get("/get", (req, res) => {
  res.json({
    message: "This is a GET request response",
    info: "Server is running smoothly",
  });
});
app.post("/post", (req, res) => {
  const userData = req.body;
  res.json({
    message: "POST request received successfully!",
    yourData: userData,
  });
});
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000/");
});
