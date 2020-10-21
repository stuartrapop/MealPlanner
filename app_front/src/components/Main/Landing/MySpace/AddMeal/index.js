import React from 'react';
import { Icon, Button, Dropdown } from 'semantic-ui-react';
// import AddMealModal from './AddMealModal';

import './styles.scss';

const AddMeal = () => {
  const groupOptions = [
    {
      key: 'group1',
      text: 'Ardèche',
      value: 'Ardèche',
    },
    {
      key: 'group2',
      text: 'Oclock Jason',
      value: 'Oclock Jason',
    },
    {
      key: 'group3',
      text: 'Ski 2041',
      value: 'Ski 2041',
    },
  ];
  return (
    <div className="addmeal__container">
      <h1>Vos repas prévus</h1>
      <div className="addmeal__body">
        <div>
          <ul className="scheduled__meals__container">
            <div className="add__meal__container">
              <div className="add__meal--left">
                <Icon id="add__meal__icon" name="plus circle" size="large" />
                Ajouter un créneau
              </div>
              <div className="add__meal--right">
                <Dropdown placeholder="Ardèche" fluid selection options={groupOptions} />
              </div>
            </div>
            <ul className="scheduled__meal">Lundi 13/10 Midi
              <li className="scheduled__recipe"> <Icon id="add__meal__icon" name="plus circle" /> Ajouter une recette</li>
              <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Lasagnes - 8 Personnes</li>
              <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Mousse au chocolat - 10 Personnes</li>
            </ul>
            <ul className="scheduled__meal">Mercredi 15/10 Midi
              <li className="scheduled__recipe"> <Icon id="add__meal__icon" name="plus circle" /> Ajouter une recette</li>
              <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Pizzas - 6 Personnes</li>
            </ul>
            <ul className="scheduled__meal">Mercredi 15/10 Soir
              <li className="scheduled__recipe"> <Icon id="add__meal__icon" name="plus circle" /> Ajouter une recette</li>
              <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Risotto aux champignons - 6 Personnes</li>
            </ul>
          </ul>
        </div>
        <div className="advanced__search__access">
          <h2> En manque d'inspiration ?</h2>
          <Button inverted color="orange">Parcourir les recettes !</Button>
        </div>
      </div>
    </div>
  );
};

export default AddMeal;
