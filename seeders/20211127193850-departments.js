module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Departments",
      [
        {
          departmentName: "Computer Science",
          schoolId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departmentName: "Electrical Engineering",
          schoolId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departmentName: "Surveying and Geo-infomatics",
          schoolId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          departmentName: "Office Technology Management",
          schoolId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  },
};
