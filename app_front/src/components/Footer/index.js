// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <div className="separator" />
    <div className="footer__content">
      <div className="top__part">
        <p>L'équipe</p>
        <p>Confidentialité</p>
      </div>
      <div className="bottom__part">
        <p>&copy; aManger 2020 - Made in Jason</p>
      </div>
    </div>
  </div>
);

// == Export
export default Footer;
