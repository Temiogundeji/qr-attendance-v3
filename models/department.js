"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.belongsTo(models.School, {
        foreignKey: "schoolId",
        onDelete: "CASCADE",
      });
    }
  }
  Department.init(
    {
      departmentName: DataTypes.STRING,
      schoolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
