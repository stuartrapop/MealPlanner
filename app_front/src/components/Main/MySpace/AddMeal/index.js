import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import AddMealModal from './AddMealModal';

import './styles.scss';

const AddMeal = () => (
  <div className="addmeal__container">
    <h1>Vos repas prévus</h1>
    <Icon id="add__meal__icon" name="plus circle" size="huge" />
    <div className="addmeal__body">
      <div>
        <ul className="scheduled__meals__container">
          <ul className="scheduled__meal">Lundi 13/10 Midi
            <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Lasagnes - 8 Personnes</li>
            <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Mousse au chocolat - 10 Personnes</li>
          </ul>
          <ul className="scheduled__meal">Mercredi 15/10 Midi
            <li className="scheduled__recipe"> <Icon id="remove__meal__icon" name="minus circle" /> Pizzas - 6 Personnes</li>
          </ul>
          <ul className="scheduled__meal">Mercredi 15/10 Soir
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

export default AddMeal;
