const {Meal} = require('../models');

const mealController = {
  // les cards d'une liste
  allMeals: async (req, res) => {
      const meals = await Meal.findAll({
        include:  "recipes"

    });
      // on renvoie les cartes
      res.json(meals);

  },
  oneMeal: async (req, res) => {
    try {
    const mealId = parseInt(req.params.id);
    const meal = await Meal.findByPk(mealId,{
      include:  "recipes"
  });
// send the details or not found
    if(meal){
      res.json(meal);
    } else {
      res.status(404).json({error: "meal not found"});
    }
} catch(error) {
  console.log(error);
  res.status(500).json({error});
}
}
};

module.exports = mealController;
