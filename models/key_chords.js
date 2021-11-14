'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Key_Chords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Key_Chords.init({
    keyId: DataTypes.INTEGER,
    chordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Key_Chords',
  });
  return Key_Chords;
};