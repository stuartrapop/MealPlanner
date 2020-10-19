// == Import npm
import React from 'react';
import { Input } from 'semantic-ui-react'

// == Import
import './styles.scss';

// == Composant
const LogInModal = () => (
  <div className="header">
    <Input placeholder="Nom d'utilisateur" />
    <Input placeholder="Mot de passe" />
  </div>

);

// == Export
export default LogInModal;
