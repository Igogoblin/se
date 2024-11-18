import { useSelector } from "react-redux";
import local from "../assets/images/contactsPlace.svg";
import behance from "../assets/images/behance.svg";
import lindendin from "../assets/images/linkedin.svg";
import dribbble from "../assets/images/dribbble.svg";
// import contactLogo from "../assets/images/contactsES_Logo.svg";
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
  return (
    <section className="contacts">
      <div className="contacts__block-one">
        <h1>sokolovski.ea@gmail.com</h1>
      </div>
      <div className="contacts__block-two">
        <div className="contact__title">
          {theme.language === "en" ? CONTACTS.en.title : CONTACTS.ru.title}
        </div>
      </div>
      <div className="contacts__block-three">
        <div className="contact__area">
          <div className="contact__area-title">
            {theme.language === "en" ? CONTACTS.en.req : CONTACTS.ru.req}
          </div>
          <ul className="contact__area-list">
            {theme.language === "en"
              ? CONTACTS.en.reqList.map((item) => (
                  <li className="contact__area-item" key={item}>
                    {item}
                  </li>
                ))
              : CONTACTS.ru.reqList.map((item) => (
                  <li className="contact__area-item" key={item}>
                    {item}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div className="contacts__block-four">
        <div className="contacts__footer">
          <div className="contacts__place">
            <img src={local} alt="place" />
            {theme.language === "en" ? "Minsk, Belarus" : "Минск, Беларусь"}
          </div>
          <button className="contacts__collaborate">
            {theme.language === "en" ? "Collaborate" : "Сотрудничать"}
          </button>
          <div className="contacts__social">
            <img src={behance} alt="behance" className="contacts__behance" />
            <img src={lindendin} alt="linkedin" />
            <img src={dribbble} alt="dribbble" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
