import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import {
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

import Tags from './Tags';

const RecipesPart = ({ recipes }) => (
  <div className="all__recipes">
    {recipes.map((recipe) => (
      <Card>
        <Image id="one__recipe__img" src={recipe.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{recipe.title}</Card.Header>
          <Tags tag={recipe.tag} />
          <Card.Description>
            {recipe.difficulty}
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
  </div>
);

RecipesPart.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
      difficulty: PropTypes.string,
      url: PropTypes.string,
      instruction: PropTypes.string,
      ingredients: PropTypes.array,
    }).isRequired,
  ).isRequired,
};

export default RecipesPart;
