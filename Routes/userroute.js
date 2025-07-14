const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ name: "Rakesh",role:"developer" ,email:"vimalrakesh2003@gmail.com" }, { role: "Fullstack Dev" }]);
});

module.exports = router;
