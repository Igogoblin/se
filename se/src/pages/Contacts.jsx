import { useSelector } from "react-redux";
import local from "../assets/images/contactsPlace.svg";
import behance from "../assets/images/behance.svg";
import lindendin from "../assets/images/linkedin.svg";
import dribbble from "../assets/images/dribbble.svg";
import { useState } from "react";
import copyImage from "../assets/images/copyEmail.svg";
import copyImageDark from "../assets/images/copyEmailDark.svg";
import copiedV from "../assets/images/copiedV.svg";
import copiedVDark from "../assets/images/copiedVDark.svg";
import contactLogo from "../assets/images/contactsES_Logo.svg";
const CONTACTS = {
  en: {
    title:
      "The more detailed you are about your problems/goals — the better and faster you will get results",
    req: "In your letter, please describe",
    reqList: [
      "What you want to do and why?",
      "The goals and problems of your business?",
      "What result you expect from working together?",
      "How will you know the job is done well?",
    ],
  },
  ru: {
    title:
      "Чем подробнее вы расскажете о своих проблемах/целях, тем лучше и быстрее вы получите результат",
    req: "В своем письме, пожалуйста, расскажите",
    reqList: [
      "Что вы хотите сделать и почему?",
      "Цели и проблемы вашего бизнеса?",
      "Какого результата вы ожидаете от совместной работы?",
      "Как вы поймете, что работа сделана хорошо?",
    ],
  },
};

const Contacts = () => {
  const theme = useSelector((state) => state.mode);
  const [copied, isCopied] = useState(false);
  function copyClipboard() {
    isCopied(true);
    navigator.clipboard.writeText("sokolovski.ea@gmail.com");
  }
  return (
    <section className="contacts">
      <div className="contacts__block-one">
        <h1
          onClick={copyClipboard}
          className={theme.theme === "dark" ? "contacts__color-white" : ""}
        >
          sokolovski.ea@gmail.com
          <span className="contact__email-copied">
            {copied && (theme.language === "en" ? "copied" : "скопировано")}
          </span>
          <img
            className={`contact__email-image ${copied ? "contact__show" : ""}`}
            src={theme.theme === "light" ? copyImage : copyImageDark}
            alt="copy"
          />
          <img
            className={`contact__email-image ${copied ? "" : "contact__show"}`}
            src={theme.theme === "light" && copied ? copiedV : copiedVDark}
            alt="copied"
          />
        </h1>
      </div>
      <div className="contacts__block-two">
        <div
          className={`contact__title ${
            theme.theme === "dark" ? "dark__text-color" : ""
          }`}
        >
          {theme.language === "en" ? CONTACTS.en.title : CONTACTS.ru.title}
        </div>
      </div>
      <div className="contacts__block-three">
        <div className="contact__area">
          <div
            className={`contact__area-title ${
              theme.theme === "dark" ? "dark__text-color" : ""
            }`}
          >
            {theme.language === "en" ? CONTACTS.en.req : CONTACTS.ru.req}
          </div>
          <ul className="contact__area-list">
            {theme.language === "en"
              ? CONTACTS.en.reqList.map((item) => (
                  <li
                    className={`contact__area-item  ${
                      theme.theme === "dark" ? "contacts__color-white" : ""
                    }`}
                    key={item}
                  >
                    {item}
                  </li>
                ))
              : CONTACTS.ru.reqList.map((item) => (
                  <li
                    className={`contact__area-item  ${
                      theme.theme === "dark" ? "contacts__color-white" : ""
                    }`}
                    key={item}
                  >
                    {item}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className="contacts__block-four">
        <div className="contacts__footer">
          <div
            className={`contacts__place  ${
              theme.theme === "dark" ? "contacts__color-gray" : ""
            }`}
          >
            <img src={local} alt="place" />
            {theme.language === "en" ? "Minsk, Belarus" : "Минск, Беларусь"}
          </div>
          <button
            className={`contacts__collaborate ${
              theme.theme === "dark" ? "dark-btn" : ""
            }`}
          >
            {theme.language === "en" ? "Collaborate" : "Сотрудничать"}
          </button>
          <div className="contacts__social">
            <img src={behance} alt="behance" className="contacts__behance" />
            <img src={lindendin} alt="linkedin" />
            <img src={dribbble} alt="dribbble" />
          </div>
        </div>
      </div>
      <img src={contactLogo} alt="logo author" className="contacts__logo" />
    </section>
  );
};

export default Contacts;
