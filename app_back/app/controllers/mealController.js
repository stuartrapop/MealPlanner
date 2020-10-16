const {Meal} = require('../models');

const mealController = {
  // les cards d'une liste
  allMeals: async (req, res) => {
      const meals = await Meal.findAll({
  
      });
      // on renvoie les cartes
      res.json(meals);

  },
};

module.exports = mealController;
