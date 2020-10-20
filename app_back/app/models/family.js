const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Family extends Model {}

Family.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'family',
});

module.exports = Family;
