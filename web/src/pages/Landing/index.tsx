import React from "react";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css"

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-cointainer">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <a className="study">
            <img src={studyIcon} alt="Estudar" />
            <span>Estudar</span>
          </a>
          <a className="give-classes">
            <img src={giveClassIcon} alt="Dar Aula" />
            <span>Dar aula</span>
          </a>
          <span className="totak-connections">
              Total de 200 conexões já realizadas
              <img src={purpleHeartIcon} alt="Coração Roxo"/>
          </span>
        </div>
        <span></span>
      </div>
    </div>
  );
}

export default Landing;
