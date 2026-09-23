import React from "react";
import "./PartnersSection.css";
import Partner from "./Partner";
import PartnersLogos from "../../data/PartnersLogos";

const partnersLink = [
  {
    id: 1,
    title: "Fastighetsägarna",
    link: "https://www.fastighetsagarna.se/",
    logo: PartnersLogos["fastighetsagarna"], // Matchar filnamnet fastighetsagarna.webp
  },
  {
    id: 2,
    title: "Delagott Förvaltning",
    link: "https://www.delagott.se/",
    logo: PartnersLogos["delagott"], // Matchar delagott.webp
  },
  {
    id: 3,
    title: "HSB",
    link: "https://www.hsb.se/",
    logo: PartnersLogos["hsb"], // Matchar hsb.webp
  },
  {
    id: 4,
    title: "Driftia",
    link: "https://www.driftia.se/",
    logo: PartnersLogos["driftia"], // Matchar driftia.webp
  },
];

const PartnersSection = () => {
  return (
    <div className="partnersSection">
      <h2 className="title h2">Våra samarbetspartners</h2>
      <div className="partnersContainer">
        {partnersLink.map((partner) => (
          <Partner
            key={partner.id}
            title={partner.title}
            link={partner.link}
            logo={partner.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
