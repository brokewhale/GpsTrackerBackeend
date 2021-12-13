var express = require("express");

const router = express.Router();

router.get("/locations", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

module.exports = router;
