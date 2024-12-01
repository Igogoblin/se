import photo from "../assets/images/mainPhoto.png";
import { useSelector } from "react-redux";

const HOME = {
  en: {
    name: "ugene",
    firstName: "Sokolovski",
    headProfession: "Design & Engineering",
    headWork: "What I create",
    headWorkList: [
      "Digital products that solve problems and help achieve goals",
    ],
    service: "Services",

    servicesList: [
      "Product management",
      "Product design",
      "UX/UI design",
      "Branding",
    ],
  },
  ru: {
    name: "вгений",
    firstName: "Соколовский",
    headProfession: "Дизайн и проектирование",
    headWork: "Что я делаю",
    headWorkList: [
      "Цифровые продукты, которые решают проблемы и помогают достигать целей",
    ],
    service: "Услуги",
    servicesList: [
      "Продуктовый менеджмент",
      "Продуктовый дизайн",
      "UX/UI дизайн",
      "Брендинг",
    ],
  },
};
const Home = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <main>
      <div className="wrapper">
        <div
          className={`main__head ${
            theme.theme === "dark" ? "main__head-dark" : ""
          }`}
        >
          <div className="head-user">
            <img src={photo} alt="author" />
            <div className="head-user__block">
              <p>
                <span>3</span>
                {theme.language === "en" ? HOME.en.name : HOME.ru.name}
              </p>
              <p>
                {theme.language === "en"
                  ? HOME.en.firstName
                  : HOME.ru.firstName}
              </p>
            </div>
          </div>
          <div className="head-profession">
            {theme.language === "en"
              ? HOME.en.headProfession
              : HOME.ru.headProfession}
          </div>
          <div className="head-work">
            <span>
              {theme.language === "en" ? HOME.en.headWork : HOME.ru.headWork}
            </span>
            <span>
              {theme.language === "en"
                ? HOME.en.headWorkList
                : HOME.ru.headWorkList}
            </span>
          </div>
          <div className="head-services">
            <span>
              {theme.language === "en" ? HOME.en.service : HOME.ru.service}
            </span>
            <ul>
              {theme.language === "en"
                ? HOME.en.servicesList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                : HOME.ru.servicesList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
            </ul>
          </div>
          <div className="head-awards">
            <div className="head-awards__block"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
