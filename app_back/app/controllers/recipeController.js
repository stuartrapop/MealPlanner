const {Recipe} = require('../models');

const recipeController = {
  // les cards d'une liste
  allRecipes: async (req, res) => {
      const recipes = await Recipe.findAll({
  
      });
      // on renvoie les cartes
      res.json(recipes);

  },
};

module.exports = recipeController;
