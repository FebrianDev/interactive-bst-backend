'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init({
    name_project: DataTypes.STRING,
    id_user:DataTypes.INTEGER,
    data_type: DataTypes.STRING,
    bst_operation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};