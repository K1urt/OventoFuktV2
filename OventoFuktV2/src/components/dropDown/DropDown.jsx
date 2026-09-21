import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DropDown.css";
import MenuIcon from "../../assets/icons/menu.svg";
import MenuCloseIcon from "../../assets/icons/menuClose.svg";

const DropDown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropBtn"
        onClick={toggleDropdown}>
        <img
          src={MenuIcon}
          alt="Menu icon"
          className="icon"
        />
      </button>

      <div className={`dropdownContent ${isOpen ? "open" : ""}`}>
        <button
          className="dropBtn open"
          onClick={toggleDropdown}>
          <img
            src={MenuCloseIcon}
            alt="Menu close icon"
            className="icon"
          />
        </button>

        <ul className="dropdownLinks">
          <li>
            <Link
              to="/"
              onClick={closeDropdown}>
               Hem
            </Link>
          </li>

          <li>
            <Link
              to="/omOss"
              onClick={closeDropdown}>
              Om oss
            </Link>
          </li>

          <li>
            <Link
              to="/kontakt"
              onClick={closeDropdown}>
              Kontakt
            </Link>
          </li>

          <li>
            <Link
              to="/team"
              onClick={closeDropdown}>
              Vårt Team
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
