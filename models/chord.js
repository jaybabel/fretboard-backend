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
        Chord.hasMany(models.MusicalID, { foreignKey: 'keyId' });
    }
  };
  Chord.init({
    chordname: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chord',
  });
  return Chord;
};
