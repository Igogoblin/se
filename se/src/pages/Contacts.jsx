import { useSelector } from "react-redux";

const CONTACTS = {
  en: {
    title:
      "Чем подробнее вы расскажете о своих проблемах/целях, тем лучше и быстрее вы получите результат",
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
      "The more detailed you are about your problems/goals — the better and faster you will get results",
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
    <section className="page contacts">
      <div className="contacts__container">
        <h1>sokolovski.ea@gmail.com</h1>
        <div className="contact__title">
          {theme.language === "en" ? CONTACTS.en.title : CONTACTS.ru.title}
        </div>
      </div>
      <div className="contact__area">
        <div className="contact__area-title">
          {theme.language === "en" ? CONTACTS.en.req : CONTACTS.ru.req}
        </div>
        <ul className="contact__area-list">
          {CONTACTS.reqList.map((item) => (
            <li className="contact__area-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="contacts__footer">
        <div className="contacts__place">
          <img src="../assets/images/contactsPlace.svg" alt="place" />
          {theme.language === "en" ? "Minsk, Belarus" : "Минск, Беларусь"}
        </div>
        <button>
          {theme.language === "en" ? "Collaborate" : "Сотрудничать"}
        </button>
        <div className="constacts__social"></div>
      </div>
    </section>
  );
};

export default Contacts;
