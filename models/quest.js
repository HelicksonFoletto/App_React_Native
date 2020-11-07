'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quest.belongsTo(models.User);
    }
  };
  Quest.init({
    HighFever: DataTypes.BOOLEAN,
    seasickness: DataTypes.BOOLEAN,
    unwell: DataTypes.BOOLEAN,
    tiredness: DataTypes.BOOLEAN,
    abdominalPain: DataTypes.BOOLEAN,
    headache: DataTypes.BOOLEAN,
    eyePain: DataTypes.BOOLEAN,
    redSpots: DataTypes.BOOLEAN,
    IamFine: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quest',
  });
  return Quest;
};