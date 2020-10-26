## Routes d'affichage côté front-end
| path    |  comment |
| -------- | ---------- |
| / | ? Page d'accueil **visiteur** |
| /creer-mon-compte |  inscription utilisateur |
| /recettes |   affiches l'ensesemble des recettes, accès aux filtres, |
| /recette/{recipeName} |  consultation d'une recette, de sa note |
| /mon-espace/  | Page d'accueil **utilisateur** Gérer le planning, gestion de repas, préparation de la liste de course |
| /mon-espace/groupe  | gestion d'un groupe, consultation des membres|
| /mon-espace/parametres  | gestion du profile, |
| /liste |  consultation liste de course, ajout manuel de produits |
| /equipe |  presentation teamDev |
| /404 |  404 |

## Routes d'affichage côté back-end
| path    | method | comment |
| -------- | ---- | ---------- |
| /        | GET | Description of API  |
| /login        | POST | verify email and password  |
| /isLogged       | POST| check if user is logged using express-session  |
| /logout       | POST | remove express-session cookie connection  |
| /createAccount        | POST | verify email and password  |
| /changePassword        | PATCH | verify email and password  |
| /users  | GET | See all users   |
| /user/:ID | GET | See user details |
| /user/create | POST | Create user  |
| /user/:ID | PATCH | Modify user|
| /user/:ID | DELETE | Delete user | e
| /recipes  | GET| See all recipes with filter parameters |
| /recipes/:ID | GET | See individual recipe details  |
| /recipes/create  | POST| ***Create Recipe |
| /recipes/:ID   | PATCH | ***Update Recipe |
| /recipes/:ID   | DELETE | ***Delete Recipe  |
| /recipes/reviews   | GET | See all reviews |
| /recipes/review/:ID   | GET | See review  |
| /recipes/review/create   | POST | Create Review |
| /recipes/review/:ID   | PATCH | Update Review  |
| /recipes/review/:ID  | DELETE | Delete Review  |
| /ingredients  | GET | See all ingredients |
| /ingredient/:ID  | GET | See ingredient information  |
| /ingredient/create  | POST | *** Add new ingredient (pour tests) |
| /ingredient/:ID  | PATCH | *** Modify an ingredient (pour tests) |
| /ingredient/:ID  | DELETE | *** Delete an ingredient (pour tests) |
| /groups  | GET | See all groups |
| /group/:ID   | GET | See group information |
| /group/create   | POST | Create group |
| /group/:ID   | PATCH | Modify group |
| /group/:ID   | Delete | Delete Group |
| /group/addMember  | POST | add a member to a group |
| /group/removeMember  | PATCH | remove a non owner from a group |
| /meals  | GET | See all meals   |
| /meal/:ID   | GET | See all meals  |
| /meal/create   | POST | Create meal |
| /meal/:ID   | PATCH | Modify meal |
| /meal/:ID   | Delete | Delete meal |
| /meal/addRecipe  | POST | add a recipe with number of people to a meal |
| /meal/removeRecipe   | POST| remove a recipe from a meal |

| /404 | ? | 404 |