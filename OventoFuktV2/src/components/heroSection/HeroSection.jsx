import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/sections/hero.webp";
import "./HeroSection.css";
import { NavBtnContact, NavBtnTeam } from "../buttons/Buttons";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="infoContainer">
        <h1 className="title h1">Välkomen till Ovento Fukt AB</h1>
        <p>Vi hjälper dig att upptäcka, åtgärda och förebygga fuktskador i din fastighet.</p>

        <div className="btnContainer">
          <NavBtnContact />
          <NavBtnTeam />
        </div>
      </div>

      <div className="imgContainer">
        <img
          src={HeroImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
