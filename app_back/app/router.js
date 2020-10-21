const express = require('express');

const router = express.Router();

const {
  adminController,
  familyController,
  groupController,
  ingredientController,
  mealController,
  recipeController,
  reviewController,
  typeController,
  userController,
} = require('./controllers');

const loginSchema = require('./schemas/login');
const { validateBody } = require('./services/validator');

// On rend le choix de l'entité paramétrable
router.get('/', (req, res) => {
  res.send('Meal Planner API!');
});

router.get('/families', familyController.allFamilies);

router.get('/groups', groupController.allGroups);
router.get('/group/:id', groupController.oneGroup);

router.post('/group/create', groupController.createGroup);
router.patch('/group/:id', groupController.updateGroup);
router.delete('/group/:id', groupController.deleteGroup);
router.post('/group/addMember', groupController.addMember);
router.post('/group/removeMember', groupController.removeMember);

router.get('/ingredients', ingredientController.allIngredients);

router.get('/meals', mealController.allMeals);
router.get('/meal/:id', mealController.oneMeal);
router.delete('/meal/:id', mealController.deleteMeal);
router.post('/meal/create', mealController.createMeal);
router.post('/meal/addRecipe', mealController.addRecipe);
router.post('/meal/removeRecipe', mealController.removeRecipe);

router.get('/recipes', recipeController.allRecipes);
router.get('/recipe/:id', recipeController.oneRecipe);

router.get('/recipes/reviews', reviewController.allReviews);

router.get('/recipes/review/:id', reviewController.oneReview);
router.post('/recipes/review/create', reviewController.createReview);
router.delete('/recipes/review/:id', reviewController.deleteReview);
router.patch('/recipes/review/:id', reviewController.updateReview);

router.get('/types', typeController.allTypes);

router.get('/users', userController.allUsers);
router.get('/user/:id', userController.oneUser);
router.post('/user/create', validateBody(loginSchema), adminController.createAccount);
router.patch('/user/:id', adminController.updateAccount);
router.delete('/user/:id', adminController.deleteAccount);

router.patch('/changePassword', adminController.changePassword);
router.post('/login', adminController.login);
router.post('/isLogged', adminController.isLogged);
router.post('/logout', adminController.logout);

router.use(adminController.notFound);

module.exports = router;
