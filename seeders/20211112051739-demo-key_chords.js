'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'People', [
        {
          keyid: 1,
          chordid: 1
        },
        {
          keyid: 1,
          chordid: 2
        },
        {
          keyid: 1,
          chordid: 12
        },
        {
          keyid: 1,
          chordid: 13
        },
        {
          keyid: 1,
          chordid: 14
        },
        {
          keyid: 1,
          chordid: 24
        },
        {
          keyid: 2,
          chordid: 1
        },
        {
          keyid: 2,
          chordid: 2
        },
        {
          keyid: 2,
          chordid: 3
        },
        {
          keyid: 2,
          chordid: 13
        },
        {
          keyid: 2,
          chordid: 14
        },
        {
          keyid: 2,
          chordid: 15
        },
        {
          keyid: 3,
          chordid: 2
        },
        {
          keyid: 3,
          chordid: 3
        },
        {
          keyid: 3,
          chordid: 4
        },
        {
          keyid: 3,
          chordid: 14
        },
        {
          keyid: 3,
          chordid: 15
        },
        {
          keyid: 3,
          chordid: 16
        },
        {
          keyid: 4,
          chordid: 3
        },
        {
          keyid: 4,
          chordid: 4
        },
        {
          keyid: 4,
          chordid: 5
        },
        {
          keyid: 4,
          chordid: 15
        },
        {
          keyid: 4,
          chordid: 16
        },
        {
          keyid: 4,
          chordid: 17
        },
        {
          keyid: 5,
          chordid: 4
        },
        {
          keyid: 5,
          chordid: 5
        },
        {
          keyid: 5,
          chordid: 6
        },
        {
          keyid: 5,
          chordid: 16
        },
        {
          keyid: 5,
          chordid: 17
        },
        {
          keyid: 5,
          chordid: 18
        },
        {
          keyid: 6,
          chordid: 5
        },
        {
          keyid: 6,
          chordid: 6
        },
        {
          keyid: 6,
          chordid: 7
        },
        {
          keyid: 6,
          chordid: 17
        },
        {
          keyid: 6,
          chordid: 18
        },
        {
          keyid: 6,
          chordid: 19
        },
        {
          keyid: 7,
          chordid: 6
        },
        {
          keyid: 7,
          chordid: 7
        },
        {
          keyid: 7,
          chordid: 8
        },
        {
          keyid: 7,
          chordid: 18
        },
        {
          keyid: 7,
          chordid: 19
        },
        {
          keyid: 7,
          chordid: 20
        },
        {
          keyid: 8,
          chordid: 7
        },
        {
          keyid: 8,
          chordid: 8
        },
        {
          keyid: 8,
          chordid: 9
        },
        {
          keyid: 8,
          chordid: 19
        },
        {
          keyid: 8,
          chordid: 20
        },
        {
          keyid: 8,
          chordid: 21
        },
        {
          keyid: 9,
          chordid: 8
        },
        {
          keyid: 9,
          chordid: 9
        },
        {
          keyid: 9,
          chordid: 10
        },
        {
          keyid: 9,
          chordid: 20
        },
        {
          keyid: 9,
          chordid: 21
        },
        {
          keyid: 9,
          chordid: 22
        },
        {
          keyid: 10,
          chordid: 9
        },
        {
          keyid: 10,
          chordid: 10
        },
        {
          keyid: 10,
          chordid: 11
        },
        {
          keyid: 10,
          chordid: 21
        },
        {
          keyid: 10,
          chordid: 22
        },
        {
          keyid: 10,
          chordid: 23
        },
        {
          keyid: 11,
          chordid: 10
        },
        {
          keyid: 11,
          chordid: 11
        },
        {
          keyid: 11,
          chordid: 12
        },
        {
          keyid: 11,
          chordid: 22
        },
        {
          keyid: 11,
          chordid: 23
        },
        {
          keyid: 11,
          chordid: 24
        },
        {
          keyid: 12,
          chordid: 11
        },
        {
          keyid: 12,
          chordid: 12
        },
        {
          keyid: 12,
          chordid: 1
        },
        {
          keyid: 12,
          chordid: 23
        },
        {
          keyid: 12,
          chordid: 24
        },
        {
        keyid: 12,
        chordid: 13
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
