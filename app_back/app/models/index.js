const Family = require('./family');
const Group = require('./group');
const Ingredient = require('./ingredient');
const Meal = require('./meal');
const Recipe = require('./recipe');
const Review = require('./review');
const Type = require('./type');
const User = require('./user');
const MealHasRecipe = require('./mealHasRecipe');


//Pair defines 1 user can author many recipes.
Recipe.belongsTo(User, {
  foreignKey: "user_id",
  as: "user"
});

User.hasMany(Recipe, {
  foreignKey: "user_id",

  as: "recipes"
});

//Pair defines 1 group can have many meals
Meal.belongsTo(Group, {
  foreignKey: "group_id",
  as: "group"
});

Group.hasMany(Meal, {
  foreignKey: "group_id",
  as: "meals"
});


// Meal Recipe many to many
Recipe.belongsToMany(Meal, {
  through: MealHasRecipe,
  foreignKey: "recipe_id",
  otherKey: "meal_id",
  as: "meals"
});

Meal.belongsToMany(Recipe, {
  through: MealHasRecipe,
  foreignKey: "meal_id",
  otherKey: "recipe_id",
  as: "recipes"
});


module.exports = { Family, Group, Ingredient, Meal, Recipe, Review, Type, User };
