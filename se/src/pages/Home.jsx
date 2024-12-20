import photo from "../assets/images/mainPhoto.png";
import { useSelector } from "react-redux";
import behance from "../assets/images/mainBehance.svg";
import maniUI from "../assets/images/mainUI.svg";
import mainAwards2 from "../assets/images/mainAwards2.svg";
import { useState } from "react";
import mainLogoWhite from "../assets/images/ES_LogoWhite.svg";
import mainLogo from "../assets/images/ES_Logo.svg";

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
const AWARDS = {
  behance: 5,
  maniUI: 4,
  xd: 1,
};
const Home = () => {
  const theme = useSelector((state) => state.mode);
  const [isPage, setPage] = useState(true);

  function showPage() {
    setPage(!isPage);
  }
  return (
    <main
      id={`${theme.theme === "dark" ? "main__dark" : ""}`}
      className={theme.language === "ru" ? "ru__content" : ""}
    >
      <div className="wrapper">
        <div
          className={`main__head ${theme.theme === "dark" ? "text-white" : ""}`}
        >
          <div className="main__header">
            <div className="head-user">
              <img src={photo} alt="author" />
              <div
                className={`head-user__block ${
                  theme.theme === "dark" ? "text-white" : ""
                }`}
              >
                <div className="head-user__block-name">
                  <span className={theme.theme === "dark" ? "text-white" : ""}>
                    3
                  </span>
                  {theme.language === "en" ? HOME.en.name : HOME.ru.name}
                </div>
                <div className="head-user__block-surname">
                  {theme.language === "en"
                    ? HOME.en.firstName
                    : HOME.ru.firstName}
                </div>
              </div>
            </div>

            <div className="head-awards">
              <div className="head-awards__block">
                <div className="be__block">
                  <div className="be__block-header">
                    <img src={behance} alt="behance" />
                    <span
                      className={theme.theme === "dark" ? "text-white" : ""}
                    >
                      {AWARDS.behance}
                    </span>
                  </div>
                  <p className={theme.theme === "dark" ? "text-gray" : ""}>
                    {theme.language === "en" ? (
                      "Behance awards"
                    ) : (
                      <>
                        Behance <span className="awards__ru">призы</span>
                      </>
                    )}
                  </p>
                </div>
                <div className="another__awards">
                  <img
                    src={isPage ? maniUI : mainAwards2}
                    alt={`${isPage ? "ui awards" : "award"}`}
                  />
                  <span>{isPage ? AWARDS.maniUI : AWARDS.xd}</span>
                </div>
                <div className="award__slide">
                  <div
                    className={`point ${isPage ? "point-active" : ""} ${
                      isPage && theme.theme === "dark" ? "bg-white" : "bg-gray"
                    } ${
                      isPage && theme.theme === "dark"
                        ? "bg__btn"
                        : "bg__btn-active"
                    }`}
                  ></div>
                  <div
                    className={`point ${isPage ? "" : "point-active"} ${
                      isPage && theme.theme === "dark" ? "bg-gray" : "bg-white"
                    } ${
                      isPage && theme.theme === "dark"
                        ? "bg__btn-active"
                        : "bg__btn"
                    }`}
                  ></div>
                </div>
                <div className="award__slide-place" onClick={showPage}>
                  <div className="slide-place-left"></div>
                  <div className="slide-place-right"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="main__info">
            <div
              className={`head-profession ${
                theme.language === "ru" ? "head-profession-ru" : ""
              } ${theme.theme === "dark" ? "text-gray" : ""}`}
            >
              {theme.language === "en"
                ? HOME.en.headProfession
                : HOME.ru.headProfession}
            </div>
            <div className="main__info-approach">
              <div className="head-work">
                <span className={theme.theme === "dark" ? "text-gray" : ""}>
                  {theme.language === "en"
                    ? HOME.en.headWork
                    : HOME.ru.headWork}
                </span>
                <span className={theme.theme === "dark" ? "text-white" : ""}>
                  {theme.language === "en"
                    ? HOME.en.headWorkList
                    : HOME.ru.headWorkList}
                </span>
              </div>
              <div className="head-services">
                <span className={theme.theme === "dark" ? "text-gray" : ""}>
                  {theme.language === "en" ? HOME.en.service : HOME.ru.service}
                </span>
                <ul className={theme.theme === "dark" ? "text-white" : ""}>
                  {theme.language === "en"
                    ? HOME.en.servicesList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    : HOME.ru.servicesList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={theme.theme === "dark" ? mainLogoWhite : mainLogo}
        alt="logo"
        className="main__logo"
      />
    </main>
  );
};

export default Home;
