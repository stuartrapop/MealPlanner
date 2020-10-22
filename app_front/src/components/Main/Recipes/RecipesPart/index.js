import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

// import Tags from './Tags';

const RecipesPart = ({ recipes }) => (
  <div className="all__recipes">
    {recipes.map((recipe) => (
      <Card id="card" key={recipe.id}>
        <Image id="card__image" src={recipe.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header id="card__title">{recipe.title}</Card.Header>
          {/* <Tags tag={recipe.tag} /> */}
        </Card.Content>
        <Card.Content extra id="card__rate">
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
  </div>
);

RecipesPart.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      cooking_time: PropTypes.number,
      number_people: PropTypes.number,
      url: PropTypes.string,
      user_id: PropTypes.number,
      instruction: PropTypes.string,
      ingredients: PropTypes.array,
    }).isRequired,
  ).isRequired,
};

export default RecipesPart;
