const express = require("express");
const router = express.Router();
const sportsDBRouter = require("./sportsDBRouter");

router.use("/", sportsDBRouter);

module.exports = router;