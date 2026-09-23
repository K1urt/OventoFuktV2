import React from "react";
import TeamPicture from "../../assets/sections/oventoFuktTeamet.webp";
import PartnersSection from "../../components/partnersSection/PartnersSection";
import "./About.css";

const About = () => {
  return (
    <div className="about page">
      <div className="girdLayout">
        <div className="position1">
          <h1 className="title h2">Från anställda till ägare – med fokus på det personliga engagemanget</h1>
          <p>
            <span>Vår resa började i det välrenommerade bolaget Ovento AB,</span> där vi arbetade nära varandra och våra
            kunder under många år. När Ovento AB såldes till en större koncern följde vi med på tåget, men vi insåg
            snabbt att något viktigt gick förlorat på vägen.
          </p>

          <p>
            Den nära kontakten, den snabba servicen och den familjära känslan - allt det där som vi och våra kunder
            uppskattade - försvann i det stora bolagets strukturer.
          </p>

          <p>
            Vi kände starkt att vi ville göra om och göra rätt. Därför bestämde vi oss,{" "}
            <span>fyra tidigare kollegor och numera delägare</span>, för att starta <span>Ovento Fukt AB</span>. Vi
            ville gå tillbaka till rötterna och bygga ett bolag där kunden alltid är i centrum, och där en
            överenskommelse fortfarande betyder något.
          </p>
        </div>

        <div className="position2">
          <h2 className="title h3">Vilka är vi idag?</h2>
          <p>
            Idag har vi vuxit och <span>är stolta över att vara 8 medarbetare</span> som delar samma vision. Genom att
            kombinera det mindre bolagets flexibilitet och personliga service med vår mångåriga expertis, kan vi erbjuda
            trygga och effektiva lösningar för både företag och privatpersoner.
          </p>
        </div>

        <div className="imgContainer position3">
          <img
            src={TeamPicture}
            alt="Personalen på Ovento Fukt i kontorsmiljö."
          />
        </div>
      </div>

      <PartnersSection />
    </div>
  );
};

export default About;
