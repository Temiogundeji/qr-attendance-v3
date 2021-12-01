module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Programs",
      [
        {
          programName: "Full-Time",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          programName: "Part-Time",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Programs", null, {});
  },
};
