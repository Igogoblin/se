import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
import sunL from "../../assets/images/sunLight.svg";
import moonD from "../../assets/images/moonDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, setLanguage } from "../../store/modeSlice";
import "./style.css";
import { useEffect, useState } from "react";

const Mode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mode);
  const [isMode, setIsMode] = useState(true);

  // const setLight = () => {
  //   dispatch(setTheme("light"));
  // };
  // const setDark = () => {
  //   dispatch(setTheme("dark"));
  // };
  const changeTheme = (theme) => {
    dispatch(setTheme(theme));
    // isMode ? setIsMode(false) : setIsMode(true);
  };
  const changeLanguage = (lang) => {
    dispatch(setLanguage(lang));
    isMode ? setIsMode(false) : setIsMode(true);
  };
  useEffect(() => {
    if (theme.theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div
        className={`mode__language ${
          theme.theme === "dark" ? "mode__language-dark" : ""
        } ${theme.language === "ru" ? "mode__language-ru" : ""}`}
        onClick={() => changeLanguage(isMode ? "ru" : "en")}
      >
        <div
          className={`language ${isMode && theme.theme === "light" ? "enL" : ""}
            ${isMode && theme.theme === "dark" ? "ruL" : ""}`}
          // onClick={!isMode ? () => changeLanguage("en") : undefined}
        >
          En
        </div>
        <div
          className={`language ${isMode ? "" : "enL"}
            ${!isMode && theme.theme === "dark" ? "ruL" : ""}
            `}
          // onClick={isMode ? () => changeLanguage("ru") : undefined}
        >
          Ru
        </div>
        <div
          className={`language__btn ${isMode ? "" : "language__btn-active"} ${
            theme.theme === "dark" ? "language__btn-dark" : ""
          }`}
        ></div>
      </div>
      <div
        className="mode__container"
        onClick={() => changeTheme(theme.theme === "light" ? "dark" : "light")}
      >
        <img
          // onClick={setLight}
          src={theme.theme === "light" ? sunD : sunL}
          alt="light theme"
          // className={theme.theme === "dark" ? "mode__active" : ""}
        />
        <img
          // onClick={setDark}
          src={theme.theme === "dark" ? moonD : moonL}
          alt="dark theme"
          // className={theme.theme === "light" ? "mode__active" : ""}
        />
      </div>
    </>
  );
};

export default Mode;
