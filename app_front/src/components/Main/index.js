// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';
import Recipes from '../../containers/Recipes';
import Recipe from '../../containers/Recipe';
import GroupsPage from '../../containers/GroupsPage';
import EditProfile from '../../containers/EditProfile';
import Landing from '../../containers/Landing';
import About from './About';
import AddMealModal from './Landing/MySpace/AddMeal/AddMealModal';

// == Import
import './styles.scss';
import ShoppingList from '../../containers/ShoppingList';

// == Composant

const Main = ({ loading }) => (
  <div className="main">
    <Switch>
      {loading && (
        <Segment>
          <Dimmer active inverted>
            <Loader size="large">Loading</Loader>
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      )}
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
          <Route path="/mon-espace/parametres" exact>
            <EditProfile />
          </Route>
        </div>
      )}
    </Switch>
  </div>
);

Main.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Main;
