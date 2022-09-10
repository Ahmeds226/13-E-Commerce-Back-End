// Import:
// Express:
const router = require("express").Router();
// API routes:
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Export:
module.exports = router;
