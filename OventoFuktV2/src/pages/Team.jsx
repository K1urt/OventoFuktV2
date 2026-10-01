import React from "react";
import Employees from "../components/employees/Employees";
import SEO from "../components/SEO";
const Team = () => {
  return (
    <main className="page">
      <SEO
        title="Vårt team - Ovento Fukt AB"
        description="Möt teamet bakom Ovento Fukt AB. Våra fuktspecialister hjälper dig från fuktmätning och utredning till avfuktning och färdig åtgärd."
        path="/team"
      />
      <Employees />
    </main>
  );
};

export default Team;
