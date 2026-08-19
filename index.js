const express = require("express");
const cors = require("cors");

const feedbackRoutes = require("./routes/feedbackRoutes");
const sbiRoutes = require("./routes/project1/project");
const idbiRoutes = require("./routes/project2/project");
const emailRoutes = require("./routes/email/email");

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cors());

app.use("/api", feedbackRoutes);
app.use("/api", sbiRoutes);
app.use("/api", idbiRoutes);
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
