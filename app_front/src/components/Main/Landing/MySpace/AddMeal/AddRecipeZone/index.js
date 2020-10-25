import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Dropdown, Icon, Input,
} from 'semantic-ui-react';

import './styles.scss';

const AddRecipeZone = ({
}) => {
  const recipesOptions = [
    {
      key: '1',
      text: 'Poulet braisé',
      value: '1',
      label: { color: 'red', empty: true, circular: true },
    },
    {
      key: '2',
      text: 'Salade Grecque',
      value: '2',
      label: { color: 'green', empty: true, circular: true },
    },
  ];
  return (
    <div className="add__recipe_zone">
      <Input loading icon="food" placeholder="Rechercher" />
    </div>
  );
};

AddRecipeZone.propTypes = {
};

export default AddRecipeZone;
