'use strict';

module.exports = (sequelize, DataTypes) => {
  const MusicalKeys = sequelize.define('MusicalKeys', {
    keyname: DataTypes.STRING
  }, {});
  MusicalKeys.associate = function(models) {
    MusicalKeys.belongsToMany(models.Chords, { through: models.Key_Chords });
    MusicalKeys.belongsToMany(models.Scales, { through: models.Key_Scales });
  }
  return MusicalKeys;
};