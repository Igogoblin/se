import "./style.css";
import { useSelector } from "react-redux";
import esGray from "../../assets/images/esGray.svg";
import copyright from "../../assets/images/copyright.svg";
import Mode from "../mode/Mode";
import { useEffect } from "react";
import copyrightDark from "../../assets/images/copyrightDark.svg";
import esDark from "../../assets/images/esDark.svg";
// import sunD from "../../assets/images/sunDark.svg";
// import moonL from "../../assets/images/moonLight.svg";
// import sunL from "../../assets/images/sunLight.svg";
// import moonD from "../../assets/images/moonDark.svg";
const Footer = () => {
  const theme = useSelector((state) => state.mode.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__buttons">
          <Mode />
        </div>

        <div className="footer__content">
          <img
            src={theme === "dark" ? esDark : esGray}
            className="footer__img"
            alt="logo author"
            style={theme === "dark" ? { opacity: 0.6 } : undefined}
          />
          <img
            src={theme === "dark" ? copyrightDark : copyright}
            className="footer__img"
            alt="copyright"
            style={theme === "dark" ? { opacity: 0.6 } : undefined}
          />
          <p
            className={`footer__text ${
              theme === "dark" ? "footer__content-dark" : ""
            }`}
            style={theme === "dark" ? { opacity: 0.6 } : undefined}
          >
            <span className="footer__text-name">Eugene Sokolovski </span>{" "}
            <span className="footer__text-job">Design & Engineering</span>{" "}
            2012/2024
          </p>
        </div>
      </div>
      <div className="footer__coder">Code</div>
    </footer>
  );
};

export default Footer;
