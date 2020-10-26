import React from 'react';

import './styles.scss';

import chefImage from '../../../assets/images/chef.jpg';

const About = () => (
  <div className="about">
    <div className="about__container">
      <img className="about__image" src={chefImage} alt="" />
      <h1 className="about__title">À Propos de nous</h1>
      <p> Amanger.com est un site qui vous permet, seul ou à plusieurs, de planifier vos repas
        pour la semaine. Il faut simplement dans votre espace dédié créer un groupe et puis,
        inviter si vous voulez des membres de votre famille, des collègues, ou des amis.
      </p>
      <p>
        Ajouter des recettes à son calendrier dédié. Puis, avant de faire ses courses,
        avec une clique : sortez votre liste de course.
      </p>
      <p>
        Désolé, mais nous n’avons pas encore trouvé avec notre App
        le moyen de faire les courses pour vous !
      </p>
      <p>L’équipe de amanger.com.
      </p>
    </div>
  </div>

);

export default About;
