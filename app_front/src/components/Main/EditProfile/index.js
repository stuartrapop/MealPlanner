import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// == Import
import './styles.scss';
import {
  Input, Button, Divider, Form, Label,
} from 'semantic-ui-react';



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
  const handleChange = (evt) => (
    changeField(evt.target.value, evt.target.name)
  );
  const updateClick = () => {
    updateAccountInfos();
  };
  const removeAccountOnClick = (event) => {
    console.log('evttarget ########', event.target);
    console.log('defaultUserInfos ', defaultUserInfos);
    removeAccount(event.target.id);
  };

  return (
    <div className="parameters__container">
      <Form id="form__edit__profile">
        <h1>Paramètres</h1>
        <Form.Field>
          <Label as="a" id="label__params" ribbon>
            Email
          </Label>
          <Input onChange={handleChange.bind} name="email" placeholder="Adresse Email" value={email} />
        </Form.Field>
        <Form.Field>
          <Label as="a" id="label__params" ribbon>
            Prénom
          </Label>
          <Input onChange={handleChange} name="firstName" type="text" placeholder="Prénom" value={firstName} />
        </Form.Field>
        <Form.Field>
          <Label as="a" id="label__params" ribbon>
            Nom
          </Label>
          <Input onChange={handleChange} name="lastName" type="text" placeholder="Nom" value={lastName} />
        </Form.Field>
        <Form.Field>
          <Label as="a" id="label__params" ribbon>
            Pseudo
          </Label>
          <Input onChange={handleChange} name="userName" type="text" placeholder="Pseudo" value={userName} />
        </Form.Field>

        <div className="edit__button__container">
          <Link to="/" onClick={updateClick} secondary className="login-form-button">  <Button positive>Mettre à jour mes informations</Button></Link>
           <Link to="/" secondary className="login-form-button"><Button id={defaultUserInfos.userId} onClick={removeAccountOnClick} negative>Supprimer mon compte</Button></Link>

        </div>
      </Form>
    </div>
  );
};

// == Export
export default EditProfile;
