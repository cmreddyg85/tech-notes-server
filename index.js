// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const bodyParser = require("body-parser");

// const app = express();
const PORT = 3000;

// // Middleware to parse JSON data in requests
// app.use(bodyParser.json());

// // Define the path to the text file
// const filePath = path.join(__dirname, "data", "sample.txt");

// // GET API: Read file content
// app.get("/read-file", (req, res) => {
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Error reading the file" });
//     }
//     res.json({ content: data });
//   });
// });

// // POST API: Write data to file
// app.post("/write-file", (req, res) => {
//   const { content } = req.body;

//   if (!content) {
//     return res.status(400).json({ error: "Content is required" });
//   }

//   fs.writeFile(filePath, content, "utf8", (err) => {
//     if (err) {
//       return res.status(500).json({ error: "Error writing to the file" });
//     }
//     res.json({ message: "File updated successfully" });
//   });
// });

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

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
  

// module.exports = app;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
