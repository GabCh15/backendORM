module.exports = (sequelize, Sequelize) => {
  let players = sequelize.define("Players", {
    name: {
      type: Sequelize.STRING,
    },
    position: { type: Sequelize.STRING },
    shirtNumber: { type: Sequelize.INTEGER },
  });
  return players;
};
