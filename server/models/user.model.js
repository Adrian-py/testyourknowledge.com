const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "user-data" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
