  
BEGIN;
DROP TABLE IF EXISTS "ingredient";
DROP TABLE IF EXISTS "recipe";
DROP TABLE IF EXISTS "meal";
DROP TABLE IF EXISTS "group";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "review";
DROP TABLE IF EXISTS "type";
DROP TABLE IF EXISTS "family";

DROP TABLE IF EXISTS "type_defines_recipe";
DROP TABLE IF EXISTS "family_describes_ingredient";
DROP TABLE IF EXISTS "user_likes_recipe";
DROP TABLE IF EXISTS "user_belongs_group";
DROP TABLE IF EXISTS "recipe_contains_ingredient";
DROP TABLE IF EXISTS "meal_has_recipe";



CREATE TABLE "ingredient" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "url" VARCHAR(100),
    "weight" BOOLEAN NOT NULL,
    "volume" BOOLEAN NOT NULL,
    "countable" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "recipe" (
    "id"  SERIAL PRIMARY KEY,
    "title" VARCHAR(30) NOT NULL,
    "url" VARCHAR(100) NOT NULL,
    "difficulty" VARCHAR(15),
    "instructions" TEXT,
    "cooking_time" INTEGER,
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP

CREATE TABLE "meal" (
    "id"  SERIAL PRIMARY KEY,
    "day" DATE NOT NULL,
    "time" VARCHAR (25) NOT NULL,
    "group_id" INTEGER  REFERENCES "group" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "group" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "user" (
    "id"  SERIAL PRIMARY KEY,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "user_name" VARCHAR(20) NOT NULL,
    "password" VARCHAR(70) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);


CREATE TABLE "review" (
    "id"  SERIAL PRIMARY KEY,
    "comment" TEXT,
    "grade" INTEGER NOT NULL,
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "type" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "grade" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "family" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "grade" INTEGER NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "type_defines_recipe" (
    "type_id" INTEGER  REFERENCES "type" ("id"),
    "recipe_id" INTEGER REFERENCES "recipe" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "family_describes_ingredient" (
    "family_id" INTEGER  REFERENCES "family" ("id"),
    "ingredient_id" INTEGER REFERENCES "ingredient" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "user_likes_recipe" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "user_id" INTEGER REFERENCES "user" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);


CREATE TABLE "user_belongs_group" (
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "group_id" INTEGER REFERENCES "group" ("id"),
    "user_role" VARCHAR (25)  NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "recipe_contains_ingredient" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "ingredient_id" INTEGER  REFERENCES "ingredient" ("id"),
    "quantity" INTEGER  NOT NULL,
    "unit" VARCHAR (20)  NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "meal_has_recipe" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "meal_id" INTEGER  REFERENCES "meal" ("id"),
    "number_of_people" INTEGER  NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);



COMMIT;


BEGIN;

--


INSERT INTO  "ingredient" ("id", "name" , "url", "weight" , "volume","countable" ) VALUES 
(1, 'poulet', "https://upload.wikimedia.org/wikipedia/commons/5/57/Chickens_in_market.jpg", true, false, false ),
(2, 'orange', "https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg", false, false, true ),
(3, 'cerise', "https://upload.wikimedia.org/wikipedia/commons/0/01/%22Help_yourself%22_-_Flickr_-_Axel-D.jpg", true, false, false ),
(4, 'laitue', "https://upload.wikimedia.org/wikipedia/commons/6/6b/Romaine_lettuce.jpg", true, false, false ),
(5, 'porc', "https://upload.wikimedia.org/wikipedia/commons/b/bd/Cotelettes_de_porc.jpg", true, false, false ),
(6, 'lait', "https://upload.wikimedia.org/wikipedia/commons/e/e1/Milk_carton_clip_art.png", false, true, false )


INSERT INTO "list" ("id", "name", "position") VALUES
(1, 'first list', 1),
(2, 'second list', 2),
(3, 'third list', 3),
(4, 'fourth list', 4),
(5, 'fifth list', 5);


INSERT INTO "card_map_label" ("card_id", "label_id") VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 2),
(3, 4),
(3, 5),
(4, 5);



COMMIT;

BEGIN;

-- PostGres avec le type serial n'incrémente pas automatiquement de façon implicite la séquence rattaché à la colonne !
-- Il faut donc mettre à jour la valeur courante de chacune des séquences en séléctionnant l'id maximum de chaque table
--

SELECT setval('list_id_seq', (SELECT MAX(id) from "list"));
SELECT setval('card_id_seq', (SELECT MAX(id) from "card"));
SELECT setval('label_id_seq', (SELECT MAX(id) from "label"));

COMMIT;