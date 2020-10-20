const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  options: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    camelCase: true,
  },
  define: {
    // don't default to snake case
    underscored: true,
  },
});

module.exports = sequelize;
