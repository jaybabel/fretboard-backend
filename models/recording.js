'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recording extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Recording.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Recording.init({
    recordingname: DataTypes.STRING,
    recordingurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recordings',
  });
  return Recording;
};
