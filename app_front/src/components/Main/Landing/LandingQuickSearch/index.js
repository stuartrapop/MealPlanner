import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Card, Icon, Image, Label, Button,
} from 'semantic-ui-react';
import './styles.scss';

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
      {searchedRecipes.slice(0, 3).map((recipes) => (
        <Card className="card__from__landing__page">
          <Image key={recipes.id} id="trendy__recipe__img" src={recipes.url} wrapped ui={false} />
          <Card.Content>
            <Card.Header />
            <Card.Description>
              <h2> {recipes.title}</h2>
              <p> Temps de préparation : {recipes.cooking_time} minutes </p>
              <p>  Difficulté de la recette : {recipes.difficulty} </p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star" />
              <Icon name="star half" />
              4.5/5
            </a>
          </Card.Content>
        </Card>
      ))}
      <a href="/recettes">
        <Button id="see__all__button">Découvrir toutes les recettes</Button>
      </a>
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
