import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import Email from "../components/email/Email";
import BurgerMenu from "../components/burger/BurgerMenu";
import esL from "../assets/images/ES_Logo.svg";
import esD from "../assets/images/ES_LogoDark.svg";
import { useSelector } from "react-redux";

const Layout = () => {
  const activeLink = "nav__link nav__link--active";
  const normalLink = "nav__link";
  // const forDarkMode = "header__dark-mode";
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div className="header">
      <div className="header__logo-container">
        <NavLink to={"/"} className="header__logo">
          <img src={theme === "light" ? esL : esD} alt="logo" />
        </NavLink>
      </div>
      <div className="header__container">
        <nav>
          <ul className={`nav ${theme === "dark" ? " header__dark-mode" : ""}`}>
            <li className="nav__item">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/approach"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Approach
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/contacts"}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <Email />
        <BurgerMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
