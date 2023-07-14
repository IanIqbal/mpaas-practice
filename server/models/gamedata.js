'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gamedata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Gamedata.belongsTo(models.Savedata)
      Gamedata.belongsTo(models.User)
    }
  }
  Gamedata.init({
    gjds_saveId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gamedata',
  });
  return Gamedata;
};