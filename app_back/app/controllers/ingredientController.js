const { Ingredient } = require('../models');

const ingredientController = {
  // les cards d'une liste
  allIngredients: async (req, res) => {
    const ingredients = await Ingredient.findAll({

    });
      // on renvoie les cartes
    res.json(ingredients);
  },
};

module.exports = ingredientController;
