import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';
import { Card, Label } from 'semantic-ui-react';
import recipes from '../../../../../../data/recipes';

const Tags = ({ tag }) => (
  <Card.Meta>
    {tag.map((tags) => (
      <Label key={recipes.id} color="green" horizontal>{tags}</Label>
    ))}
  </Card.Meta>
);

// Tags.propTypes = {
//   tag: PropTypes.arrayOf(
//     PropTypes.string,
//   ).isRequired,
// };

export default Tags;
