'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicalKey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MusicalKey.belongsToMany(models.Chords, { through: models.Key_Chords });
      MusicalKey.belongsToMany(models.Scales, { through: models.Key_Scales });
    }
  };
  MusicalKey.init({
    keyname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MusicalKey',
  });
  return MusicalKey;
};