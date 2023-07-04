'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransactionItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      ItemId: {
        type: Sequelize.INTEGER
      },
      TransactionId:{
        type:Sequelize.INTEGER,
        references:{
          model:"Transactions",
          key:"id"
        }
      },
      price: {
        type: Sequelize.INTEGER
      },
      totalPrice: {
        type: Sequelize.INTEGER
      },
      totalPiece: {
        type: Sequelize.INTEGER
      },
      buyer: {
        type: Sequelize.STRING
      },
      thumbnailUrl:{
        type: Sequelize.STRING
      },
      brand:{
        type:Sequelize.STRING
      },
      category:{
        type:Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransactionItems');
  }
};