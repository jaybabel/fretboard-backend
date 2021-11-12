'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Key_Scales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Key_Scales.init({
    keyid: DataTypes.INTEGER,
    scaleid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Key_Scales',
  });
  return Key_Scales;
};