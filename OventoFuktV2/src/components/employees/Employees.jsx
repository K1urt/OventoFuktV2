import React from "react";
import Employee from "./Employee";
import EmployeesData from "../../data/employeesData.json";
import EmployeesImages from "../../data/EmployeesImages.jsx";

import "./Employees.css";

const Employees = () => {
  return (
    <div className="employees">
      <h1 className="title h1">Vi som jobbar på Ovento Fukt</h1>

      <div className="layout">
        {EmployeesData.map((employee) => (
          <Employee
            className="employee"
            key={employee.id}
            firstName={employee.firstName}
            sirName={employee.sirName}
            role={employee.role}
            mail={employee.mail}
            phone={employee.phone}
            // Kopplar ihop imgId från JSON med bildobjektet.
            // Om imgId är "1243" letar den upp PANA1243 i ditt objekt.
            image={EmployeesImages[`PANA${employee.imgId}`]}
          />
        ))}
      </div>
    </div>
  );
};

export default Employees;
