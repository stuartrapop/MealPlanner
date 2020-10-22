const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Meal extends Model {}

Meal.init({
  day: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'meal',
});

module.exports = Meal;
