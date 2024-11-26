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
  const activeLinkDark = "nav__link nav__link--dark";
  const theme = useSelector((state) => state.mode);

  return (
    <div
      className={`header ${
        theme.theme === "dark" ? "header__dark-border" : ""
      }`}
    >
      <div className="header__logo-container">
        <NavLink to={"/"} className="header__logo">
          <img src={theme.theme === "light" ? esL : esD} alt="logo" />
        </NavLink>
      </div>
      <div className="header__container">
        <nav>
          <ul
            className={`nav ${
              theme.theme === "dark" ? " header__dark-mode" : ""
            } ${theme.language === "ru" ? "padding-top footer-text-gap" : ""}`}
          >
            <li className="nav__item">
              <NavLink
                to={"/about"}
                className={({ isActive }) => {
                  const baseClass = isActive
                    ? theme.theme === "dark"
                      ? activeLinkDark
                      : activeLink
                    : normalLink;
                  return theme.theme === "dark"
                    ? `${baseClass} dark-theme-hover`
                    : baseClass;
                }}
              >
                {theme.language === "en" ? "About" : "О себе"}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/approach"}
                className={({ isActive }) => {
                  const baseClass = isActive
                    ? theme.theme === "dark"
                      ? activeLinkDark
                      : activeLink
                    : normalLink;
                  return theme.theme === "dark"
                    ? `${baseClass} dark-theme-hover`
                    : baseClass;
                }}
              >
                {theme.language === "en" ? "Approach" : "Подход"}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/contacts"}
                className={({ isActive }) => {
                  const baseClass = isActive
                    ? theme.theme === "dark"
                      ? activeLinkDark
                      : activeLink
                    : normalLink;
                  return theme.theme === "dark"
                    ? `${baseClass} dark-theme-hover`
                    : baseClass;
                }}
              >
                {theme.language === "en" ? "Contacts" : "Контакты"}
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
