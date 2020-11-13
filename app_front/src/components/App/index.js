// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './styles.scss';
// == Import
import Header from '../../containers/Header';
import Footer from '../Footer';
import Main from '../../containers/Main';

import 'semantic-ui-css/semantic.min.css';

// == Composant
const App = ({ checkIsLogged, fetchrecipes }) => {
  useEffect(() => {
    checkIsLogged();
    fetchrecipes();
  }, []);
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
};

// == Export
export default App;
