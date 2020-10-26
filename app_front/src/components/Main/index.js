// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Recipes from '../../containers/Recipes';
import Recipe from '../../containers/Recipe';
import GroupsPage from './GroupsPage';

import Landing from '../../containers/Landing';
import CreateAccount from './CreateAccount';
import AddMealModal from './Landing/MySpace/AddMeal/AddMealModal';

// == Import
import './styles.scss';
import groups from '../../../data/groups';

// == Composant
const Main = ({ loading }) => (
  <Router>
    <div className="main">
      <Switch>
        {loading && (<div>loading</div>)}
        {!loading && (
        <div>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route
            path="/recette/:slug"
            render={({ match }) => (
              <Recipe slug={match.params.slug} />
            )}
          />
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
        </div>
        )}

      </Switch>
    </div>
  </Router>
);

// == Export
export default Main;
