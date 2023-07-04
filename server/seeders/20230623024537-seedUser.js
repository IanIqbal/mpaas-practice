'use strict';

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    let users = [
      {username:"ian", password: bcryptjs.hashSync("12345"), rekening: Math.ceil(Math.random() * 1000000000),saldo:100000000},
      {username:"user1", password: bcryptjs.hashSync("12345"), rekening: Math.ceil(Math.random() * 1000000000),saldo:100000000},
      {username:"user2", password: bcryptjs.hashSync("12345"), rekening: Math.ceil(Math.random() * 1000000000),saldo:100000000}


    ]

    await queryInterface.bulkInsert("Users",users , {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
