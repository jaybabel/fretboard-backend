'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Recordings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Recordings.belongsTo(models.User_Account, { foreignKey: 'userId' });
    }
  };
  User_Recordings.init({
    recordingname: DataTypes.STRING,
    recordingurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Recordings',
  });
  return User_Recordings;
};