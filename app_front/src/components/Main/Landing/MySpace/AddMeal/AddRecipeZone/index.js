import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {
  Search, Dropdown, Icon,
} from 'semantic-ui-react';



const AddRecipeZone = ({
  id, // Id du meal dans lequel on souhaite ajouter une recette
  recipesList, // liste de toutes les recettes du serveur
  addMealEntryActive, // Id du meal dont le composant search est actif
  changeActiveEntryIdAction, // Fonction pour modifier l'Id du composant actif
  recipesSearchResults,
  recipesSearchValue,
  handleSearchChangeAction, // fonction qui gère les frappes
  showResults, // fonction pour afficher les résultats
  addRecipeToDB,
  numberPeople,
  sendNumberPeopleAction, // fonction pour mettre à jour le nb de personnes
  resetActiveEntryIdAction,
}) => {
  const source = recipesList.map((recipe) => ({
    key: recipe.id,
    title: recipe.title,
    image: recipe.url,
    description: recipe.difficulty,
    price: `${recipe.cooking_time} min`,
  }));

  const numberPeopleChange = (evt) => {
    sendNumberPeopleAction(evt.target.textContent);
  };

  const changeActiveEntryId = () => {
    changeActiveEntryIdAction(id);
  };

  const resetActiveEntryId = () => {
    resetActiveEntryIdAction();
  };

  const handleSearchChange = (evt) => {
    handleSearchChangeAction(evt.target.value, source); // On enregistre les frappes
    // eslint-disable-next-line max-len
    const possibleResults = source.filter((recipe) => (recipe.title.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()).includes(evt.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()));
    showResults(possibleResults);
  };

  const handleResultSelection = (evt, data) => {
    addRecipeToDB(id, data.result.key);
  };

  const nbPeopleOptions = [
    { key: '1', text: '1', value: '1' },
    { key: '2', text: '2', value: '2' },
    { key: '3', text: '3', value: '3' },
    { key: '4', text: '4', value: '4' },
    { key: '5', text: '5', value: '5' },
    { key: '6', text: '6', value: '6' },
    { key: '7', text: '7', value: '7' },
    { key: '8', text: '8', value: '8' },
    { key: '9', text: '9', value: '9' },
    { key: '10', text: '10', value: '10' },
    { key: '11', text: '11', value: '11' },
    { key: '12', text: '12', value: '12' },
    { key: '13', text: '13', value: '13' },
    { key: '14', text: '14', value: '14' },
    { key: '15', text: '15', value: '15' },
    { key: '16', text: '16', value: '16' },
    { key: '17', text: '17', value: '17' },
    { key: '18', text: '18', value: '18' },
    { key: '19', text: '19', value: '19' },
    { key: '20', text: '20', value: '20' },
  ];

  return (
    <div className="add__recipe_zone">
      {addMealEntryActive !== id
      && (<li className="scheduled__recipe"> <Icon name="plus" onClick={changeActiveEntryId} /></li>)}

      {addMealEntryActive === id && (
        <div className="add__recipe__form">
          <div>
            Nous serons{' '}
            <Dropdown
              id="select__number__people"
              floating
              inline
              options={nbPeopleOptions}
              scrolling
              defaultValue="2"
              onChange={numberPeopleChange}
            />{' '}
            personnes lors de ce repas.
          </div>
          <div className="recipe__research__zone">
            <Search
              onResultSelect={handleResultSelection}
              onSearchChange={handleSearchChange}
              results={recipesSearchResults}
              value={recipesSearchValue}
            />
            <Icon name="close" onClick={resetActiveEntryId} />
          </div>
        </div>
      )}
    </div>
  );
};

AddRecipeZone.propTypes = {
};

export default AddRecipeZone;
