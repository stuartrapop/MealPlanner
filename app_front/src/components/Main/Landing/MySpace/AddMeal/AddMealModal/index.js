import React from 'react';
import { Input, Button } from 'semantic-ui-react';

import './styles.scss';

const AddMealModal = () => (
  <div className="addMeal__modal">
    <div className="search__zone">
      <ul>
        <li>Date <Input placeholder="Date" id="small__input__box" /></li>
        <li>Repas  <Input list="meals" placeholder="Repas" id="big__input__box" />
          <datalist id="meals">
            <option value="Matin">Matin</option>
            <option value="Midi">Midi</option>
            <option value="Soir">Soir</option>
          </datalist>
        </li>
        <li>Nombre de personnes <Input placeholder="1" id="small__input__box" /></li>
        <li>Recette <Input placeholder="Rechercher" id="big__input__box" /></li>
      </ul>
      <p>En manque d'inspiration ?</p>
      <Button inverted content="Parcourez nos recette" />
    </div>
    <div className="result__zone">
      Resultats
    </div>
    <Button inverted content="Valider" />
  </div>
);

export default AddMealModal;
