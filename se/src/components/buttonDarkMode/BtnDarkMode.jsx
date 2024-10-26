import "./style.css";
// import sunL from "../../assets/images/sunLight.svg";
import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
// import moonD from "../../assets/images/moonDark.svg";
const BtnDarkMode = () => {
  return (
    <div className="btn-dark-mode">
      <div className="btn-dark-mode__sun">
        <img src={sunD} alt="theme light" />
      </div>
      <div className="btn-dark-mode__moon">
        <img src={moonL} alt="theme dark" />
      </div>
    </div>
  );
};

export default BtnDarkMode;
