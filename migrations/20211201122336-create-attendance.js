"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Attendances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      studentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Students",
          key: "id",
          as: "studentId",
        },
        allowNull: false,
      },
      classId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clas",
          key: "id",
          as: "classId",
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
      courseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Courses",
          key: "id",
          as: "courseId",
        },
        allowNull: false,
      },
      isPresent: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("Attendances");
  },
};
