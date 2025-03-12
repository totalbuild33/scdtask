const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

module.exports = app; // Export the app for testing

// Start server only if not in test mode
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
