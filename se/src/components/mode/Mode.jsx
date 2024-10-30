import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
import sunL from "../../assets/images/sunLight.svg";
import moonD from "../../assets/images/moonDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setLanguage } from "../../store/modeSlice";
import "./style.css";
import { useState } from "react";

const Mode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mode);
  const [isMode, setIsMode] = useState(true);
  console.log(theme);
  const setLight = () => {
    dispatch(setTheme("light"));
  };
  const setDark = () => {
    dispatch(setTheme("dark"));
  };
  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    isMode ? setIsMode(false) : setIsMode(true);
  };
  return (
    <>
      <div
        className="mode__language"
        style={
          theme.theme === "dark"
            ? {
                backgroundColor: "rgba(190, 192, 194, 0.29)",
                color: "rgba(235, 235, 245, 0.6)",
              }
            : {
                backgroundColor: "rgba(118, 118, 128, 0.12);",
                color: "rgba(60, 60, 67, 0.6)",
              }
        }
      >
        <div
          className={`language ${isMode && theme.theme === "light" ? "enL" : ""}
            ${isMode && theme.theme === "dark" ? "ruL" : ""}`}
          onClick={() => changeLanguage("en")}
        >
          En
        </div>
        <div
          className={`language ${isMode ? "" : "enL"}
            ${!isMode && theme.theme === "dark" ? "ruL" : ""}
            `}
          onClick={() => changeLanguage("ru")}
        >
          Ru
        </div>
        <div
          className={`language__btn ${isMode ? "" : "language__btn-active"}`}
          style={
            theme.theme === "dark"
              ? { backgroundColor: "white" }
              : { backgroundColor: "black" }
          }
        ></div>
      </div>
      <div className="mode__container">
        <img
          onClick={setLight}
          src={theme.theme === "light" ? sunD : sunL}
          alt="light theme"
          className={theme.theme === "dark" ? "mode__active" : ""}
        />
        <img
          onClick={setDark}
          src={theme.theme === "dark" ? moonD : moonL}
          alt="dark theme"
          className={theme.theme === "light" ? "mode__active" : ""}
        />
      </div>
    </>
  );
};

export default Mode;
