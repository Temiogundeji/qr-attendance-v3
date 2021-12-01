module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Semesters",
      [
        {
          semesterName: "First Semester",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          semesterName: "Second Semester",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Semesters", null, {});
  },
};
