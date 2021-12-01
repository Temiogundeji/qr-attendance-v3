module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Courses",
      [
        {
          courseTitle: "Introduction to Computer",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseTitle: "introduction to Digital Electronics",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          courseTitle: "Introduction to Electronics",
          semesterId: 1,
          lecturerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Courses", null, {});
  },
};
