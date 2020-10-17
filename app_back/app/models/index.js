const Family = require('./family');
const Group = require('./group');
const Ingredient = require('./ingredient');
const Meal = require('./meal');
const Recipe = require('./recipe');
const Review = require('./review');
const Type = require('./type');
const User = require('./user');
const MealHasRecipe = require('./mealHasRecipe');
const UserBelongsGroup = require('./userBelongsGroup');
const RecipeContainsIngredient = require('./recipeContainsIngredient');



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


// Meal Recipe many to many - with extra fields
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

// User Group many to many - with extra fields
Group.belongsToMany(User, {
  through: UserBelongsGroup,
  foreignKey: "user_id",
  otherKey: "group_id",
  as: "members"
});

User.belongsToMany(Group, {
  through: UserBelongsGroup,
  foreignKey: "user_id",
  otherKey: "group_id",
  as: "groups"
});

// Recipe Ingredient many to many - with extra fields
Recipe.belongsToMany(Ingredient, {
  through: RecipeContainsIngredient,
  foreignKey: "recipe_id",
  otherKey: "ingredient_id",
  as: "ingredients"
});

Ingredient.belongsToMany(Recipe, {
  through: RecipeContainsIngredient,
  foreignKey: "ingredient_id",
  otherKey: "recipe_id",
  as: "recipes"
});

// User Recipe Likes many to many - with timeStampNamingConvention
User.belongsToMany(Recipe, {
  through: 'user_likes_recipe',
  foreignKey: "user_id",
  otherKey: "recipe_id",
  as: "favorites"
});

Recipe.belongsToMany(User, {
  through: 'user_likes_recipe',
  foreignKey: "recipe_id",
  otherKey: "user_id",
  as: "fans"
});

// Family Ingredient many to many - with timeStampNamingConvention
Family.belongsToMany(Ingredient, {
  through: 'family_describes_ingredient',
  foreignKey: "family_id",
  otherKey: "ingredient_id",
  as: "ingredients"
});

Ingredient.belongsToMany(Family, {
  through: 'family_describes_ingredient',
  foreignKey: "ingredient_id",
  otherKey: "family_id",
  as: "families"
});

// Type Recipe many to many - with timeStampNamingConvention
Type.belongsToMany(Recipe, {
  through: 'type_defines_recipe',
  foreignKey: "type_id",
  otherKey: "recipe_id",
  as: "recipes"
});

Recipe.belongsToMany(Type, {
  through: 'type_defines_recipe',
  foreignKey: "recipe_id",
  otherKey: "type_id",
  as: "types"
});


module.exports = { Family, Group, Ingredient, Meal, Recipe, Review, Type, User };
