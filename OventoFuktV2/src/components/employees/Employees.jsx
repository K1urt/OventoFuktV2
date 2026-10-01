/**
 * Employees
 *
 * Vad den gör:
 * Visar alla medarbetare på teamsidan (/team). Läser data från
 * data/employeesData.json och skapar ett <Employee />-kort per person.
 * Innehåller sidans <h1>.
 *
 * Hur bilderna kopplas:
 * Varje person har ett imgId i JSON-filen. Om imgId är "1243" hämtas
 * bilden EmployeesImages.PANA1243. Ny medarbetare = ny post i JSON
 * + ny bild i EmployeesImages.jsx.
 *
 * Prestanda:
 * - De 4 första korten får isPriority (laddas direkt, hög prioritet).
 *   Övriga laddas lazy. Justera siffran om layouten visar fler per rad.
 * - Bildstandard: ca 500-600 px bred, .webp, under ca 80 KB.
 */
import Employee from "./Employee";
import EmployeesData from "../../data/employeesData.json";
import EmployeesImages from "../../data/EmployeesImages.jsx";

import "./Employees.css";

const Employees = () => {
  return (
    <div className="employees">
      <h1 className="title h1">Vi som jobbar på Ovento Fukt</h1>

      <div className="layout">
        {EmployeesData.map((employee, index) => (
          <Employee
            key={employee.id}
            isPriority={index < 4}
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
