const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class MealHasRecipe extends Model {}

MealHasRecipe.init({
      number_people: {
        type: DataTypes.INTEGER,
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
    tableName: 'meal_has_recipe'
});

module.exports = MealHasRecipe;
