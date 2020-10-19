INGREDIENT: ingredient id, name, weight, volume, countable, URL, family, sub_family, sub_sub_family
HAS, 0N RECIPE, 1N MEAL: number of people
MEAL: meal id, day, time(midi)
OWNS, 0N GROUP, 11 MEAL
GROUP: group id, name

CONTAINS, 1N INGREDIENT, 0N RECIPE: quantity, unit
RECIPE: recipe id, title, difficulty, instructions, cooking time, URL,numver_people,type, sub_type, sub_sub_type
AUTHORED, 0N USER, 11 RECIPE
USER: user id, lastname, firstname, username, password, email
BELONGS, 0N USER, 1N GROUP: role

:
GRADED, 0N RECIPE, 11 REVIEW
REVIEW: review id, comment, grade, favorite
WRITTEN, 0N USER, 11 REVIEW
:

