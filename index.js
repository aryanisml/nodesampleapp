// express-server/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5030;

app.use(cors());

// Endpoint that fetches data from the JSONPlaceholder API
app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
