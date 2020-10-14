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
| /account | GET | See account details |
| /account | POST | Create Account  |
| /account | UPDATE | Modify Account|
| /account | DELETE | Delete Account |
| /recipes  | GET| See all recipes with filter parameters |
| /recipes/recipe/:ID | GET | See individual recipe details  |
| /recipes/recipe  | POST| Create Recipe |
| /recipes/recipe/:ID   | UPDATE | Update Recipe |
| /recipes/recipe/:ID   | DELETE | Delete Recipe  |
| /recipes/review/:ID   | GET | See review  |
| /recipes/review   | POST | Create Review |
| /recipes/review/:ID   | UPDATE | Update Review  |
| /recipes/review/:ID  | DELETE | Delete Review  |
| /ingredient  | GET | See ingredient information  |
| /ingredient  | POST | Add new ingredient (pour tests) |
| /ingredient  | UPDATE | Modify an ingredient (pour tests) |
| /ingredient  | DELETE | Delete an ingredient (pour tests) |
| /group/:ID   | GET | See group information |
| /group   | POST | Create group |
| /group/:ID   | UPDATE | Modify group |
| /group/:ID   | Delete | Delete Group |
| /meal/:ID   | GET | See meal information |
| /meal   | POST | Create meal |
| /meal/:ID   | UPDATE | Modify meal |
| /meal/:ID   | Delete | Delete meal |
| /planning/group/:ID   | GET | See the meal planning for a group |
| /404 | ? | 404 |

