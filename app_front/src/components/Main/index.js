// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Recipe from './Recipe';
import GroupsPage from './GroupsPage';
import Landing from './Landing';
import MySpace from './MySpace';
import CreateAccount from './CreateAccount';

import Recipes from './Recipes';

// == Import
import './styles.scss';
import recipes from '../../../data/recipes';
import groups from '../../../data/groups';

// == Composant
const Main = () => (
  <Router>
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/mon-espace" exact>
          <MySpace />
        </Route>
        <Route path="/recette/1">
          <Recipe recipes={recipes} />
        </Route>
        <Route path="/mon-espace/groupe" exact>
          <GroupsPage groups={groups} />
        </Route>
        <Route path="/creer-mon-compte" exact>
          <CreateAccount />
        </Route>
        <Route path="/recettes" exact>
          <Recipes />
        </Route>
      </Switch>
    </div>
  </Router>
);

// == Export
export default Main;
