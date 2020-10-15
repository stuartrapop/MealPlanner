// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Recipe from './Recipe';
import GroupsPage from './GroupsPage';

// == Import
import './styles.scss';
import recipes from '../../../data/recipes';
import groups from '../../../data/groups';

// == Composant
const Main = () => (
  <Router>
    <div className="main">
      <Switch>
        <Route path="/recette/1">
          <Recipe recipes={recipes} />
        </Route>
        <Route path="/mon-espace/groupe">
          <GroupsPage groups={groups} />
        </Route>
      </Switch>
    </div>
  </Router>
);

// == Export
export default Main;
