import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'semantic-ui-react';

// == Import
import './styles.scss';

// == Composant
const EditProfile = ({
  email, userInfos, editProfil, modifyDetails
}) => {
  const handleChange = (evt) => {
    modifyDetails(evt.target.value);
  };
  console.log(editProfil);
  return (
    <div>
      <form id="login__form__edit__profile">
        <Input onChange={handleChange} name="edit__profile__email" placeholder="Adresse Email" value={email} />
        <Input onChange={handleChange} value={editProfil} name="edit__profile__firstName" type="text" placeholder="Prénom" value={userInfos.firstName} />
        <Input onChange={handleChange} name="edit__profile__lastName" type="text" placeholder="Nom" value={userInfos.lastName} />
        <Input onChange={handleChange} name="edit__profile__userName" type="text" placeholder="Pseudo" value={userInfos.userName} />
        <div className="login__form__button__container">
          {/* <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Mettre à jour mes informations</Button>
        <Button secondary className="login-form-button" onClick={toggleLogInComponent}>Supprimer mon compte</Button> */}

        </div>
      </form>
    </div>
  );
};

// == Export
export default EditProfile;
