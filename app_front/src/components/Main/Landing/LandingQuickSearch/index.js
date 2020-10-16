import React from 'react';
import {
  Input, Card, Icon, Image, Label, Button,
} from 'semantic-ui-react';
import cookies from './cookies.jpg';

import './styles.scss';

const LandingQuickSearch = () => (
  <section className="landing__search">
    <h1>Un avant goût de nos recettes ?</h1>
    <Input className="search__bar" icon="search" placeholder="Rechercher" />

    <h1>Nos coups de coeur du moment</h1>
    <Card>
      <Image id="trendy__recipe__img" src={cookies} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Cookies fondants maison</Card.Header>
        <Card.Meta>
          <Label color="green" horizontal>
            Vegetarien
          </Label>
          <Label color="purple" horizontal>
            Dessert
          </Label>
        </Card.Meta>
        <Card.Description>
          Une recette pour de délicieux cookies
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star" />
          <Icon name="star half" />
          4.5/5
        </a>
      </Card.Content>
    </Card>

    <Button id="see__all__button">Découvrir toutes les recettes</Button>
  </section>
);

export default LandingQuickSearch;
