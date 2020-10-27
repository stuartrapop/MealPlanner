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
import AddMealModal from './Landing/MySpace/AddMeal/AddMealModal';

// == Import
import './styles.scss';
import groups from '../../../data/groups';
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
          <Route path="/mon-espace/groupe" exact>
            <GroupsPage groups={groups} />
          </Route>
          <Route path="/recettes" exact>
            <Recipes />
          </Route>
          <Route path="/mon-espace/ajouter-repas" exact>
            <AddMealModal />
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
