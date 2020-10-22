// == Import npm
import React, { useEffect } from 'react';

// == Import
import Header from '../../containers/Header';
import Footer from '../Footer';
import Main from '../Main';
import './styles.scss';

// == Composant
const App = ({ checkIsLogged }) => {
  useEffect(() => {
    checkIsLogged();
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
