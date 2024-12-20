import { useSelector } from "react-redux";
import copyImage from "../../assets/images/copyEmail.svg";
import copyImageDark from "../../assets/images/copyEmailDark.svg";
import copiedV from "../../assets/images/copiedV.svg";
import copiedVDark from "../../assets/images/copiedVDark.svg";
import copyHoverWhite from "../../assets/images/copyHoverWhite.svg";
// import copyHoverDark from "../../assets/images/copyHoverBlack.svg";
import copyHoverDark from "../../assets/images/forCopyBlackQuards.svg";
import { useState } from "react";

const Email = () => {
  const theme = useSelector((state) => state.mode);
  const [copied, isCopied] = useState(false);
  const [hover, isHover] = useState(false);
  let imageCopy = copied ? copiedV : copyImage;
  let imageCopyDark = copied ? copiedVDark : copyImageDark;
  // setHover(theme.theme === "dark"? );
  function copyClipboard() {
    isCopied(true);
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
          // onMouseMove={setHover}
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
          src={
            hover
              ? theme.theme === "dark"
                ? copyHoverWhite
                : copyHoverDark
              : theme.theme === "dark"
              ? imageCopyDark
              : imageCopy
          }
          alt="copy email"
          onMouseEnter={() => isHover(true)}
          onMouseLeave={() => isHover(false)}
          className="email__img"
        />
      </div>

      <button
        className={`email__btn ${
          theme.theme === "dark" ? "email__btn-dark" : ""
        }`}
      >
        Email
        {/* {theme.language === "en" ? "Email" : "Почта"} */}
      </button>
    </div>
  );
};

export default Email;
