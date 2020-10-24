import React from 'react';
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

import './styles.scss';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fr', fr);
setDefaultLocale('fr');

const AddMealModal = ({ sendAddMealModalAction, sendTargetedValuesCombinaisonAction }) => {
  const groupOptions = [
    {
      key: 1,
      text: 'Petit-Déjeuner',
      value: 1,
    },
    {
      key: 2,
      text: 'Déjeuner',
      value: 2,
    },
    {
      key: 3,
      text: 'Dinner',
      value: 3,
    },
  ];

  const startDate = new Date();

  let selectedDate; // pour stocker nos données
  let selectedMeal; // pour stocker nos données
  // ici j'ai la valeur de la date choisie
  const assignDate = (date) => {
    // On converti la date pour avoir un format qui nous intéresse
    const formattedDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    selectedDate = formattedDate;
  };
  // ici j'ai la valeur du repas choisi
  const assignMeal = (evt) => {
    selectedMeal = evt.target.textContent;
  };

  const sendTargetedValuesCombinaison = () => {
    if (selectedDate && selectedMeal) {
      sendTargetedValuesCombinaisonAction(selectedDate, selectedMeal);
    }
    else {
      console.log('erreur'); // Ajouter box message d'erreur
    }
  };

  const toggleAddMealModal = () => {
    sendAddMealModalAction();
  };

  return (
    <div className="addMeal__modal">
      <div className="search__zone">
        <Icon id="close__modal__icon" name="close" size="big" color="red" onClick={toggleAddMealModal} />
        <ul>
          <li>Date
            <DatePicker local="fr" selected={startDate} onChange={assignDate} inline />
          </li>
          <li>Repas  <Dropdown id="big__input__box" placeholder="Repas" fluid selection options={groupOptions} onChange={assignMeal} />
          </li>
        </ul>
      </div>
      <Button inverted content="Valider" onClick={sendTargetedValuesCombinaison} />
    </div>
  );
};

export default AddMealModal;
