const express = require("express");
const route = express.Router();

// User model
const { User } = require("../models/user.model.js");

route.post("/", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) res.json({ status: "ok" });
  else res.json({ status: "error", message: "User not found!" });
});

module.exports = route;
