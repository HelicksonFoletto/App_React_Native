'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Quest);
      User.hasMany(models.Local);
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    dateBirth: DataTypes.STRING,
    phone: DataTypes.STRING,
    sex: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};