// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Divider, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <div className="footer">

    {/* <Divider inverted section /> */}

    <List id="footer__list" equal width grid link>
      <List.Item as="a"><Link to="/about"> À propos de nous</Link></List.Item>
      <List.Item as="a">Confidentialité</List.Item>
      <List.Item as="a"><Icon copyright name="copyright" /> aManger 2020 - Made in Jason</List.Item>
    </List>
    

  </div>
);

// == Export
export default Footer;
