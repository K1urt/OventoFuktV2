import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../pages/Contact";
import Employees from "../../pages/Employees";
import HeroImg from "../../assets/hero.jpg"
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
            to="/employees"
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
