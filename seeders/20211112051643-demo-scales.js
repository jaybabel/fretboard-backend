'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Scales', 
  [
    {
      scalename: 'A Major',
      imageurl: 'A_Major_scale.png'
    },
    {
      scalename: 'A Minor',
      imageurl: 'A_Minor_scale.png'
    },
    {
      scalename: 'A# Major',
      imageurl: 'A#_Major_scale.png'
    },
    {
      scalename: 'A# Minor',
      imageurl: 'A#_Minor_scale.png'
    },
    {
      scalename: 'B Minor',
      imageurl: 'B_Minor_scale.png'
    },
    {
      scalename: 'C Major',
      imageurl: 'C_Major_scale.png'
    },
    {
      scalename: 'C Minor',
      imageurl: 'C_Minor_scale.png'
    },
    {
      scalename: 'C# Major',
      imageurl: 'C#_Major_scale.png'
    },
    {
      scalename: 'D Major',
      imageurl: 'D_Major_scale.png'
    },
    {
      scalename: 'D Minor',
      imageurl: 'D_Minor_scale.png'
    },
    {
      scalename: 'D# Major',
      imageurl: 'D#_Major_scale.png'
    },
    {
      scalename: 'Db Minor',
      imageurl: 'Db_Minor_scale.png'
    },
    {
      scalename: 'E Major',
      imageurl: 'E_Major_scale.png'
    },
    {
      scalename: 'E Minor',
      imageurl: 'E_Minor_scale.png'
    },
    {
      scalename: 'F Major',
      imageurl: 'F_Major_scale.png'
    },
    {
      scalename: 'F Minor',
      imageurl: 'F_Minor_scale.png'
    },
    {
      scalename: 'F# Minor',
      imageurl: 'F#_Minor_scale.png'
    },
    {
      scalename: 'G Major',
      imageurl: 'G_Major_scale.png'
    },
    {
      scalename: 'G Minor',
      imageurl: 'G_Minor_scale.png'
    },
    {
      scalename: 'G# Major',
      imageurl: 'G#_Major_scale.png'
    },
    {
      scalename: 'F# Major',
      imageurl: 'F#_Major_scale.png'
    },
    {
      scalename: 'Ab Minor',
      imageurl: 'Ab_Minor_scale.png'
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
