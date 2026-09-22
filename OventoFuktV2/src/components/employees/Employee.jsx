import React from "react";
import "./Employee.css";

const Employee = ({ image, firstName, sirName, role, mail, phone, isPriority }) => {
  return (
    <div className="employee">
      <div className="imgContainer">
        <img
          className="img"
          src={image}
          alt={`${firstName} ${sirName}`}
          // Sätt fasta attribut för att undvika att sidan "hoppar"
          width="250"
          height="375"
          // Om det är någon av de första bilderna, ladda direkt. Annars "lazy" (lat laddning).
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
        />
      </div>

      <div className="employeeInfo">
        <h3 className="title h3">
          {firstName} {sirName}
        </h3>
        <p className="employeeRole">
          Roll: <span>{role}</span>
        </p>
        <p className="employeeMail">
          E-post: <a href={`mailto:${mail}`}>{mail}</a>
        </p>
        <p className="employeePhone">
          Telefon: <a href={`tel:${phone}`}>{phone}</a>
        </p>
      </div>
    </div>
  );
};

export default Employee;
