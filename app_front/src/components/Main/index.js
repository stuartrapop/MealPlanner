// == Import npm
import React from 'react';
import Recipe from './Recipe';
import GroupsPage from './GroupsPage';

// == Import
import './styles.scss';
import recipes from '../../../data/recipes';
import groups from '../../../data/groups';

// == Composant
const Main = () => (
  <div className="main">
    <Recipe recipes={recipes} />
    <GroupsPage groups={groups} />
  </div>
);

// == Export
export default Main;
