import React from 'react';
import './styles.scss';
import { Button, Dropdown, Icon } from 'semantic-ui-react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

import 'react-datepicker/dist/react-datepicker.css';

registerLocale('fr', fr);
setDefaultLocale('fr');
const AddMealModal = ({
  sendAddMealModalAction,
  sendTargetedValuesCombinaisonAction,
  displayErrorMessage,
  errorMessageBoolean,
}) => {
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
      text: 'Dîner',
      value: 3,
    },
  ];
  const startDate = new Date();
  // On ajoute une date de fin pour empêcher de prévoir ds 4 mois
  const oneWeekFromNow = new Date();
  oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 6);
  let selectedDate = `${startDate.getFullYear()}/${startDate.getMonth() + 1}/${startDate.getDate()}`; // pour stocker nos données
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
      displayErrorMessage();
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
            <DatePicker
              local="fr"
              onChange={assignDate}
              inline
              maxDate={oneWeekFromNow}
              minDate={startDate}
            />
          </li>
          <li>Repas  <Dropdown id="big__input__box" placeholder="Repas" fluid selection options={groupOptions} onChange={assignMeal} />
          </li>
        </ul>
      </div>
      <Button primary content="Valider" onClick={sendTargetedValuesCombinaison} />
      {errorMessageBoolean && (
        <p className="input__value__error">Veillez à bien remplir les 2 champs !</p>
      )}
    </div>
  );
};
export default AddMealModal;
