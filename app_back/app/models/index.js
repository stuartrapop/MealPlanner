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

// Pair defines 1 user can author many recipes.
Recipe.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

User.hasMany(Recipe, {
  foreignKey: 'userId',

  as: 'recipes',
});

// Pair defines 1 user can author many reviews
Review.belongsTo(User, {
  foreignKey: 'userId',
  as: 'reviewer',
});

User.hasMany(Review, {
  foreignKey: 'userId',

  as: 'userReviews',
});

// Pair defines 1 recipe can have many reviews
Review.belongsTo(Recipe, {
  foreignKey: 'recipeId',
  as: 'recipe',
});

Recipe.hasMany(Review, {
  foreignKey: 'recipeId',

  as: 'recipeReviews',
});

// Pair defines 1 group can have many meals
Meal.belongsTo(Group, {
  foreignKey: 'groupId',
  as: 'group',
});

Group.hasMany(Meal, {
  foreignKey: 'groupId',
  as: 'meals',
});

// Meal Recipe many to many - with extra fields
Recipe.belongsToMany(Meal, {
  through: MealHasRecipe,
  foreignKey: 'recipeId',
  otherKey: 'mealId',
  as: 'meals',
});

Meal.belongsToMany(Recipe, {
  through: MealHasRecipe,
  foreignKey: 'mealId',
  otherKey: 'recipeId',
  as: 'recipes',
});

// User Group many to many - with extra fields
Group.belongsToMany(User, {
  through: UserBelongsGroup,
  foreignKey: 'groupId',
  otherKey: 'userId',
  as: 'members',
});

User.belongsToMany(Group, {
  through: UserBelongsGroup,
  foreignKey: 'userId',
  otherKey: 'groupId',
  as: 'groups',
});

// Recipe Ingredient many to many - with extra fields
Recipe.belongsToMany(Ingredient, {
  through: RecipeContainsIngredient,
  foreignKey: 'recipeId',
  otherKey: 'ingredientId',
  as: 'ingredients',
});

Ingredient.belongsToMany(Recipe, {
  through: RecipeContainsIngredient,
  foreignKey: 'ingredientId',
  otherKey: 'recipeId',
  as: 'recipes',
});

// User Recipe Likes many to many - with timeStampNamingConvention
User.belongsToMany(Recipe, {
  through: 'user_likes_recipe',
  foreignKey: 'userId',
  otherKey: 'recipeId',
  as: 'favorites',
});

Recipe.belongsToMany(User, {
  through: 'user_likes_recipe',
  foreignKey: 'recipeId',
  otherKey: 'userId',
  as: 'fans',
});

// Family Ingredient many to many - with timeStampNamingConvention
Family.belongsToMany(Ingredient, {
  through: 'family_describes_ingredient',
  foreignKey: 'familyId',
  otherKey: 'ingredientId',
  as: 'ingredients',
});

Ingredient.belongsToMany(Family, {
  through: 'family_describes_ingredient',
  foreignKey: 'ingredientId',
  otherKey: 'familyId',
  as: 'families',
});

// Type Recipe many to many - with timeStampNamingConvention
Type.belongsToMany(Recipe, {
  through: 'type_defines_recipe',
  foreignKey: 'typeId',
  otherKey: 'recipeId',
  as: 'recipes',
});

Recipe.belongsToMany(Type, {
  through: 'type_defines_recipe',
  foreignKey: 'recipeId',
  otherKey: 'typeId',
  as: 'types',
});

module.exports = {
  Family, Group, Ingredient, Meal, Recipe, Review, Type, User,
};
