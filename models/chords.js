'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      //Chords.belongsToMany(models.MusicalKeys, { through: 'KeyChords' });
      Chords.belongsToMany(models.MusicalKeys, { through: models.Key_Chords  });
    }
  };
  Chords.init({
    chordname: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    isbarchord: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Chords',
  });
  return Chords;
};