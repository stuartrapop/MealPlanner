import React from 'react';
import './styles.scss';
import { Card, Image } from 'semantic-ui-react';



const TargetPresentation = () => (
  <section className="target">
    <Card id="card1">
      <Image src="https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" wrapped ui={false} />
      <Card.Content>
        <Card.Header> <h1 className="target__card__tilte">Pour les familles</h1></Card.Header>
        <Card.Description>
          Finit les heures dans les rayons à réflechir comment faire plaisir à tout le monde.
          Faites le menu de la semaine tous ensemble à l’avance et adieu la galère !
        </Card.Description>
      </Card.Content>
    </Card>

    <Card id="card2">
      <Image src="https://images.unsplash.com/photo-1516005492235-7a8d3a652dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" wrapped ui={false} />
      <Card.Content>
        <Card.Header><h1 className="target__card__tilte">Pour les colocs et les couples</h1></Card.Header>
        <Card.Description>
          Marre de ne jamais savoir quelles quantités acheter ?
          Envie de surprendre avec un plat original ?
          aManger est là pour ça !
        </Card.Description>
      </Card.Content>
    </Card>

    <Card id="card3">
      <Image src="https://images.unsplash.com/photo-1539056276907-dc946d5098c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" wrapped ui={false} />
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
