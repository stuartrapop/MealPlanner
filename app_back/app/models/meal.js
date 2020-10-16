const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Meal extends Model {}

Meal.init({
      day: {
        type: DataTypes.DATE,
        allowNull: false
      },
      time: {
        type: DataTypes.STRING,
        allowNull: false
      },

      createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updatedAt',
        type: DataTypes.DATE, 
    }, 
  },
    {
    sequelize,
    tableName: 'meal'
});

module.exports = Meal;
