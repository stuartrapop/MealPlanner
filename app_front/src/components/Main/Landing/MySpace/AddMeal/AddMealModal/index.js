import React from 'react';
import { Input, Button, Dropdown } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import './styles.scss';

const AddMealModal = () => {
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

  return (
    <div className="addMeal__modal">
      <div className="search__zone">
        <ul>
          <li>Date
            <DatePicker selected={startDate} onChange={(date) => console.log(date)} inline />
          </li>
          <li>Repas  <Dropdown id="big__input__box" placeholder="Repas" fluid selection options={groupOptions} />
          </li>
        </ul>
      </div>
      <Button inverted content="Valider" />
    </div>
  );
};

export default AddMealModal;
