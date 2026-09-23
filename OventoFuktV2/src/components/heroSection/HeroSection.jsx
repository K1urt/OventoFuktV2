import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/sections/hero.webp"
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="infoContainer">
        <h1 className="title h1">Välkomen till Ovento Fukt AB</h1>
        <p>Vi hjälper dig att upptäcka, åtgärda och förebygga fuktskador i din fastighet.</p>

        <div className="btnContainer">
          <Link
            to="/contact"
            className="navLinkBtn primary">
            Kontakta oss!
          </Link>

          <Link
            to="/team"
            className="navLinkBtn secondary">
            Vårt Team
          </Link>
        </div>
      </div>

      <div className="imgContainer">
         <img src={HeroImg}alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
