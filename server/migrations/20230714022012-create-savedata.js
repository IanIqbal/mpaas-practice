'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Savedata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      charx1: {
        type: Sequelize.INTEGER
      },
      charx2: {
        type: Sequelize.INTEGER
      },
      charx3: {
        type: Sequelize.INTEGER
      },
      chary1: {
        type: Sequelize.INTEGER
      },
      chary2: {
        type: Sequelize.INTEGER
      },
      chary3: {
        type: Sequelize.INTEGER
      },
      high_score: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Savedata');
  }
};