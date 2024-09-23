const Destination = require("../models/Destination.model");

const getDestinations = async (req, res) => {
  try {
    const destinationsArr = await Destination.find({});

    res.json(destinationsArr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { getDestinations };
