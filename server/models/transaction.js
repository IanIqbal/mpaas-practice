'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.hasMany(models.TransactionItem)
    }
  }
  Transaction.init({
    totalPrice: DataTypes.NUMBER,
    payMethod: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    totalItem: DataTypes.INTEGER
   
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};