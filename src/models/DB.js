require("dotenv").config()
const { Sequelize } = require("sequelize");
const Teams = require("./Teams.js");
const Players = require("./Players.js");
const Matches = require("./Matches.js");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

const db = { Sequelize, sequelize };

module.exports = {
  defineDB: () => {
    const teams = Teams(sequelize, Sequelize),
      players = Players(sequelize, Sequelize),
      matches = Matches(sequelize, Sequelize);
    teams.belongsToMany(matches,{ through: 'TeamsMatches' });
    matches.belongsToMany(teams,{ through: 'TeamsMatches' });
    teams.hasMany(players);
    db["Players"] = players;
    db["Teams"] = teams;
    db["Matches"] = matches;
    return db;
  },
  db,
};
