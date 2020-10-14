// == Import npm
import React from 'react';
import Recipe from './Recipe';

// == Import
import './styles.scss';
import recipes from '../../../data/recipes';

// == Composant
const Main = () => (
  <div className="main">
    <Recipe recipes={recipes} />
  </div>
);

// == Export
export default Main;
