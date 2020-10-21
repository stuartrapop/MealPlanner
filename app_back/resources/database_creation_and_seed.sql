  
BEGIN;
DROP TABLE IF EXISTS "ingredient", "recipe", "meal", "group", "user", "review", "type", "family", "type_defines_recipe", "family_describes_ingredient", "user_likes_recipe", "user_belongs_group", "recipe_contains_ingredient", "meal_has_recipe";



CREATE TABLE "ingredient" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "url" VARCHAR(100),
    "weight" BOOLEAN NOT NULL,
    "volume" BOOLEAN NOT NULL,
    "countable" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "user_name" VARCHAR(20) NOT NULL,
    "password" VARCHAR(70) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);


CREATE TABLE "recipe" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" VARCHAR(100) NOT NULL,
    "url" VARCHAR  NOT NULL,
    "difficulty" VARCHAR(15),
    "instructions" VARCHAR,
    "cooking_time" INTEGER  NOT NULL,
    "number_people" INTEGER NOT NULL,
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "group" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(30) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "meal" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "day" DATE NOT NULL,
    "time" VARCHAR (25) NOT NULL,
    "group_id" INTEGER  REFERENCES "group" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);





CREATE TABLE "review" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "comment" TEXT,
    "grade" INTEGER NOT NULL,
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "type" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "family" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "type_defines_recipe" (
    "type_id" INTEGER  REFERENCES "type" ("id"),
    "recipe_id" INTEGER REFERENCES "recipe" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "family_describes_ingredient" (
    "family_id" INTEGER  REFERENCES "family" ("id"),
    "ingredient_id" INTEGER REFERENCES "ingredient" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "user_likes_recipe" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "user_id" INTEGER REFERENCES "user" ("id"),
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);


CREATE TABLE "user_belongs_group" (
    "group_id" INTEGER REFERENCES "group" ("id"),
    "user_id" INTEGER  REFERENCES "user" ("id"),
    "user_role" VARCHAR (25)  NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "recipe_contains_ingredient" (
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "ingredient_id" INTEGER  REFERENCES "ingredient" ("id"),
    "quantity" REAL  NOT NULL,
    "unit" VARCHAR(30)  DEFAULT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE "meal_has_recipe" (
    "meal_id" INTEGER  REFERENCES "meal" ("id"),
    "recipe_id" INTEGER  REFERENCES "recipe" ("id"),
    "number_people" INTEGER  NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);



COMMIT;


BEGIN;

--


INSERT INTO  "ingredient" ("id", "name" , "weight" , "volume","countable" ) OVERRIDING SYSTEM VALUE
VALUES 
(1, 'poulet', true, false, false ),
(2, 'orange', false, false, true ),
(3, 'cerise',  true, false, false ),
(4, 'laitue',  true, false, false ),
(5, 'porc',  true, false, false ),
(6, 'lait',  false, true, false ),
(7, 'mozarella',  true, false, false ),
(8, 'farine',  true, false, false ),
(9, 'sauce tomate', false, true, false ),
(10, 'spaghetti',  true, false, false ),
(11, 'steak haché',  true, false, false ),
(12, 'tomates',  false, false, true ),
(13, 'tranche de pain',  false, false, true ),
(14, 'beurre',  true, false, false ),
(15, 'pomme de terres',  true, false, false ),
(16, 'carrottes',  true, false, false );


INSERT INTO  "user" ("id", "first_name", "last_name", "user_name", "password", "email" )  OVERRIDING SYSTEM VALUE
VALUES 
(1, 'Pierre', 'Dupont', 'pierre1','French', 'pierre@gmail.com'),
(2, 'Alice', 'Dupont', 'alice1','French1', 'alice@gmail.com'),
(3, 'Carole', 'Dupont', 'carole1','French2', 'carole@gmail.com'),
(4, 'Thierry', 'Dupont', 'thierry1','French3', 'thierry@gmail.com'),
(5, 'Virgil', 'Kwiatkowski', 'virgil1','Polish1', 'virgilkwiatkowski@gmail.com'),
(6, 'Clément', 'Herpe', 'clement1','German1', 'clement@gmail.com');


INSERT INTO  "recipe" ("id", "title" , "url","difficulty", "instructions" , "cooking_time","number_people", "user_id" ) 
OVERRIDING SYSTEM VALUE
VALUES 
(1, 'Pizza', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pitigliano%2C_Italy_%285731636322%29.jpg/800px-Pitigliano%2C_Italy_%285731636322%29.jpg', 'Moyen', 'Dans un bol, faites un puis avec la farine, et mettez le sel d un côté, la levure de l autre - faites en sorte de ne pas mettre en contact le sel et la levure au démarrage - Ajoutez l eau au centre, mélangez pour obtenir une pâte homogène, et pétrissez 10 minutes à la main sur le plan de travail ou à l aide d une machine à pain ou d un robot avec le crochet pétrisseur Ajoutez l huile d olive et pétrissez encore 5 minutes Couvrez d un film alimentaire au contact de la pâte, et laissez lever 1 heure à température ambiante, la pâte doit doubler de volume Chassez l air de la pâte, en appuyant dessus avec la main, puis divisez la pâte en 2 ou 3 boules selon le nombre de pizzas souhaitées Laissez les boules de pâte reposer 30 minutes en les couvrant de film alimentaire', '60' ,2, 1),
(2, 'Spaghetti Bolognaise', 'https://upload.wikimedia.org/wikipedia/commons/d/da/2015-05-24_Bolognesesauce_anagoria.JPG', 'Facile', 'Hachez l''ail, l''oignon, puis coupez la carotte et le céleri en petits dés (enlevez les principales nervures du céleri). Faites chauffer l''huile dans une casserole assez grande. Faites revenir l''ail, l''oignon, la carotte et le céleri à feu doux pendant 5 min en remuant. Augmenter la flamme, puis ajoutez le boeuf. Faites brunir et remuez de façon à ce que la viande ne fasse pas de gros paquets. Ajoutez le bouillon, le vin rouge, les tomates préalablement coupées assez grossièrement, le sucre et le persil haché. Portez à ébullition. Baisser ensuite le feu et laissez mijoter à couvert 1h à 1h30, de façon à ce que le vin s''évapore. Faites cuire les spaghetti, puis mettez-les dans un plat. Ajoutez la sauce bolognaise', '90' , 4, 1),
(3, 'Hamburger', 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Hamburger_sandwich.jpg', 'Facile' ,'Faites revenir les oignons à feux doux. Ajouter les steaks. Une fois saisi, poser une tranche de cheddar sur le steak et laisser fondre. Une fois cuit, déposer le steak et le fromage sur une des tranches du pain que vous aurez auparavant tartinée d''un mélange de ketchup et de moutarde. Ajouter la salade et de petites rondelles de tomates. Vous pouvez maintenant recouvrir la préparation de l''autre tranche (avec ketchup et moutarde)', '90' , 4, 2),
(4, 'Purée de carottes', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Falafel.JPG', 'Facile' , 'Eplucher les légumes et les couper en morceaux assez gros.
Mettre à cuire environ 10 à 15 min dans une cocotte minute.
Une fois cuits, mettre les légumes dans le bol du mixeur avec la crème fraiche et le beurre. Assaisonner selon votre convenance. Mixer le tout jusqu''à l''obtention d''une purée lisse. Servir chaud.', '60' ,2, 2);


INSERT INTO  "group" ("id", "name" ) OVERRIDING SYSTEM VALUE
VALUES 
(1, 'Famille Dupont'),
(2, 'Vacances Ski Oclock' ),
(3, 'Bureau de developpeurs'),
(4, 'Famille Alstan'),
(5, 'Semaine Karting'),
(6, 'Fête Dongeons et Dragons');

INSERT INTO  "meal" ("id", "day" , "time", "group_id" ) OVERRIDING SYSTEM VALUE
VALUES 
(1, '2020-10-15', 'lunch', 1 ),
(2, '2020-10-16', 'dinner', 1 ),
(3, '2020-10-17', 'lunch', 1 ),
(4, '2020-10-18', 'dinner', 1 ),
(5, '2020-10-19', 'lunch', 2 ),
(6, '2020-10-20', 'lunch', 2 ),
(7, '2020-10-21', 'dinner', 2 );





INSERT INTO  "review" ("id", "comment", "grade", "recipe_id", "user_id")  OVERRIDING SYSTEM VALUE
VALUES 
(1, 'L''auteur devrait revoir sa copie et peut-être investir dans...un Bescherelle avant d''écrire des recettes.', 1, 1,1),
(2, 'Trop Bon. Miam', 10, 1,3),
(3, 'Trop piquant. Ne mets pas du poivre. Mais sinon, je le recommande fortement', 8, 1,5),
(4, 'Faut faire un peu de sport après.', 2, 2,5),
(5, 'Je referai.', 8, 2,5),
(6, null, 1, 2,5);

INSERT INTO  "type" ("id", "name")  OVERRIDING SYSTEM VALUE
VALUES 
(1, 'viande'),
(2, 'végétarien'),
(3, 'végan'),
(4, 'italien'),
(5, 'japonais'),
(6, 'entrée'),
(7, 'plat'),
(8, 'déssert');



INSERT INTO  "family" ("id", "name")  OVERRIDING SYSTEM VALUE
VALUES 
(1, 'viande'),
(2, 'legume'),
(3, 'fruit'),
(4, 'fromage'),
(5, 'noix'),
(6, 'laitage'),
(7, 'féculent'),
(8, 'matière grasse');

INSERT INTO  "type_defines_recipe" ("type_id", "recipe_id")  VALUES
(1, 2),
(1, 3),
(2, 1),
(2, 4),
(3, 4);

INSERT INTO  "recipe_contains_ingredient" ("recipe_id", "ingredient_id", "quantity", "unit")  VALUES
(1, 7, 0.3, null),
(1, 8, 0.5, null),
(1, 9, 0.2, null),
(2, 9, 0.2, null),
(2, 10, 0.5, null),
(2, 11, 0.5, null),
(3, 11, 0.5, null),
(3, 12, 3, null),
(3, 13, 6, null),
(4, 14, 0.2, null),
(4, 15, 2, null),
(4, 16, 2, null);


INSERT INTO  "family_describes_ingredient" ("family_id", "ingredient_id")  VALUES
(1, 1),
(1, 5),
(2, 4),
(3, 2),
(3, 3),
(6, 6),
(4, 7),
(7, 8),
(2, 9),
(7, 10),
(1, 11),
(2, 12),
(7, 13),
(8, 14),
(2, 15),
(2, 16);

INSERT INTO  "user_likes_recipe" ("recipe_id", "user_id")  VALUES
(1, 1),
(2, 4);

INSERT INTO  "user_belongs_group" ("group_id", "user_id",  "user_role")  VALUES

(1, 4,'créateur'),
(2, 3,'créateur'),
(3, 2,'créateur'),
(4, 1,'créateur'),
(5, 1,'créateur'),
(6, 1,'créateur'),
(2, 4,'peut modifier'),
(2, 4,'peut modifier'),
(2, 5,'peut modifier'),
(2, 6,'peut modifier'),
(3, 3,'lecture'),
(4, 2,'lecture'),
(4, 3,'peut modifier');


INSERT INTO  "meal_has_recipe" ("meal_id", "recipe_id", "number_people")  VALUES
(1, 1, 6),
(1, 2, 6),
(2, 2, 4),
(3, 3, 6),
(4, 3, 4),
(4, 4, 6),
(5, 4, 8),
(5, 2, 2),
(6, 4, 6);











COMMIT;

BEGIN;

-- PostGres avec le type serial n"incrémente pas automatiquement de façon implicite la séquence rattaché à la colonne !
-- Il faut donc mettre à jour la valeur courante de chacune des séquences en séléctionnant l"id maximum de chaque table
--
SELECT setval('user_id_seq', max(id)) FROM "user";
SELECT setval('ingredient_id_seq', max(id)) FROM "ingredient";
SELECT setval('recipe_id_seq', max(id)) FROM "recipe";
SELECT setval('meal_id_seq', max(id)) FROM "meal";
SELECT setval('group_id_seq', max(id)) FROM "group";
SELECT setval('review_id_seq', max(id)) FROM "review";
SELECT setval('type_id_seq', max(id)) FROM "type";
SELECT setval('family_id_seq', max(id)) FROM "family";
COMMIT;
