module.exports = (sequelize, Sequelize) => {
    let teams = sequelize.define("Matches", {
      name: {
        type: Sequelize.STRING,
      },
    });
    return teams
  };
  