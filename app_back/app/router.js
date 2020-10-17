const express = require('express');
const router = express.Router();

const {adminController, familyController, groupController, ingredientController, mealController, recipeController, reviewController, typeController, userController,  } = require('./controllers')


// On rend le choix de l'entité paramétrable
router.get('/', (req, res) => {
    res.send('Meal Planner API!')
  });

router.get('/families', familyController.allFamilies);

router.get('/groups', groupController.allGroups);
router.get('/group/:id', groupController.oneGroup);

router.get('/ingredients', ingredientController.allIngredients);

router.get('/meals', mealController.allMeals);
router.get('/meal/:id', mealController.oneMeal);

router.get('/recipes', recipeController.allRecipes);
router.get('/recipe/:id', recipeController.oneRecipe);

router.get('/recipes/reviews', reviewController.allReviews);
router.get('/recipes/review/:id', reviewController.oneReview);

router.get('/types', typeController.allTypes);

router.get('/users', userController.allUsers);
router.get('/user/:id', userController.oneUser);


router.post('/login', adminController.login);
router.use( adminController.notFound);


module.exports = router;
