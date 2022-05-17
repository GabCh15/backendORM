'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamsMatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models["TeamsMatches"].belongsTo(models["Match"],{foreignKey:"match_id"})
      models["TeamsMatches"].belongsTo(models["Team"],{foreignKey:"team_id"})
    }
  }
  TeamsMatches.init({
    team_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeamsMatches',
  });
  return TeamsMatches;
};