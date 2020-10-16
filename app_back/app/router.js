const express = require('express');
const router = express.Router();

const { familyController, groupController, ingredientController, mealController, recipeController, reviewController, typeController, userController } = require('./controllers')


// On rend le choix de l'entité paramétrable
router.get('/', (req, res) => {
    res.send('Meal Planner API!')
  });

router.get('/families', familyController.allFamilies);
router.get('/groups', groupController.allGroups);
router.get('/ingredients', ingredientController.allIngredients);
router.get('/meals', mealController.allMeals);
router.get('/recipes', recipeController.allRecipes);
router.get('/reviews', reviewController.allReviews);
router.get('/types', typeController.allTypes);

router.get('/users', userController.allUsers);



module.exports = router;
