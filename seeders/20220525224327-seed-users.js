'use strict';

const { hashingPass } = require('../helpers/helper');

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require('../data/user.json')
    users.forEach(user => {
      user.password = hashingPass(user.password)
      user.createdAt = new Date()
      user.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Users', users, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
