'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Scales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Scales.hasMany(models.MusicalKey, { through: 'Key_Scales' });
    }
  };
  Scales.init({
    scalename: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Scales',
  });
  return Scales;
};