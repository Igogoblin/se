import sunD from "../../assets/images/sunDark.svg";
import moonL from "../../assets/images/moonLight.svg";
import sunL from "../../assets/images/sunLight.svg";
import moonD from "../../assets/images/moonDark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/themeSlice";
import "./style.css";

const Mode = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const setLight = () => {
    dispatch(setTheme("light"));
  };
  const setDark = () => {
    dispatch(setTheme("dark"));
  };
  return (
    <>
      <div className="mode__language">En Ru</div>
      <div className="mode__container">
        <img
          onClick={setLight}
          src={theme === "light" ? sunD : sunL}
          alt="light theme"
          className={theme === "dark" ? "mode__active" : ""}
        />
        <img
          onClick={setDark}
          src={theme === "dark" ? moonD : moonL}
          alt="dark theme"
          className={theme === "light" ? "mode__active" : ""}
        />
      </div>
    </>
  );
};

export default Mode;
