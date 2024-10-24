import copyImage from "../../assets/images/copyEmail.svg";

const Email = () => {
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
        <div className="email__title">
          sokolovski.ea@gmail.com <span className="email__copied">copied</span>
        </div>
        <img src={copyImage} alt="copy email" className="email__img" />
      </div>

      <button className="email__btn">Email</button>
    </div>
  );
};

export default Email;
