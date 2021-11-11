'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Chord.belongsToMany(models.MusicalKey, { through: 'Key_Chords' });
    }
  };
  Chord.init({
    chordname: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    isbarrchord: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Chord',
  });
  return Chord;
};
