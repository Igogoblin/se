import { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
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
      </nav>
    </div>
  );
};

export default BurgerMenu;
