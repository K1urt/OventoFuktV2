import React from "react";
import Service from "./Service";
import ServicesData from "../../data/companyServices.json";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="infoContainer">
        <h2 className="title h2">Våra tjänster</h2>
        <p>
          Vi är specialister på allt som rör fukt och inomhusmiljö. Du kan vända dig till oss för professionell hjälp
          med:
        </p>
      </div>

      {ServicesData.services.map((item) => (
        <Service
          key={item.id}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default Services;
