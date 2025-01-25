const express = require('express');
const routes = require("./routes/routes");
const app = express();

app.use(express.json()); // Middleware to parse JSON
app.use("/api", routes); // Mount routes

// Use the port from an environment variable or default to 3000
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

