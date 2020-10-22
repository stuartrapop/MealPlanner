// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Recipes from '../../containers/Recipes';
import Recipe from './Recipe';
import GroupsPage from './GroupsPage';
import Landing from '../../containers/Landing';
import CreateAccount from './CreateAccount';
import AddMealModal from './Landing/MySpace/AddMeal/AddMealModal';

// == Import
import './styles.scss';
import groups from '../../../data/groups';

// == Composant
const Main = () => (
  <Router>
    <div className="main">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/recette/1">
          <Recipe />
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
        <Route path="/mon-espace/ajouter-repas" exact>
          <AddMealModal />
        </Route>
      </Switch>
    </div>
  </Router>
);

// == Export
export default Main;
