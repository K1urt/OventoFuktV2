import React from "react";

const Partner = ({ title, link, logo }) => {
  return (
    <div className="partnerLogo">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        {logo && (
          <img
            src={logo}
            alt={`${title} logotyp`}
          />
        )}
      </a>
    </div>
  );
};

export default Partner;
