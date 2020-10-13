## Ingredient
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name     | TEXT | NOT NULL   |
| weight | BOOLEAN | NOT NULL|
| volume | BOOLEAN | NOT NULL |
| countable | BOOLEAN | NOT NULL |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## Recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| title    | TEXT | NOT NULL   |
| ingredients    | TEXT | NOT NULL |
| difficulty | TEXT | |
| instructions | TEXT | |
| type | TEXT |  |
| cooking_time | INTEGER ||
|user_id | INTEGER |NOT NULL, REFERENCES User(id)|

## Meal
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| day | DATE | NOT NULL |
| time | TEXT | NOT NULL |
| group_id | INTEGER | NOT NULL, REFERENCES Group(id) |

## Group
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name     | TEXT | NOT NULL   |          |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## User
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| lastname     | TEXT | NOT NULL |
| firstname    | TEXT |NOT NULL  |
| username    | TEXT |NOT NULL |
| password    | TEXT | NOT NULL |
| email    | TEXT | NOT NULL |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## Review
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| comment    | TEXT |        |
| grade    | INTEGER |  NOT NULL |
| recipe_id   | INTEGER | NOT NULL |
| user_id   | INTEGER | NOT NULL |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## User_belongs_group
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| user_id       | INTEGER | NOT NULL, REFERENCES User(id)|
| group_id     | INTEGER | NOT NULL, REFERENCES Group(id)  |
| user_role    | TEXT | NOT NULL |

## Recipe_contains_ingredient
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| recipe_id  | INTEGER | NOT NULL, REFERENCES Recipe(id)|
| ingredient_id  | INTEGER | NOT NULL, REFERENCES Ingredient(id) |
| quantity    | INTEGER |  NOT NULL |
| unit | TEXT | NOT NULL |

## Meal_has_recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| recipe_id  | INTEGER | NOT NULL, REFERENCES Recipe(id)|
| meal_id  | INTEGER | NOT NULL, REFERENCES Meal(id) |
| number_of_people | INTEGER |  NOT NULL |
