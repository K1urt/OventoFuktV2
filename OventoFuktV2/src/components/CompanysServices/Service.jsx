import React from "react";

const Service = ({ title, text }) => {
  return (
    <div className="serviceContainer">
      <h3 className="title h3">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Service;
