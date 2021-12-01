"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Clas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      levelId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Levels",
          key: "id",
          as: "levelId",
        },
        allowNull: false,
      },
      programId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Programs",
          key: "id",
          as: "programId",
        },
        allowNull: false,
      },
      weekId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Weeks",
          key: "id",
          as: "weekId",
        },
        allowNull: false,
      },
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Courses",
          key: "id",
          as: "courseId",
        },
        allowNull: false,
      },
      lecturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Lecturers",
          key: "id",
          as: "lecturerId",
        },
        allowNull: false,
      },
      remarks: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Clas");
  },
};
