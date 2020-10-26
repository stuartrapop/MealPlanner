## Ingredient
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name     | VARCHAR(30) | NOT NULL   |
| weight | BOOLEAN | NOT NULL|
| volume | BOOLEAN | NOT NULL |
| countable | BOOLEAN | NOT NULL |
| URL | VARCHAR(100) | NOT NULL |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## Recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| title    | VARCHAR(30) | NOT NULL   |
| difficulty | VARCHAR(15) | |
| instructions | TEXT | |
| number_people | INTEGER | |
| cooking_time | INTEGER ||
| URL | VARCHAR(100)  | NOT NULL |
|user_id | INTEGER |NOT NULL, REFERENCES User(id)|

## Meal
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| day | DATE | NOT NULL |
| time | VARCHAR (25) | NOT NULL |
| group_id | INTEGER | NOT NULL, REFERENCES Group(id) |

## Group
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name     | VARCHAR(30) | NOT NULL   |          |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## User
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| lastname     | VARCHAR(50) | NOT NULL |
| firstname    | VARCHAR(50) |NOT NULL  |
| username    | VARCHAR(20) |NOT NULL |
| account_role   | VARCHAR(20) |NOT NULL |
| password    | VARCHAR(70) | NOT NULL |
| email    | VARCHAR(50) | NOT NULL |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## Review
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| comment    | TEXT |        |
| grade    | INTEGER |  NOT NULL |
| recipe_id   | INTEGER | NOT NULL, REFERENCES Recipe(id) |
| user_id   | INTEGER | NOT NULL, REFERENCES User(id) |
|created_at| TIMESTAMPTZ | NOT NULL, DEFAULT NOW() |
|updated_at| TIMESTAMPTZ |     |

## Type
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name    | VARCHAR(20) |  NOT NULL      |

## Family
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| id       | INTEGER | GENERATED ALWAYS AS IDENTITY, PRIMARY KEY |
| name    | VARCHAR(20) |  NOT NULL      |

## Type_defines_recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| type_id       | INTEGER |  NOT NULL, REFERENCES Type(id) |
| recipe_id    | INTEGER | NOT NULL, REFERENCES Recipe(id)    |

## Family_describes_ingredient
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| family_id       | INTEGER |  NOT NULL, REFERENCES Family(id) |
| ingredient_id    | INTEGER | NOT NULL, REFERENCES Ingredient(id)    |

## User_likes_recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| recipe_id       | INTEGER |  NOT NULL, REFERENCES Recipe(id) |
| user_id    | INTEGER | NOT NULL, REFERENCES User(id)    |

## User_belongs_group
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| user_id       | INTEGER | NOT NULL, REFERENCES User(id)|
| group_id     | INTEGER | NOT NULL, REFERENCES Group(id)  |
| user_role    | VARCHAR(25) | NOT NULL |

## Recipe_contains_ingredient
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| recipe_id  | INTEGER | NOT NULL, REFERENCES Recipe(id)|
| ingredient_id  | INTEGER | NOT NULL, REFERENCES Ingredient(id) |
| quantity    | INTEGER |  NOT NULL |
| unit | VARCHAR(20) | NOT NULL |

## Meal_has_recipe
| champ    | type | contrainte |
| -------- | ---- | ---------- |
| recipe_id  | INTEGER | NOT NULL, REFERENCES Recipe(id)|
| meal_id  | INTEGER | NOT NULL, REFERENCES Meal(id) |
| number_of_people | INTEGER |  NOT NULL |