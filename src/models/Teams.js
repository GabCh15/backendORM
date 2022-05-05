

module.exports = (sequelize, Sequelize) => {
  let teams = sequelize.define("Teams", {
    name: {
      type: Sequelize.STRING,
    },
  });
  return teams
};
