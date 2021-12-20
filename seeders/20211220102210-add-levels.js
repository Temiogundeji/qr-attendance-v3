module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Levels",
      [
        {
          levelName: "ND 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "ND 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "HND 1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          levelName: "HND 2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Levels", null, {});
  },
};
