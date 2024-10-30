import { useSelector } from "react-redux";
import copyImage from "../../assets/images/copyEmail.svg";
import copyImageDark from "../../assets/images/copyEmailDark.svg";

const Email = () => {
  const theme = useSelector((state) => state.mode);
  function copyClipboard() {
    const text = "sokolovski.ea@gmail.com";
    navigator.clipboard.writeText(text);
    document
      .querySelector(".email__copied")
      .classList.add("email__copied--active");
  }
  return (
    <div onClick={copyClipboard} className="email">
      <div className="email__text">
        <div
          className={`email__title ${
            theme.theme === "dark" ? "email__dark-mode" : ""
          }`}
        >
          sokolovski.ea@gmail.com{" "}
          <span
            className="email__copied"
            style={theme.theme === "dark" ? { color: "white" } : undefined}
          >
            {theme.language === "en" ? "copied" : "скопировано"}
          </span>
        </div>
        <img
          src={theme.theme === "dark" ? copyImageDark : copyImage}
          alt="copy email"
          className="email__img"
        />
      </div>

      <button
        className={`email__btn ${
          theme.theme === "dark" ? "email__btn-dark" : ""
        }`}
      >
        {theme.language === "en" ? "Email" : "Почта"}
      </button>
    </div>
  );
};

export default Email;
