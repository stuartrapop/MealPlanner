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
import GroupsPage from '../../containers/GroupsPage';

import Landing from '../../containers/Landing';
import About from './About';
import AddMealModal from './Landing/MySpace/AddMeal/AddMealModal';

// == Import
import './styles.scss';
import ShoppingList from '../../containers/ShoppingList';

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
          <Route path="/mon-espace/groupes" exact>
            <GroupsPage />
          </Route>
          <Route path="/recettes" exact>
            <Recipes />
          </Route>
          <Route path="/mon-espace/ajouter-repas" exact>
            <AddMealModal />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/liste" exact>
            <ShoppingList />
          </Route>
        </div>
        )}
      </Switch>
    </div>
  </Router>
);

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Main;
