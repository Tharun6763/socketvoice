// server.js
const express = require("express");
const dotenv = require("dotenv");

const chats = require("./data/data");
const connectDB = require("./config/db");

const userRoutes = require("./Routes/userRoutes"); // Correctly import the router

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("socket");
});

// Use the correct route
app.use("/api/user", userRoutes); // Use the userRoutes here

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening at port ${port}`); // Correct log statement
});
