const express = require("express");
const app = express();
const cors = require("cors");

// cors middleware
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello Qt, from Docker! Happy coding!",
  });
});

app.listen(4000, () => {
  console.log("Server started on port 4000 ....");
});
