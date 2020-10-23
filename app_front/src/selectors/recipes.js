import slugify from 'slugify';

export const getTitleFromRecipesNumber = (recipeNumber) => {
  let title = 'Pas de recette pour le moment';

  if (recipeNumber === 1) {
    title = 'Une seule recette mais très bonne :)';
  }
  if (recipeNumber > 1) {
    title = 'Bienvenue sur mon site de recettes, régalez-vous !';
  }

  return title;
};

export const getSlugFromTitle = (title = '') => {
  // replace remplace la 1e occurence qu'il trouve si on lui donne en 1e argument
  // une chaine de caractère, pour remplacer dans l'ensemble de la string il faut passer
  // une regex
  const modifiedTitle = title.replace(/&/g, '').replace(/_/g, '-');

  return slugify(modifiedTitle, {
    lower: true,
  });
};

export const getUrlFromTitle = (title) => `/recipe/${getSlugFromTitle(title)}`;

// objectif : récupérer dans le state,
// la recette qui contient le titre slugifié qui correspond à la valeur de ownProps.slug
export const getRecipeBySlug = (recipes, slug) =>  { 
  
  console.log('recipes', recipes)
  
  return recipes.find((recipe) => {

  const slugifiedTitle = getSlugFromTitle(recipe.title);

  return slugifiedTitle === slug;
})};
