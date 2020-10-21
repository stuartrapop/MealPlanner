// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Icon } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const LogInModal = ({
  email, // Value du champ email
  password, // Value du champ password
  changeField, // Fonction qui met à jour le champ avec 2 params value et name du champ
  handleLogin, // Fonction à la soumission du formulaire sans param
  isLogged,
  handler, // fonction du parent pour fermer la modale
  logInError,
}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleClick = () => {
    handler();
  };

  return (
    <div className="login__modal">
      <Icon id="close__modal__icon" name="close" size="big" color="red" onClick={handleClick} />

      {!isLogged && (
      <div className="login__form">
        <form onSubmit={handleSubmit}>
          <Input onChange={handleChange} name="email" placeholder="Adresse Email" value={email} />
          <Input onChange={handleChange} name="password" type="password" placeholder="Mot de passe" value={password} />
          <div>
            <Button primary type="submit" className="login-form-button">Se Connecter</Button>
            <Button secondary type="submit" className="login-form-button">Créer un compte</Button>
          </div>
        </form>
        {logInError && (
          <p className="logIn__error">Cette combinaison utilisateur/mot de passe n'est pas reconnue</p>
        )}
      </div>
      )}

      {isLogged && (handler())}
    </div>
  );
};

LogInModal.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  logInError: PropTypes.bool.isRequired,
};

// == Export
export default LogInModal;
