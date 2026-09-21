import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import DropDown from "../dropDown/DropDown";
import Logo from "../../assets/logos/logoMob.svg";
import LogoLg from "../../assets/logos/logoLg.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="/">
          <img
            className="logo logoMob"
            src={Logo}
            alt="Ovento Fukt logo"
          />
          <img
            className="logo logoLg"
            src={LogoLg}
            alt="Ovento Fukt logo"
          />
        </Link>
      </div>

      <img
        src="../../"
        alt=""
      />
      <DropDown />
      <ul className="navbarLinks">
        <li>
          <Link to="/">Hem</Link>
        </li>
        <li>
          <Link to="/omOss">Om oss</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li>
          <Link to="/team">Vårt team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
