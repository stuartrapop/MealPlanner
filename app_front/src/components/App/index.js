// == Import npm
import React, { useEffect } from 'react';

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
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// == Export
export default App;
