const express = require("express");
const route = express.Router();

route.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

module.exports = route;
