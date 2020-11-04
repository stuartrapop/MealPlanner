import slugify from 'slugify';

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
export const getRecipeBySlug = (recipes, slug) => {
  console.log('recipes', recipes);

  return recipes.find((recipe) => {
    const slugifiedTitle = getSlugFromTitle(recipe.title);

    return slugifiedTitle === slug;
  });
};

// function to return recipes which contain search string
// const stringWithoutAccent = "Crème Brulée"
// str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
// > "Creme Brulee"

export const filterRecipes = (recipes, searchInput) => {
  const stringWithoutAccent = searchInput.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  // if (searchInput === '') {
  //   return recipes;
  // }
  return recipes.filter((recipe) => recipe.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().includes(stringWithoutAccent));
};
