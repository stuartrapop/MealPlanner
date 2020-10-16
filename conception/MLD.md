REVIEWED, 0N RECIPE, 11 REVIEW
TYPE: type_id, name
TYPE_DEFINES_RECIPE, 0N RECIPE, 1N TYPE: recipe_type_id, recipe_id
RECIPE_CONTAINS_INGREDIENT, 1N INGREDIENT, 0N RECIPE: ingredient_id, recipe_id, quantity, unit
INGREDIENT: ingredient_id, name, weight, volume, countable, URL

REVIEW: review_id, comment, grade, #recipe_id, #user_id
USER_LIKES_RECIPE, 0N USER, 0N RECIPE: recipe_id, user_id
RECIPE: recipe_id, title, difficulty, instructions, cooking time, URL, number_people, #user_id
MEAL_HAS_RECIPE, 0N RECIPE, 1N MEAL: recipe_id, meal_id, number of people
FAMILY_DESCRIBES_INGREDIENT, 0N INGREDIENT, 1N FAMILY: ingredient_family_id, ingredient_id

WRITTEN, 0N USER, 11 REVIEW
USER: user_id, lastname, firstname, username, password, email
AUTHORED, 0N USER, 11 RECIPE
MEAL: meal_id, day, time, #group_id
FAMILY: family_id, name

:
USER_BELONGS_GROUP, 0N USER, 1N GROUP: user_id, group_id, user_role
GROUP: group_id, name
OWNS, 0N GROUP, 11 MEAL :
: