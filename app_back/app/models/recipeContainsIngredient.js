const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class RecipeContainsIngredient extends Model {}

RecipeContainsIngredient.init({
      quantity: {
        type: DataTypes.NUMBER,
        allowNull: false
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: true
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
    tableName: 'recipe_contains_ingredient'
});

module.exports = RecipeContainsIngredient;
