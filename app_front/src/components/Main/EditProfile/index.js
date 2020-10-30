import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

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
    removeAccount(event.target.id);
  };
  return (
    <div>
      <form id="login__form__edit__profile">
        <Input onChange={handleChange.bind} name="email" placeholder="Adresse Email" value={email} />
        <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={firstName} />
        <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={lastName} />
        <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userName} />
        <div className="login__form__button__container">
          <Link to="/" onClick={updateClick} secondary className="login-form-button"> Mettre à jour mes informations</Link>
          <Link to="/" secondary className="login-form-button" id={defaultUserInfos.userId} onClick={removeAccountOnClick}>Supprimer mon compte</Link>

        </div>
      </form>
    </div>
  );
};

// == Export
export default EditProfile;
