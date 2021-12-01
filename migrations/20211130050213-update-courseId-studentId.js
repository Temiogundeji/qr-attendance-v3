module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn("StudentCourses", "studentId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Student hasMany Courses n:n
          model: "Students",
          key: "id",
        },
      }),
      queryInterface.changeColumn("StudentCourses", "courseId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // Courses hasMany Students n:n
          model: "Courses",
          key: "id",
        },
      }),
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("StudentCourses", "studentId"),
      queryInterface.removeColumn("StudentCourses", "courseId"),
    ]);
  },
};
