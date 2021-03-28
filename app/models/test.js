module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    email: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Tutorial;
};
