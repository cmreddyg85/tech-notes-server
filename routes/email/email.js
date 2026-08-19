const express = require("express");

const router = express.Router();
const { emailData } = require("../../data/email");

router.get("/email-user-details", (req, res) => {
  res.json(emailData);
});

module.exports = router;
