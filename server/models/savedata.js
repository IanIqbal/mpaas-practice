'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Savedata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Savedata.hasOne(models.Gamedata)
    }
  }
  Savedata.init({
    charx1: DataTypes.INTEGER,
    charx2: DataTypes.INTEGER,
    charx3: DataTypes.INTEGER,
    chary1: DataTypes.INTEGER,
    chary2: DataTypes.INTEGER,
    chary3: DataTypes.INTEGER,
    high_score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Savedata',
  });
  return Savedata;
};