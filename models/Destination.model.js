const mongoose = require("mongoose");

// Define the schema for the Destinations entity
const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  averagePrice: {
    type: Number,
    default: null,
  },
});
const Destination = mongoose.model(
  "Destinations",
  destinationSchema,
  "Destinations"
);
module.exports = Destination;
