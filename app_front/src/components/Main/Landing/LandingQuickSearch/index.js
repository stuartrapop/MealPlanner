import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {
  Input, Card, Icon, Image, Button,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getSlugFromTitle } from '../../../../selectors/recipes';


const LandingQuickSearch = ({ searchedRecipes, searchInput, modifySearch }) => {
  const handleOnChange = (event) => {
    modifySearch(event.target.value);
  };

  return (
    <section className="landing__search">
      <h1>Un avant goût de nos recettes ?</h1>
      <Input
        id="form__input"
        onChange={handleOnChange}
        value={searchInput}
        type="text"
        name="recipes"
        className="search__bar"
        icon="search"
        placeholder="Rechercher"
      />
      <h1>Nos coups de coeur du moment</h1>
      <div className="quicksearch__results__container">
        {searchedRecipes.slice(0, 3).map((recipes) => (
          <Link to={`/recette/${getSlugFromTitle(recipes.title)}`} key={recipes.id}>
            <Card id="card__from__landing__page">
              <Image key={recipes.id} id="trendy__recipe__img" src={recipes.url} wrapped ui={false} />
              <Card.Content>
                <Card.Header />
                <Card.Description>
                  <h2> {recipes.title}</h2>
                  <p> Temps de préparation : {recipes.cooking_time} minutes </p>
                  <p id="card__from__landing__difficulty">  Difficulté de la recette : {recipes.difficulty} </p>
                  <a id="card__ratings">
                    <Icon id="card__ratings" name="star" />
                    <Icon id="card__ratings" name="star" />
                    <Icon id="card__ratings" name="star" />
                    <Icon id="card__ratings" name="star" />
                    <Icon id="card__ratings" name="star half" />
                    4.5/5
                  </a>
                </Card.Description>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </div>
      <Link to="/recettes">
        <Button id="see__all__button">Découvrir toutes les recettes</Button>
      </Link>
    </section>
  );
};

LandingQuickSearch.propTypes = {
  searchedRecipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      cooking_time: PropTypes.number,
      difficulty: PropTypes.string,
    }).isRequired,
  ).isRequired,
  searchInput: PropTypes.string.isRequired,
  modifySearch: PropTypes.func.isRequired,
};

export default LandingQuickSearch;
