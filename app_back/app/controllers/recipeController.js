const { Recipe } = require('../models');

const recipeController = {
  // les cards d'une liste
  allRecipes: async (req, res) => {
    const recipes = await Recipe.findAll({
      include: ['ingredients', 'types'],

    });
      // on renvoie les cartes
    res.json(recipes);
  },
  oneRecipe: async (req, res) => {
    try {
      const recipeId = parseInt(req.params.id, 10);
      const recipe = await Recipe.findByPk(recipeId, {
        include: ['ingredients', 'types'],
      });
      // send the details or not found
      if (recipe) {
        res.json(recipe);
      }
      else {
        res.status(404).json({ error: 'recipe not found' });
      }
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  createRecipe: async (req, res) => {
    try {
      const { title, url } = req.body;
      const userId = parseInt(req.body.userId, 10);
      const cookingTime = parseInt(req.body.cookingTime, 10);
      const numberPeople = parseInt(req.body.numberPeople, 10);

      const recipe = await Recipe.create({
        title,
        url,
        userId,
        cooking_time: cookingTime,
        number_people: numberPeople,
      });
      res.status(200).json({
        message: ' successful creation ',
        recipe,
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },

  updateRecipe: async (req, res) => {
    try {
      const { title, url } = req.body;
      
      const recipeId = parseInt(req.body.recipeId, 10);
      const cookingTime = parseInt(req.body.cookingTime, 10);
      const numberPeople = parseInt(req.body.numberPeople, 10);

      const recipe = await Recipe.findByPk(recipeId);
      res.status(200).json({
        message: ' successful retrieval ',
        recipe,
      });
    }
    catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};

module.exports = recipeController;
