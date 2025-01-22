const PORT = 3000;

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


const dataDir = path.join(process.cwd(), "data");

// Ensure the data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Get feedback from a file
app.get("/api/feedback/:route", (req, res) => {
  const route = req.params.route || "default";
  const filePath = path.join(dataDir, `${route}.txt`);

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    res.json({ feedback: JSON.parse(data) });
  } else {
    res.json({ feedback: [] });
  }
});

// Save feedback to a file
app.post("/api/feedback/:route", (req, res) => {
    console.log("Incoming Body:", req.body); // Add this line
    const route = req.params.route || "default";
    const filePath = path.join(dataDir, `${route}.txt`);
  
    const { name, feedback } = req.body;
  
    if (!name || !feedback) {
      return res.status(400).send("Name and feedback are required.");
    }
  
    let feedbackList = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      feedbackList = JSON.parse(data);
    }
  
    feedbackList.push({ name, feedback });
    fs.writeFileSync(filePath, JSON.stringify(feedbackList, null, 2));
  
    res.status(201).send("Feedback saved successfully.");
  });

  app.delete("/api/feedback/:route/:index", (req, res) => {
    const route = req.params.route || "default";
    const index = parseInt(req.params.index);
    const filePath = path.join(dataDir, `${route}.txt`);
  
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Feedback file not found.");
    }
  
    const data = fs.readFileSync(filePath, "utf-8");
    const feedbackList = JSON.parse(data);
  
    if (index < 0 || index >= feedbackList.length) {
      return res.status(400).send("Invalid feedback index.");
    }
  
    feedbackList.splice(index, 1); // Remove the feedback at the specified index
    fs.writeFileSync(filePath, JSON.stringify(feedbackList, null, 2));
  
    res.status(200).send("Feedback deleted successfully.");
  });
  

// module.exports = app;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
