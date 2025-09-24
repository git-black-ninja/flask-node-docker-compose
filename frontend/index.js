const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit", async (req, res) => {
  const { itemId, itemUUID, itemHash } = req.body;
  try {
    const r = await axios.post("http://backend:5000/submit",
       { itemId, itemUUID, itemHash });
    res.json(r.data);
  } catch {
    res.status(500).json({ message: "Backend error" });
  }
});

app.listen(3000, () => console.log("Frontend at http://localhost:3000"));

