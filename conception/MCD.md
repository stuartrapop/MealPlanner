INGREDIENT: ingredient id, name, family, weight, volume, countable
HAS, 0N RECIPE, 1N MEAL: number of people
MEAL: meal id, day, time(midi)
OWNS, 0N GROUP, 11 MEAL
GROUP: group id, name

CONTAINS, 1N INGREDIENT, 0N RECIPE: quantity, unit
RECIPE: recipe id, title, ingredients , difficulty, instructions, type, cooking time
AUTHORED, 0N USER, 11 RECIPE
USER: user id, lastname, firstname, username, password, email
BELONGS, 0N USER, 1N GROUP: role

:
GRADED, 0N RECIPE, 11 REVIEW
REVIEW: review id, comment, grade
WRITTEN, 0N USER, 11 REVIEW
:

