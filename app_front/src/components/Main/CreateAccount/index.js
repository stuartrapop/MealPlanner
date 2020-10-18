import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

import './styles.scss';

const CreateAccount = () => (
  <Form className="form">
    <Form.Field className="form__field">
      <label className="field__label">Ton prénom !</label>
      <input className="form__input" placeholder="Harry" />
    </Form.Field>
    <Form.Field className="form__field">
      <label className="form__label">Ton nom, si si je te promets ...</label>
      <input className="form__input" placeholder="Cower" />
    </Form.Field>
    <Form.Field>
      <label className="form__label">Pseudonyme, ton moment créatif de la journée.</label>
      <input className="form__input" placeholder="Harry_bg_75" />
    </Form.Field>
    <Form.Field>
      <label className="form__label">Ton adresse e-mail, et une vraie, on vérifie !</label>
      <input className="form__input" placeholder="sgapeti.lobognaise@atable.com" type="email" />
    </Form.Field>
    <Form.Field>
      <label className="form__label">Mieux vaut deux fois qu'une, parce qu'on sait que tu as tapé trop vite...  </label>
      <input className="form__input" placeholder="spaghetti.bolognaise@atable.com" type="email" />
    </Form.Field>
    <Form.Field>
      <label className="label"> Allez on redevient serieux.</label>
      <p> Ton mot de passe doit contenir 1 Majuscule,
        1 chiffre et 1 caractère spécial minimum.
      </p>
      <input className="form__input" type="password" placeholder="*******" />
    </Form.Field>
    <Form.Field>
      <label className="form__label"> On ne lésine pas avec la sécurité !  </label>
      <input className="form__input" type="password" placeholder="*******" />
    </Form.Field>
    <Button type="submit">J'ai faim ! </Button>
  </Form>
);

export default CreateAccount;
