import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">Oventofukt</Link>
      </div>

      <ul className="navbarLinks">
        <li>
          <Link to="/"></Link>
        </li>
        <li>
          <Link to="/omOss"></Link>
        </li>
        <li>
          <Link to="/team"></Link>
        </li>
        <li>
          <Link to="/kontakt"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
