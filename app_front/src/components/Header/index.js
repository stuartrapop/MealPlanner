// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import logo from './image.png';


// == Composant
const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" className="header__logo" />
    <h1 className="header__menu">Menu</h1>
  </div>
);

// == Export
export default Header;
