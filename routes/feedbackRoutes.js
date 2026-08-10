const express = require("express");
const { get, set } = require("@vercel/blob");

const router = express.Router();
const BUCKET_NAME = "feedback";

router.get("/feedback/:route", async (req, res) => {
  const route = req.params.route || "default";
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      return res.json({ feedback: [] });
    }

    const feedbackData = JSON.parse(result.body.toString());
    return res.json({ feedback: feedbackData });
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return res.status(500).send("Error fetching feedback.");
  }
});

router.post("/feedback/:route", async (req, res) => {
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

    return res.status(201).send("Feedback saved successfully.");
  } catch (error) {
    console.error("Error saving feedback:", error);
    return res.status(500).send("Error saving feedback.");
  }
});

router.delete("/feedback/:route/:index", async (req, res) => {
  const route = req.params.route || "default";
  const index = Number.parseInt(req.params.index, 10);
  const blobKey = `${BUCKET_NAME}/${route}.json`;

  try {
    const result = await get(blobKey);

    if (result.status === 404) {
      return res.status(404).send("Feedback file not found.");
    }

    const feedbackList = JSON.parse(result.body.toString());

    if (Number.isNaN(index) || index < 0 || index >= feedbackList.length) {
      return res.status(400).send("Invalid feedback index.");
    }

    feedbackList.splice(index, 1);

    await set(blobKey, JSON.stringify(feedbackList, null, 2), {
      contentType: "application/json",
    });

    return res.status(200).send("Feedback deleted successfully.");
  } catch (error) {
    console.error("Error deleting feedback:", error);
    return res.status(500).send("Error deleting feedback.");
  }
});

module.exports = router;
