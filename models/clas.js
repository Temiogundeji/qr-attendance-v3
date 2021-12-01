"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clas.belongsTo(models.Level, {
        foreignKey: "levelId",
        onDelete: "CASCADE",
      });
      Clas.belongsTo(models.Program, {
        foreignKey: "programId",
        onDelete: "CASCADE",
      });

      Clas.belongsTo(models.Week, {
        foreignKey: "weekId",
        onDelete: "CASCADE",
      });
      Clas.belongsTo(models.Course, {
        foreignKey: "courseId",
        onDelete: "CASCADE",
      });
      Clas.belongsTo(models.Lecturer, {
        foreignKey: "lecturerId",
        onDelete: "CASCADE",
      });
    }
  }
  Clas.init(
    {
      levelId: DataTypes.INTEGER,
      programId: DataTypes.INTEGER,
      weekId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER,
      lecturerId: DataTypes.INTEGER,
      remarks: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clas",
    }
  );
  return Clas;
};
