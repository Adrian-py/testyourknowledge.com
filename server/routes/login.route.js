const express = require("express");
const jwt = require("jsonwebtoken");

const route = express.Router();

// User model
const { User } = require("../models/user.model.js");

route.post("/", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      "secrettoken123"
    );
    return res.json({ status: "ok", token: token });
  }

  return res.json({ status: "error", message: "User not found!" });
});

module.exports = route;
