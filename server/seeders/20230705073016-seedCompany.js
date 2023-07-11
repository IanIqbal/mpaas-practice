'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let companies = [
      {
        symbol: "BA",
        name: "Boeing Company",
        sector: "aerospace"
      },
      {
        symbol: "DIS",
        name: "Walt Disney Company",
        sector: "amusement and recreation"
      },
      {
        symbol: "AMZN",
        name: "Amazon.com Inc",
        sector: "specialty distribution"
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corp",
        sector: "computer software"
      },
      {
        symbol: "TSLA",
        name: "Tesla Inc",
        sector: "auto manufacturing"
      },
      {
        symbol: "NVDA",
        name: "Nvidia Corp",
        sector: "semiconductor"
      },
      {
        symbol: "AAPL",
        name: "Apple Inc",
        sector: "computer manufacturing"
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Cl C",
        sector: "computer software"
      }
    ]

    await queryInterface.bulkInsert('Companies', companies, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Companies', null, {});
  }
};
