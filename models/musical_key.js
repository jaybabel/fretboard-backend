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
        MusicalKey.hasMany(models.Chords, { foreignKey: 'keyId' });
        MusicalKey.hasMany(models.Scales, { foreignKey: 'keyId' });
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
