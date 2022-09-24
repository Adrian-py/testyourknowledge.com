// Packages imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Routes import
const registerRoute = require("./routes/register.route");
const loginRoute = require("./routes/login.route");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);

// Mongoose connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully!");
});

app.listen(port, () => {
  console.log(`Server is currently running on port: ${port}`);
});
