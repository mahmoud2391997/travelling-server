// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const destinationsRoute = require("./routes/destination.route");

// Create an Express application
const app = express();
const port = 3000; // Port on which the server will run
require("dotenv").config();
const connectionString = process.env.DB_CONNECTION_STRING;
app.use(express.json());

app.use(cors());
app.use("/api/destinations", destinationsRoute);
// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(connectionString, { dbName: "Travelling" })
  .then(() => {
    {
      console.log("Connected to database!");

      app.listen(port, () => {
        console.log(`i am on port ${port}`);
      });
    }
  })
  .catch(() => {
    console.log("Connection failed!");
  });
