'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Key_Scales', [
        {
          keyid: 1,
          scaleid: 2
        },
        {
          keyid: 1,
          scaleid: 6
        },
        {
          keyid: 2,
          scaleid: 18
        },
        {
          keyid: 2,
          scaleid: 14
        },
        {
          keyid: 3,
          scaleid: 9
        },
        {
          keyid: 3,
          scaleid: 18
        },
        {
          keyid: 3,
          scaleid: 14
        },
        {
          keyid: 3,
          scaleid: 5
        },
        {
          keyid: 4,
          scaleid: 9
        },
        {
          keyid: 4,
          scaleid: 1
        },
        {
          keyid: 4,
          scaleid: 17
        },
        {
          keyid: 4,
          scaleid: 5
        },
        {
          keyid: 5,
          scaleid: 13
        },
        {
          keyid: 5,
          scaleid: 1
        },
        {
          keyid: 5,
          scaleid: 12
        },
        {
          keyid: 5,
          scaleid: 17
        },
        {
          keyid: 6,
          scaleid: 13
        },
        {
          keyid: 6,
          scaleid: 12
        },
        {
          keyid: 7,
          scaleid: 21
        },
        {
          keyid: 7,
          scaleid: 22
        },
        {
          keyid: 8,
          scaleid: 8
        },
        {
          keyid: 8,
          scaleid: 3
        },
        {
          keyid: 9,
          scaleid: 20
        },
        {
          keyid: 9,
          scaleid: 19
        },
        {
          keyid: 10,
          scaleid: 11
        },
        {
          keyid: 10,
          scaleid: 7
        },
        {
          keyid: 11,
          scaleid: 3
        },
        {
          keyid: 11,
          scaleid: 19
        },
        {
          keyid: 12,
          scaleid: 15
        },
        {
          keyid: 12,
          scaleid: 10
        }
      ],
    {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
