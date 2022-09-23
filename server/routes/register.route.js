const express = require("express");
const route = express.Router();

// User Model
const User = require("../models/user.model.js");

route.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await User.create({
      username: username,
      email: email,
      password: password,
    });

    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", message: "Email has been used!" });
  }
});

module.exports = route;
