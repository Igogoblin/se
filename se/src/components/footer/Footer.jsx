import "./style.css";
import esGray from "../../assets/images/esGray.svg";
import copyright from "../../assets/images/copyright.svg";
import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
// import sunL from "../../assets/images/sunLight.svg";
// import moonD from "../../assets/images/moonDark.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__language">en ru</div>
        <div className="footer__dark-mode">
          <img src={sunD} alt="light theme" />
          <img src={moonL} alt="dark theme" />
        </div>
        <div className="footer__content">
          <img src={esGray} className="footer__img" alt="logo author" />
          <img src={copyright} className="footer__img" alt="copyright" />
          <p className="footer__text">
            Eugene Sokolovski Design & Engineering 2012/2024
          </p>
        </div>
        <div className="footer__coder">Code</div>
      </div>
    </footer>
  );
};

export default Footer;
