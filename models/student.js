"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Level, {
        foreignKey: "levelId",
        onDelete: "CASCADE",
      });

      Student.belongsTo(models.Department, {
        foreignKey: "departmentId",
        onDelete: "CASCADE",
      });

      Student.belongsToMany(models.Course, {
        through: "StudentCourse",
        foreignKey: "Student_studentId",
      });
    }
  }
  Student.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      matricNo: DataTypes.STRING,
      departmentId: DataTypes.INTEGER,
      levelId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
