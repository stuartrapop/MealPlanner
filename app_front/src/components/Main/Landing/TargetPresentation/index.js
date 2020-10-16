import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import friends from './friends.jpg';
import families from './families.jpg';
import colocs from './colocs.jpg';

import './styles.scss';

const TargetPresentation = () => (
  <section className="target">
    <Card>
      <Image src={families} wrapped ui={false} />
      <Card.Content>
        <Card.Header> <h1 className="target__card__tilte">Pour les familles</h1></Card.Header>
        <Card.Description>
          Finit les heures dans les rayons à réflechir comment faire plaisir à tout le monde.
          Faites le menu de la semaine tous ensemble à l’avance et adieu la galère !
        </Card.Description>
      </Card.Content>
    </Card>

    <Card className>
      <Image src={colocs} wrapped ui={false} />
      <Card.Content>
        <Card.Header><h1 className="target__card__tilte">Pour les colocs et les couples</h1></Card.Header>
        <Card.Description>
          Marre de ne jamais savoir quelles quantités acheter ?
          Envie de surprendre avec un plat original ?
          aManger est là pour ça !
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Image src={friends} wrapped ui={false} />
      <Card.Content>
        <Card.Header><h1 className="target__card__tilte">Pour les vacances entre amis</h1></Card.Header>
        <Card.Description>
          Finit la galère de trouver des idées pour 15 personnes,
          calculer les quantités puis compter à la main le nombre de tomates
          nécessaires pour la semaine...
        </Card.Description>
      </Card.Content>
    </Card>
  </section>
);

export default TargetPresentation;
