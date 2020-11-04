const { Meal, Group, Recipe } = require('../models');

const mealController = {
  // view all meals
  allMeals: async (req, res) => {
    const meals = await Meal.findAll({
      include: 'recipes',

    });
      // on renvoie les cartes
    res.json(meals);
  },
  oneMeal: async (req, res) => {
    try {
      const mealId = parseInt(req.params.id, 10);
      const meal = await Meal.findByPk(mealId, {
        include: 'recipes',
      });
      // send the details or not found
      if (meal) {
        res.json(meal);
      }
      else {
        res.status(404).json({ error: 'meal not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // function to associate a recipe to a meal
  associateRecipe: async (recipeId, mealId, numberPeople) => {
    const recipe = await Recipe.findByPk(recipeId);

    const meal = await Meal.findByPk(mealId);

    await meal.addRecipes(recipe, { through: { numberPeople } });
  },
  // les cards d'une liste
  addRecipe: async (req, res) => {
    try {
      const recipeId = parseInt(req.body.recipeId, 10);
      const mealId = parseInt(req.body.mealId, 10);
      const { numberPeople } = req.body;
      const recipe = await Recipe.findByPk(recipeId);
      if (!recipe) {
        res.json({ error: 'recipe does not exist' });
      }
      let meal = await Meal.findByPk(mealId, {
        include: 'recipes',
      });
      if (!meal) {
        res.json({ error: 'meal does not exist' });
      }
      await mealController.associateRecipe(recipeId, mealId, numberPeople);

      meal = await Meal.findByPk(mealId, {
        include: 'recipes',
      });
      // send the details or not found
      if (meal) {
        res.json({ message: meal });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // create a meal for a group
  createMeal: async (req, res) => {
    try {
      const { day } = req.body;
      const { time } = req.body;
      const groupId = parseInt(req.body.groupId, 10);
      let group = await Group.findByPk(groupId, { include: 'meals' });
      if (!group) {
        res.json({ error: 'group does not exist' });
      }

      const mealExists = group.meals.find((meal) => (

        (String(day) === String(meal.day)) && (time === meal.time)
      ));

      console.log('mealExists', mealExists);
      if (mealExists) {
        res.json({ error: 'you have already scheduled  meal for this time' });
      }
      else {
        console.log('meal being added day', day, ' time ', time);
        const meal = await Meal.create({ day, time });
        await group.addMeals(meal);
        group = await Group.findByPk(groupId, { include: 'meals' });
        res.json({ message: group });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  // function to remove a recipe from a meal
  removeRecipe: async (req, res) => {
    try {
      const mealId = parseInt(req.body.mealId, 10);
      const recipeId = parseInt(req.body.recipeId, 10);

      const recipe = await Recipe.findByPk(recipeId);
      if (!recipe) {
        res.json({ error: 'recipe does not exist' });
      }
      let meal = await Meal.findByPk(mealId, {
        include: 'recipes',
      });
      if (!meal) {
        res.json({ error: 'meal does not exist' });
      }
      // on renvoie les cartes

      const foundRecipe = meal.recipes.find((recipeIterate) => recipeIterate.id === recipeId);

      if (!foundRecipe) {
        res.json({ error: 'this recipe is not part of the meal' });
      }

      await meal.removeRecipes(recipe);
      meal = await Meal.findByPk(mealId, {
        include: 'recipes',
      });
      res.json({ message: meal });
      return;
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  // delete Meal route callback
  deleteMealUtil: async (mealId) => {
    try {
      const meal = await Meal.findByPk(mealId, {
        include: ['recipes', 'group'],
      });
      for (const recipe of meal.recipes) {
        const recipeInstance = await Recipe.findByPk(recipe.id);
        await meal.removeRecipes(recipeInstance);
      }
      await meal.destroy();
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  // delete Meal route callback
  deleteMeal: async (req, res) => {
    try {
      const mealId = parseInt(req.params.id, 10);
      const meal = await Meal.findByPk(mealId, {
        include: ['recipes', 'group'],
      });
      // send the details or not found
      if (!meal) {
        res.status(404).json({ error: 'meal not found' });
      }
      for (const recipe of meal.recipes) {
        const recipeInstance = await Recipe.findByPk(recipe.id);
        await meal.removeRecipes(recipeInstance);
      }
      await meal.destroy();
      res.status(200).json({ message: 'meal deleted' });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = mealController;
