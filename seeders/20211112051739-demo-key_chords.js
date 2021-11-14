'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Key_Chords', [
        {
          keyId: 1,
          chordId: 1
        },
        {
          keyId: 1,
          chordId: 2
        },
        {
          keyId: 1,
          chordId: 12
        },
        {
          keyId: 1,
          chordId: 13
        },
        {
          keyId: 1,
          chordId: 14
        },
        {
          keyId: 1,
          chordId: 24
        },
        {
          keyId: 2,
          chordId: 1
        },
        {
          keyId: 2,
          chordId: 2
        },
        {
          keyId: 2,
          chordId: 3
        },
        {
          keyId: 2,
          chordId: 13
        },
        {
          keyId: 2,
          chordId: 14
        },
        {
          keyId: 2,
          chordId: 15
        },
        {
          keyId: 3,
          chordId: 2
        },
        {
          keyId: 3,
          chordId: 3
        },
        {
          keyId: 3,
          chordId: 4
        },
        {
          keyId: 3,
          chordId: 14
        },
        {
          keyId: 3,
          chordId: 15
        },
        {
          keyId: 3,
          chordId: 16
        },
        {
          keyId: 4,
          chordId: 3
        },
        {
          keyId: 4,
          chordId: 4
        },
        {
          keyId: 4,
          chordId: 5
        },
        {
          keyId: 4,
          chordId: 15
        },
        {
          keyId: 4,
          chordId: 16
        },
        {
          keyId: 4,
          chordId: 17
        },
        {
          keyId: 5,
          chordId: 4
        },
        {
          keyId: 5,
          chordId: 5
        },
        {
          keyId: 5,
          chordId: 6
        },
        {
          keyId: 5,
          chordId: 16
        },
        {
          keyId: 5,
          chordId: 17
        },
        {
          keyId: 5,
          chordId: 18
        },
        {
          keyId: 6,
          chordId: 5
        },
        {
          keyId: 6,
          chordId: 6
        },
        {
          keyId: 6,
          chordId: 7
        },
        {
          keyId: 6,
          chordId: 17
        },
        {
          keyId: 6,
          chordId: 18
        },
        {
          keyId: 6,
          chordId: 19
        },
        {
          keyId: 7,
          chordId: 6
        },
        {
          keyId: 7,
          chordId: 7
        },
        {
          keyId: 7,
          chordId: 8
        },
        {
          keyId: 7,
          chordId: 18
        },
        {
          keyId: 7,
          chordId: 19
        },
        {
          keyId: 7,
          chordId: 20
        },
        {
          keyId: 8,
          chordId: 7
        },
        {
          keyId: 8,
          chordId: 8
        },
        {
          keyId: 8,
          chordId: 9
        },
        {
          keyId: 8,
          chordId: 19
        },
        {
          keyId: 8,
          chordId: 20
        },
        {
          keyId: 8,
          chordId: 21
        },
        {
          keyId: 9,
          chordId: 8
        },
        {
          keyId: 9,
          chordId: 9
        },
        {
          keyId: 9,
          chordId: 10
        },
        {
          keyId: 9,
          chordId: 20
        },
        {
          keyId: 9,
          chordId: 21
        },
        {
          keyId: 9,
          chordId: 22
        },
        {
          keyId: 10,
          chordId: 9
        },
        {
          keyId: 10,
          chordId: 10
        },
        {
          keyId: 10,
          chordId: 11
        },
        {
          keyId: 10,
          chordId: 21
        },
        {
          keyId: 10,
          chordId: 22
        },
        {
          keyId: 10,
          chordId: 23
        },
        {
          keyId: 11,
          chordId: 10
        },
        {
          keyId: 11,
          chordId: 11
        },
        {
          keyId: 11,
          chordId: 12
        },
        {
          keyId: 11,
          chordId: 22
        },
        {
          keyId: 11,
          chordId: 23
        },
        {
          keyId: 11,
          chordId: 24
        },
        {
          keyId: 12,
          chordId: 11
        },
        {
          keyId: 12,
          chordId: 12
        },
        {
          keyId: 12,
          chordId: 1
        },
        {
          keyId: 12,
          chordId: 23
        },
        {
          keyId: 12,
          chordId: 24
        },
        {
        keyId: 12,
        chordId: 13
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
