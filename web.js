const express = require("express");
const app = express();
const { json } = require("body-parser");

// Middleware for parsing JSON
app.use(json());

// POST endpoint for receiving coordinates
app.post("/send-coordinates", (req, res) => {
  const latitude = req.body.latitude;
  const longitude = req.body.longitude;
  const hospital = req.body.hospital;

  // Perform processing with the received coordinates
  // Here, we are simply logging the data
  console.log("Received coordinates:", latitude, longitude);
  console.log("Hospital:", hospital);

  // Send a response
  res.json({ message: "Coordinates received successfully" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
