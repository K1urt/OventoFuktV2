import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

export const NavBtnContact = () => {
  return (
    <Link
      to="/kontakt"
      className="navLinkBtn primary">
      Kontakta oss!
    </Link>
  );
};

export const NavBtnTeam = () => {
  return (
    <Link
      to="/team"
      className="navLinkBtn secondary">
      Vårt Team
    </Link>
  );
};
