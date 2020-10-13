  
BEGIN;
DROP TABLE IF EXISTS "ingredient";
DROP TABLE IF EXISTS "recipe";
DROP TABLE IF EXISTS "meal";
DROP TABLE IF EXISTS "group";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "review";


DROP TABLE IF EXISTS "user_belongs_group";
DROP TABLE IF EXISTS "recipe_contains_ingredient";
DROP TABLE IF EXISTS "meal_has_recipe";



CREATE TABLE "ingredient" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "family" VARCHAR NOT NULL,
    "weight" BOOLEAN NOT NULL,
    "volume" BOOLEAN NOT NULL,
    "countable" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "recipe" (
    "id"  SERIAL PRIMARY KEY,
    "title" VARCHAR NOT NULL,
    "difficulty" VARCHAR,
    "instructions" VARCHAR,
    "type" VARCHAR,
    "cooking_time" VARCHAR,
    "user_id" integer  REFERENCES "user" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP

CREATE TABLE "meal" (
    "id"  SERIAL PRIMARY KEY,
    "day" DATE NOT NULL,
    "time" VARCHAR NOT NULL,
    "group_id" integer  REFERENCES "group" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "group" (
    "id"  SERIAL PRIMARY KEY,
    "name" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "user" (
    "id"  SERIAL PRIMARY KEY,
    "firstname" VARCHAR NOT NULL,
    "lastname" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);


CREATE TABLE "review" (
    "id"  SERIAL PRIMARY KEY,
    "comment" VARCHAR,
    "grade" INTEGER NOT NULL,
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);




CREATE TABLE "user_belongs_group" (
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "group_id" INTEGER REFERENCES "group" ("id"),
    "user_role" VARCHAR  NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP
);

CREATE TABLE "recipe_contains_ingredient" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "ingredient_id" INTEGER  REFERENCES "ingredient" ("id"),
    "quantity" INTEGER  NOT NULL,
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


INSERT INTO  "ingredient" ("id", "name" , "family" , "weight" , "volume","countable" ) VALUES 
(1, 'poulet', 'viande', true, false, false ),
(2, 'orange', 'fruit', false, false, true ),
(3, 'cerise', 'fruit', true, false, false ),
(4, 'laitue', 'legume', true, false, false ),
(5, 'porc', 'viande', true, false, false ),
(6, 'lait', 'laitage', false, true, false )


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