const express = require('express')
const router = express.Router()
const sportsDBController = require('../controllers/sportsDBController')

router.use((req, res, next) => {
    console.log(req.body)
    next()
})

router.post('/addTeam', sportsDBController.addTeam)

router.post('/addPlayer', sportsDBController.addPlayer)

router.post('/addMatch', sportsDBController.addMatch)

router.post('/getTeamWithPlayers', sportsDBController.getTeamWithPlayers)

router.post('/addTeamsToMatch', sportsDBController.addTeamsToMatch)

router.post('/getMatchWithTeams', sportsDBController.getMatchWithTeams)

module.exports = router
