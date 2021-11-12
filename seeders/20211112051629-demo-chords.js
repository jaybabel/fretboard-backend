'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Chords',
      [
        {
          chordname: 'C',
          imageurl: 'C_open.png',
          isbarchord: false
        },
        {
          chordname: 'G',
          imageurl: 'G_open.png',
          isbarchord: false
        },
        {
          chordname: 'D',
          imageurl: 'D_open.png',
          isbarchord: false
        },
        {
          chordname: 'A',
          imageurl: 'A_open.png',
          isbarchord: false
        },
        {
          chordname: 'E',
          imageurl: 'E_open.png',
          isbarchord: false
        },
        {
          chordname: 'B',
          imageurl: 'B_open.png',
          isbarchord: false
        },
        {
          chordname: 'F#',
          imageurl: 'F#_open.png',
          isbarchord: false
        },
        {
          chordname: 'Db',
          imageurl: 'Db_open.png',
          isbarchord: false
        },
        {
          chordname: 'Ab',
          imageurl: 'Ab_open.png',
          isbarchord: false
        },
        {
          chordname: 'Eb',
          imageurl: 'Eb_open.png',
          isbarchord: false
        },
        {
          chordname: 'Bb',
          imageurl: 'Bb_open.png',
          isbarchord: false
        },
        {
          chordname: 'F',
          imageurl: 'F_open.png',
          isbarchord: false
        },
        {
          chordname: 'Am',
          imageurl: 'Am_open.png',
          isbarchord: false
        },
        {
          chordname: 'Em',
          imageurl: 'Em_open.png',
          isbarchord: false
        },
        {
          chordname: 'Bm',
          imageurl: 'Bm_open.png',
          isbarchord: false
        },
        {
          chordname: 'F#m',
          imageurl: 'F#m_open.png',
          isbarchord: false
        },
        {
          chordname: 'C#m',
          imageurl: 'C#m_open.png',
          isbarchord: false
        },
        {
          chordname: 'G#m',
          imageurl: 'G#m_open.png',
          isbarchord: false
        },
        {
          chordname: 'Ebm',
          imageurl: 'Ebm_open.png',
          isbarchord: false
        },
        {
          chordname: 'Bbm',
          imageurl: 'Bbm_open.png',
          isbarchord: false
        },
        {
          chordname: 'Fm',
          imageurl: 'Fm_open.png',
          isbarchord: false
        },
        {
          chordname: 'Cm',
          imageurl: 'Cm_open.png',
          isbarchord: false
        },
        {
          chordname: 'Gm',
          imageurl: 'Gm_open.png',
          isbarchord: false
        },
        {
          chordname: 'Dm',
          imageurl: 'Dm_open.png',
          isbarchord: false
        },
        {
          chordname: 'C',
          imageurl: 'C_bar.png',
          isbarchord: true
        },
        {
          chordname: 'G',
          imageurl: 'G_bar.png',
          isbarchord: true
        },
        {
          chordname: 'D',
          imageurl: 'D_bar.png',
          isbarchord: true
        },
        {
          chordname: 'A',
          imageurl: 'A_bar.png',
          isbarchord: true
        },
        {
          chordname: 'E',
          imageurl: 'E_bar.png',
          isbarchord: true
        },
        {
          chordname: 'B',
          imageurl: 'B_bar.png',
          isbarchord: true
        },
        {
          chordname: 'F#',
          imageurl: 'F#_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Db',
          imageurl: 'Db_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Ab',
          imageurl: 'Ab_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Eb',
          imageurl: 'Eb_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Bb',
          imageurl: 'Bb_bar.png',
          isbarchord: true
        },
        {
          chordname: 'F',
          imageurl: 'F_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Am',
          imageurl: 'Am_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Em',
          imageurl: 'Em_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Bm',
          imageurl: 'Bm_bar.png',
          isbarchord: true
        },
        {
          chordname: 'F#m',
          imageurl: 'F#m_bar.png',
          isbarchord: true
        },
        {
          chordname: 'C#m',
          imageurl: 'C#m_bar.png',
          isbarchord: true
        },
        {
          chordname: 'G#m',
          imageurl: 'G#m_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Ebm',
          imageurl: 'Ebm_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Bbm',
          imageurl: 'Bbm_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Fm',
          imageurl: 'Fm_bar.png',
          isbarchord: true
        },
        {
          chordname: 'Cm',
          imageurl: 'Cm_bar.png',
          isbarchord: true
        },        {
          chordname: 'Gm',
          imageurl: 'Gm_bar.png',
          isbarchord: true
        },        {
          chordname: 'Dm',
          imageurl: 'Dm_bar.png',
          isbarchord: true
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
