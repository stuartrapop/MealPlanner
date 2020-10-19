// == Import npm
import React from 'react';
import { Input } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const LogInModal = ({
  email, // Value du champ email
  password, // Value du champ password
  changeField, // Fonction qui met à jour le champ avec 2 params value et name du champ
  handleLogin, // Fonction à la soumission du formulaire sans param
  islogged,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-form">
      {islogged && (
        <p>coucou</p>
      )}

      {!islogged && (
      <div className="header">
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} name="email" placeholder="Adresse Email" value={email} />
          <Input onChange={handleChange} name="password" type="password" placeholder="Mot de passe" value={password} />
          <button type="submit" className="login-form-button">OK</button>
        </form>
      </div>
      )}
    </div>
  );
};

// == Export
export default LogInModal;
