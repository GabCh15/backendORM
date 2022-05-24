const db = require("../../models/index.js");

const insert = async (table, data) => {
  await db[table].create(data);
};

const getIdByName = async (table, name) => {
  return (await db[table].findOne({ where: { name: name } })).id;
};
const addTeam = async (data) => {
  await insert("Team", data);
};

const addPlayer = async (data) => {
  data["team_id"] = await getIdByName("Team", data["team"]);
  await insert("Player", data);
};

const addMatch = async (data) => {
  await insert("Match", data);
};

const addTeamsToMatch = async (data) => {
  console.log(data);
  data["team_id"] = await getIdByName("Team", data["team1"]);
  data["match_id"] = await getIdByName("Match", data["match"]);
  await insert("TeamsMatches", data);
  data["team_id"] = await getIdByName("Team", data["team2"]);
  await insert("TeamsMatches", data);
};

const getTeamWithPlayers = async (data) => {
  return await db["Team"].findOne({
    where: { name: data["team"] },
    include: db["Player"],
  });
};

const getMatchWithTeams = async (data) => {
  return await db["TeamsMatches"].findAll({
    where: { match_id: await getIdByName("Match", data["match"]) },
    include: db["Team"],
  });
};

module.exports = {
  addTeam,
  addPlayer,
  addMatch,
  addTeamsToMatch,
  getTeamWithPlayers,
  getMatchWithTeams
};
