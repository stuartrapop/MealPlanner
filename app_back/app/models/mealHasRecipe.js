const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class MealHasRecipe extends Model {}

MealHasRecipe.init({
  numberPeople: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'meal_has_recipe',
});

module.exports = MealHasRecipe;
