import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/themeSlice";
import esGray from "../../assets/images/esGray.svg";
import copyright from "../../assets/images/copyright.svg";
import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
import sunL from "../../assets/images/sunLight.svg";
import moonD from "../../assets/images/moonDark.svg";
const Footer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const setLight = () => {
    dispatch(setTheme("light"));
  };
  const setDark = () => {
    dispatch(setTheme("dark"));
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__buttons">
          <div className="footer__language">En Ru</div>
          <div className="footer__dark-mode">
            <img
              onClick={setLight}
              src={theme === "light" ? sunD : sunL}
              alt="light theme"
              className={theme === "dark" ? "footer__active" : ""}
            />
            <img
              onClick={setDark}
              src={theme === "dark" ? moonD : moonL}
              alt="dark theme"
              className={theme === "light" ? "footer__active" : ""}
            />
          </div>
        </div>

        <div className="footer__content">
          <img src={esGray} className="footer__img" alt="logo author" />
          <img src={copyright} className="footer__img" alt="copyright" />
          <p className="footer__text">
            <span>Eugene Sokolovski </span> <span>Design & Engineering</span>{" "}
            2012/2024
          </p>
        </div>
      </div>
      <div className="footer__coder">Code</div>
    </footer>
  );
};

export default Footer;
