"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.Student, {
        foreignKey: "studentId",
        onDelete: "CASCADE",
      });
      Attendance.belongsTo(models.Clas, {
        foreignKey: "classId",
        onDelete: "CASCADE",
      });
      Attendance.belongsTo(models.Lecturer, {
        foreignKey: "lecturerId",
        onDelete: "CASCADE",
      });
      Attendance.belongsTo(models.Course, {
        foreignKey: "courseId",
        onDelete: "CASCADE",
      });
    }
  }
  Attendance.init(
    {
      studentId: DataTypes.INTEGER,
      classId: DataTypes.INTEGER,
      lecturerId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      isPresent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Attendance",
    }
  );
  return Attendance;
};
