module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Schools",
      [
        {
          schoolName: "Applied Science",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Engineering",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Environmental",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          schoolName: "Communication and Information Technology",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Schools", null, {});
  },
};
