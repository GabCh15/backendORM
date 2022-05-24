const dbController = require("./DBController");

module.exports = {
  addTeam: async (req, res) => {
    await dbController.addTeam(req.body.team);
    res.send(req.body.team);
  },
  addPlayer: async (req, res) => {
    await dbController.addPlayer(req.body.player);
    res.send(req.body.player);
  },
  addMatch: async (req, res) => {
    await dbController.addMatch(req.body.match);
    res.send(req.body.match);
  },
  addTeamsToMatch: async (req, res) => {
    await dbController.addTeamsToMatch(req.body);
    res.send(req.body);
  },
  getTeamWithPlayers:
  async (req, res) => {
    res.send(await dbController.getTeamWithPlayers(req.body));
  },
  getMatchWithTeams: async (req, res) => {
    res.send(await dbController.getMatchWithTeams(req.body));
  }
};
