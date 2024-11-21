import "./style.css";
import { useSelector } from "react-redux";
import esGray from "../../assets/images/esGray.svg";
import copyright from "../../assets/images/copyright.svg";
import Mode from "../mode/Mode";
import copyrightDark from "../../assets/images/copyrightDark.svg";
import esDark from "../../assets/images/esDark.svg";

const Footer = () => {
  const theme = useSelector((state) => state.mode);

  return (
    <footer
      className={`footer ${theme.theme === "dark" ? "footer__dark-mode" : ""}`}
    >
      <div className="footer__container">
        <div className="footer__buttons">
          <Mode />
        </div>

        <div
          className={`footer__content ${
            theme.language === "ru" ? "footer__content-ru" : ""
          }`}
        >
          <img
            src={theme.theme === "dark" ? esDark : esGray}
            className={`footer__img footer__content-logo ${
              theme.theme === "dark" ? "footer__img-opacity" : ""
            }`}
            alt="logo author"
          />
          <div
            className={`footer__content-text ${
              theme.language === "ru" ? "footer__content-text-ru" : ""
            }`}
          >
            <img
              src={theme.theme === "dark" ? copyrightDark : copyright}
              className={`footer__img footer__copyright" ${
                theme.theme === "dark" ? "footer__img-opacity" : ""
              }`}
              alt="copyright"
            />
            <p
              className={`footer__text ${
                theme.theme === "dark"
                  ? "footer__content-dark footer__text-opacity"
                  : ""
              } ${theme.language === "ru" ? "footer__text-ru" : ""}`}
            >
              <span className="footer__text-name">
                {theme.language === "en"
                  ? "Eugene Sokolovski"
                  : "Евгений Соколовский"}{" "}
              </span>
              <span className="footer__text-job">
                {theme.language === "en"
                  ? "Design & Engineering"
                  : "Дизайн и проектирование"}
              </span>{" "}
              2012/2024
            </p>
          </div>
        </div>
      </div>
      <div
        className={`footer__coder ${theme.theme === "dark" ? "coder" : ""} ${
          theme.language === "ru" ? "text__ru-footer" : ""
        }`}
      >
        <span>{theme.language === "en" ? "Code" : "Код"}</span>
        <span>{theme.language === "en" ? "Skavysh Ihar" : "Скавыш Игорь"}</span>
      </div>
    </footer>
  );
};

export default Footer;
