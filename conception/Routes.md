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
| /users  | GET | See all users   |
| /user/:ID | GET | See user details |
| /user/create | POST | Create user  |
| /user/:ID | UPDATE | Modify user|
| /user/:ID | DELETE | Delete user | e
| /recipes  | GET| See all recipes with filter parameters |
| /recipes/:ID | GET | See individual recipe details  |
| /recipes/create  | POST| Create Recipe |
| /recipes/:ID   | UPDATE | Update Recipe |
| /recipes/:ID   | DELETE | Delete Recipe  |
| /recipes/review/:ID   | GET | See review  |
| /recipes/review/create   | POST | Create Review |
| /recipes/review/:ID   | UPDATE | Update Review  |
| /recipes/review/:ID  | DELETE | Delete Review  |
| /ingredients  | GET | See all ingredients |
| /ingredient/:ID  | GET | See ingredient information  |
| /ingredient/create  | POST | Add new ingredient (pour tests) |
| /ingredient/:ID  | UPDATE | Modify an ingredient (pour tests) |
| /ingredient/:ID  | DELETE | Delete an ingredient (pour tests) |
| /groups  | GET | See all groups |
| /group/:ID   | GET | See group information |
| /group/create   | POST | Create group |
| /group/:ID   | UPDATE | Modify group |
| /group/:ID   | Delete | Delete Group |
| /meals  | GET | See all meals   |
| /meal/:ID   | GET | See all meals  |
| /meal/create   | POST | Create meal |
| /meal/:ID   | UPDATE | Modify meal |
| /meal/:ID   | Delete | Delete meal |
| /planning/group/:ID   | GET | See the meal planning for a group |
| /404 | ? | 404 |