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
};

module.exports = recipeController;
