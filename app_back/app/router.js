const express = require('express');

const router = express.Router();

// import all controllers for utilities and routes
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

// Joi validator for new user
const loginSchema = require('./schemas/login');
const changeUserDetailsSchema = require('./schemas/changeUserDetails');
const { validateBody } = require('./services/validator');

const { checkUserOrAdmin, checkAdmin, groupOwner } = require('./middleware/authorizations');

// routes with http method
router.get('/', (req, res) => {
  res.send('Meal Planner API!');
});

router.get('/families', familyController.allFamilies);

router.get('/groups', groupController.allGroups);
router.get('/group/:id', groupController.oneGroup);

router.post('/group/create', groupController.createGroup);
router.patch('/group/:id', groupOwner(), groupController.updateGroup);
router.delete('/group/:id', groupOwner(), groupController.deleteGroup);
router.post('/group/addMember', groupOwner(), groupController.addMember);
router.post('/group/removeMember', groupOwner(), groupController.removeMember);

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

router.get('/users', checkAdmin(), userController.allUsers);
router.get('/users/pseudos', userController.getPseudos);
router.get('/user/:id', checkUserOrAdmin(), userController.oneUser);
// this route uses joi validator
router.post('/user/create', validateBody(loginSchema), adminController.createAccount);
router.patch('/user/:id', checkUserOrAdmin(), validateBody(changeUserDetailsSchema), adminController.updateAccount);
router.delete('/user/:id', checkUserOrAdmin(), adminController.deleteAccount);

router.patch('/changePassword', checkUserOrAdmin(), adminController.changePassword);

// login isLogged and logout use session info.
router.post('/login', adminController.login);
router.post('/isLogged', adminController.isLogged);
router.post('/logout', adminController.logout);

router.use(adminController.notFound);

module.exports = router;
