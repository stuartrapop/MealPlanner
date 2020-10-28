// == Import npm
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// == Import
import Header from '../../containers/Header';
import Footer from '../Footer';
import Main from '../../containers/Main';
import './styles.scss';

// == Composant
const App = ({ checkIsLogged, fetchrecipes }) => {
  useEffect(() => {
    checkIsLogged();
    fetchrecipes();
  }, []);
  return (
    <div className="app">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

// == Export
export default App;
