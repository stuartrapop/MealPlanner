import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const EditProfile = ({
  email, userName, firstName, lastName, editProfil, changeField, defaultUserInfos, insertDefaultUserInfos, updateAccountInfos,
}) => {
  useEffect(() => {
    insertDefaultUserInfos(defaultUserInfos);
  }, []);
  const handleChange = (evt) => {
    console.log('event.target', evt.target);

    return (
      changeField(evt.target.value, evt.target.name)
    );
  };
  const updateClick = () => {
    updateAccountInfos();
  };
  console.log(editProfil);
  return (
    <div>
      <form id="login__form__edit__profile">
        <Input onChange={handleChange} name="email" placeholder="Adresse Email" value={email} />
        <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={firstName} />
        <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={lastName} />
        <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userName} />
        <div className="login__form__button__container">
          <Button secondary className="login-form-button" onClick={updateClick}>Mettre à jour mes informations</Button>
          {/* <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Supprimer mon compte</Button> */}

        </div>
      </form>
    </div>
  );
};

// == Export
export default EditProfile;
