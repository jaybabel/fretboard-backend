'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicalKeys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MusicalKeys.belongsToMany(models.Chords, { through: models.Key_Chords });
      MusicalKeys.belongsToMany(models.Scales, { through: models.Key_Scales });
    }
  };
  MusicalKeys.init({
    keyname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MusicalKeys',
  });
  return MusicalKeys;
};

