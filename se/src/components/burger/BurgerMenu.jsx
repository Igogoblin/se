import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Mode from "../mode/Mode.jsx";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <div className="burger-menu">
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`bar ${isOpen ? "open" : ""} ${
            theme === "dark" ? "burger-icon-dark" : ""
          }`}
        ></div>
        <div
          className={`bar ${isOpen ? "open" : ""} ${
            theme === "dark" ? "burger-icon-dark" : ""
          }`}
        ></div>
        <div
          className={`bar ${isOpen ? "open" : ""} ${
            theme === "dark" ? "burger-icon-dark" : ""
          }`}
        ></div>
      </div>
      <nav
        className={`menu ${isOpen ? "open" : ""} ${
          theme === "dark" ? "menu-dark" : ""
        }`}
      >
        <ul>
          <li>
            <NavLink to={"/about"} onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/approach"} onClick={handleLinkClick}>
              Approach
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"} onClick={handleLinkClick}>
              Contacts
            </NavLink>
          </li>
        </ul>
        <div className="burger-menu__mode">
          <Mode />
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
