/**
 * Employee
 *
 * Vad den gör:
 * Visar ett enskilt medarbetarkort: bild, namn, roll, e-post och telefon.
 * Används av <Employees /> (en per person i data/employeesData.json).
 *
 * Props:
 * - image:      Bildens URL (hämtas från EmployeesImages.jsx)
 * - firstName:  Förnamn
 * - sirName:    Efternamn
 * - role:       Titel/roll, t.ex. "Fuktutredare"
 * - mail:       (valfri) E-postadress (blir en mailto:-länk). Raden döljs
 *               om värdet saknas.
 * - phone:      (valfri) Telefonnummer (visas som det står, men länken
 *               rensas från mellanslag och bindestreck så att tel: fungerar).
 *               Raden döljs om värdet saknas.
 * - isPriority: (valfri) true för korten som syns direkt när sidan
 *               laddas. Skickas från <Employees /> (index < 3).
 *
 * Prestanda:
 * - width/height är fasta så att sidan inte hoppar när bilden laddas (CLS).
 *   Måste ha samma proportioner som bildfilerna (2:3).
 * - isPriority = true  → loading="eager" + fetchPriority="high"
 *   isPriority = false → loading="lazy" (laddas först när man scrollar dit)
 * - Bildstandard: ca 500-600 px bred, .webp, under ca 80 KB.
 *
 * Att tänka på:
 * - Glöm inte att <Employees /> skickar in isPriority, annars blir alla
 *   bilder lazy, även de som syns direkt.
 * - Saknar en medarbetare telefon eller e-post i JSON-filen visas helt
 *   enkelt inte den raden (sidan kraschar inte).
 */

import "./Employee.css";

const Employee = ({ image, firstName, sirName, role, mail, phone, isPriority }) => {
  return (
    <div className="employee">
      <div className="imgContainer">
        <img
          className="img"
          src={image}
          alt={`${firstName} ${sirName}, ${role}`}
          // Fasta mått för att undvika att sidan "hoppar" (CLS)
          width="250"
          height="375"
          // De första bilderna laddas direkt, resten "lazy"
          loading={isPriority ? "eager" : "lazy"}
          fetchPriority={isPriority ? "high" : "auto"}
          decoding="async"
        />
      </div>

      <div className="employeeInfo">
        <h2 className="title h3">
          {firstName} {sirName}
        </h2>
        <p className="employeeRole">
          Roll: <span>{role}</span>
        </p>

        {/* Visas bara om e-post finns */}
        {mail && (
          <p className="employeeMail">
            E-post: <a href={`mailto:${mail}`}>{mail}</a>
          </p>
        )}

        {/* Visas bara om telefon finns */}
        {phone && (
          <p className="employeePhone">
            Telefon: <a href={`tel:${phone.replace(/[\s-]/g, "")}`}>{phone}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Employee;
