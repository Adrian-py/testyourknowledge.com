const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully!");
});

app.post("/api/register", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.post("/api/login", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is currently running on port: ${port}`);
});
