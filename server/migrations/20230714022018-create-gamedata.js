'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Gamedata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SavedataId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Savedata",
          key:"id"
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Gamedata');
  }
};