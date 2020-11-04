import React from 'react';

import './styles.scss';

import stuart from './Stuart.png';
import clement from './Clément.png';
import virgil from './Virgil1.png';

const About = () => (
  <div className="about">
    <div className="about__container">
      <h1 className="about__title">À Propos de nous</h1>
      <p className="about__text"> Amanger.com est un site qui vous permet, seul ou à plusieurs, de planifier vos repas
        pour la semaine. Il faut simplement dans votre espace dédié créer un groupe et puis,
        inviter si vous voulez des membres de votre famille, des collègues, ou des amis.
      </p>
      <p className="about__text">
        Ajouter des recettes à son calendrier dédié. Puis, avant de faire ses courses,
        avec un clique : générez votre liste de course.
      </p>
      <p className="about__text1">
        Désolé, mais nous n’avons pas encore trouvé avec notre App
        le moyen de faire les courses pour vous !
      </p>
      <p>L’équipe de aManger.com.
      </p>
      <div className="team__member__container">
        <div className="team__member">
          <img className="team__picture" src={stuart} alt="member__stuart" />
          <p className="team__desc"> Stuart Rapoport</p>
          <p className="team__desc1"> Product owner - Lead dev back</p>
        </div>
        <div className="team__member">
          <img className="team__picture" src={clement} alt="member__clément" />
          <p className="team__desc"> Clément Herpe</p>
          <p className="team__desc1"> Scrum master - Dev front</p>
        </div>
        <div className="team__member">
          <img className="team__picture" src={virgil} alt="member__virgil" />
          <p className="team__desc"> Virgil Kwiatkowski</p>
          <p className="team__desc1"> Lead dev front</p>
        </div>
      </div>
    </div>
  </div>

);

export default About;
