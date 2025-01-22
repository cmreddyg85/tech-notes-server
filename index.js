const express = require("express");
const { get, set } = require("@vercel/blob"); // Import Vercel Blob methods
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const BUCKET_NAME = "feedback"; // Replace with a relevant bucket name

// Get feedback from Vercel Blob
app.get("/api/feedback/:route", async (req, res) => {
  const route = req.params.route || "default";
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      // Return an empty list if the feedback file does not exist
      return res.json({ feedback: [] });
    }

    const feedbackData = JSON.parse(result.body.toString());
    res.json({ feedback: feedbackData });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).send("Error fetching feedback.");
  }
});

// Save feedback to Vercel Blob
app.post("/api/feedback/:route", async (req, res) => {
  const route = req.params.route || "default";
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  const { name, feedback } = req.body;

  if (!name || !feedback) {
    return res.status(400).send("Name and feedback are required.");
  }

  try {
    let feedbackList = [];
    const result = await get(blobKey);

    if (result.status !== 404) {
      feedbackList = JSON.parse(result.body.toString());
    }

    feedbackList.push({ name, feedback });

    await set(blobKey, JSON.stringify(feedbackList, null, 2), {
      contentType: "application/json",
    });

    res.status(201).send("Feedback saved successfully.");
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).send("Error saving feedback.");
  }
});

// Delete feedback from Vercel Blob
app.delete("/api/feedback/:route/:index", async (req, res) => {
  const route = req.params.route || "default";
  const index = parseInt(req.params.index);
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      return res.status(404).send("Feedback file not found.");
    }

    const feedbackList = JSON.parse(result.body.toString());

    if (index < 0 || index >= feedbackList.length) {
      return res.status(400).send("Invalid feedback index.");
    }

    feedbackList.splice(index, 1); // Remove the feedback at the specified index

    await set(blobKey, JSON.stringify(feedbackList, null, 2), {
      contentType: "application/json",
    });

    res.status(200).send("Feedback deleted successfully.");
  } catch (error) {
    console.error("Error deleting feedback:", error);
    res.status(500).send("Error deleting feedback.");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
