const express = require("express");
const router = express.Router();
const sportsDBController = require("../controllers/sportsDBController");

router.post("/addTeam", sportsDBController.addTeam);

router.post("/addPlayer", sportsDBController.addPlayer);

router.post("/addMatch", sportsDBController.addMatch);


module.exports = router;