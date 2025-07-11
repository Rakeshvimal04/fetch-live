const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ name: "Rakesh" }, { ROle: "Fullstack Dev" }]);
});

module.exports = router;
