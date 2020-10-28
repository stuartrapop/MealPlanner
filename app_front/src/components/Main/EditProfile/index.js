import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';
// import EditProfile from '../../containers/EditProfile';

// == Import
import './styles.scss';

// == Composant
const EditProfile = ({ email, userInfos}) => {
  const handleChange = (evt) => {
    changeField(evt.target.value, evt.target.name);
  };
  console.log('userInfos', userInfos);
  return(
  <div>
    <form id="login__form__2">
      <Input onChange={handleChange} name="email" placeholder="Adresse Email" value={email} />
      <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={userInfos.firstName} />
      <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={userInfos.lastName} />
      <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userInfos.userName} />
      <div className="login__form__button__container">
        {/* <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Mettre à jour mes informations</Button>
        <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Supprimer mon compte</Button> */}

      </div>
    </form>
  </div>
)};

// == Export
export default EditProfile;
