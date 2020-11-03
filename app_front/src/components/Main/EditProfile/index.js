import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Button, Icon } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const EditProfile = ({
  email,
  userName,
  firstName,
  lastName,
  editProfil,
  changeField,
  defaultUserInfos,
  insertDefaultUserInfos,
  updateAccountInfos,
  removeAccount,
}) => {
  useEffect(() => {
    insertDefaultUserInfos(defaultUserInfos);
  }, []);
  console.log('default', defaultUserInfos);
  const handleChange = (evt) => (
    changeField(evt.target.value, evt.target.name)
  );
  const updateClick = (event) => {
    // event.preventDefault();
    updateAccountInfos();
  };
  const removeAccountOnClick = (event) => {
    console.log('evttarget id ', event.target.id);
    
    removeAccount(event.target.id);
  };

  return (
    <div className="parameters__container">
      <form id="login__form__edit__profile">
        <h1>Paramètres</h1>
        <Input onChange={handleChange.bind} name="email" placeholder="Adresse Email" value={email} />
        <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={firstName} />
        <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={lastName} />
        <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userName} />
        <div className="login__form__button__container">
          <Link to="/" onClick={updateClick} secondary className="login-form-button">  <Button positive>Mettre à jour mes informations</Button></Link>
          <Link to="/" secondary className="login-form-button" id={defaultUserInfos.userId} onClick={removeAccountOnClick}><Button negative>Supprimer mon compte</Button></Link>

        </div>
      </form>
    </div>
  );
};

// == Export
export default EditProfile;
