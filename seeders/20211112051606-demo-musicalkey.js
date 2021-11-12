'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'MusicalKeys', [
      {
        keyname: 'C'
      },
      {
        keyname: 'G'
      },
      {
        keyname: 'D'
      },
      {
        keyname: 'A'
      },
      {
        keyname: 'E'
      },
      {
        keyname: 'B'
      },
      {
        keyname: 'F#'
      },
      {
        keyname: 'Db'
      },
      {
        keyname: 'Ab'
      },
      {
        keyname: 'Eb'
      },
      {
        keyname: 'Bb'
      },
      {
        keyname: 'F'
      }
    ],
      {}
    );
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
