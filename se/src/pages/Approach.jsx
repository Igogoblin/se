import { useSelector } from "react-redux";

const APPROACH = {
  en: {
    title: "Philosophy",
    titleList: [
      "Good design is useful design.",
      "Design is not about decoration and artistic impulse/inspiration (although there is a place for that), but about solving problems and achieving goals. ",
      "Design is the process of creating something that will serve a purpose, or the result of work that helps achieve a goal.",
      "Ideal design is the complete absence of design and getting what you want without side effects or operations.",
      "The beauty of a design is determined by its utility: something that is qualitatively and rationally made, and solves a problem as efficiently as possible is beautiful in itself.",
      "Any element must be created for something and be useful.",
      "Layouts and graphic realization of the solution are the tool, the result of the work that will help achieve the goals.",
      "Design is not about expression and self-expression, it is about achieving goals and solving problems (it is closer to engineering than to art; although goals and circumstances are different); in any case, the designer is less about inspiration and more about analysis and a rational path to the goal.",
      "The more information is obtained from the customer, the better the result of the work will be.",
    ],
    rule: "About the customer's role in the process",
    ruleText: [
      "The client/customer is as much a participant in the product creation process as the designer.",
      "The client provides the designer with information: tells him about his goals, problems, tasks, how the business is organized and why it is the way it is.",
      "Providing all the information requested by the designer and answering all the questions is extremely important, because it directly affects what will be done in the end.",
      "A designer is a person with certain skills and a certain mindset - he helps to achieve the desired result by analyzing the business model, market and users of the product.",
      "The designer is not clairvoyant and does not know how the business works or what goals the customer sets for himself. Therefore, immersion in the tasks, goals and problems of the customer is very important for quality results.",
      "A huge role is played by communication and communication between the parties, to fully understand what the customer wants. This is essential in order to do exactly what is needed.",
    ],
  },
  ru: {
    title: "Философия",
    titleList: [
      "Хороший дизайн — это полезный дизайн.",
      "Дизайн — это не украшательство и художественный порыв (хотя и этому есть место), а решение проблем и достижение целей. ",
      "Дизайн — это процесс создания чего-то, что будет служить какой-то цели, или результат работы, который помогает достичь цель.",
      "Идеальный дизайн — это полное отсутствие дизайна и получение желаемого без побочных действий и операций.",
      "Красота дизайна определяется его полезностью: то, что сделано качественно, рационально и решает проблему максимально эффективно — прекрасно само по себе.",
      "Любой элемент должен быть создан для чего-то и быть полезным.",
      "Макеты и графическая реализация решения — это инструмент, результат работы, который поможет достичь поставленных целей.",
      "Дизайн — это не вдохновение и самовыражение, это достижение целей и решение проблем (это ближе к инженерии, чем к искусству, хотя цели и обстоятельства могут быть разные); в любом случае, дизайнер меньше занимается поиском вдохновения, а больше анализом ситуации и поиском рационального пути к цели.",
      "Чем больше информации будет получено от заказчика, тем лучше будет результат работы.",
    ],
    rule: "О роли заказчика в процессе",
    ruleText: [
      "Клиент/заказчик — такой же участник процесса создания продукта, как и дизайнер.",
      "Клиент предоставляет дизайнеру информацию: рассказывает о своих целях, проблемах, задачах, о том, как устроен бизнес и почему он такой, какой есть.",
      "Предоставить всю запрашиваемую дизайнером информацию и ответить на все вопросы — крайне важно, ведь от этого напрямую зависит, что будет сделано в итоге.",
      "Дизайнер — это человек с определенными навыками и определенным складом ума — он помогает достичь желаемого результата, анализируя бизнес-модель, рынок и пользователей продукта.",
      "Дизайнер — не ясновидящий и не знает, как работает бизнес и какие цели ставит перед собой заказчик. Поэтому погружение в задачи, цели и проблемы заказчика — очень важно для качественного результата.",
      "Огромную роль играет общение и коммуникация между сторонами, чтобы полностью понять, чего хочет заказчик. Это необходимо для того, чтобы сделать именно то, что нужно.",
    ],
  },
};
const Approach = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <section
      className={`page approach ${
        theme.theme === "dark" ? "approach__dark" : ""
      }`}
    >
      <div className="approach__container">
        <div className="approach__title-container">
          <div className="approach__title">
            {theme.language === "en" ? APPROACH.en.title : APPROACH.ru.title}
          </div>
          <ul className="approach__title-list">
            {(theme.language === "en"
              ? APPROACH.en.titleList
              : APPROACH.ru.titleList
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="approach__rule-container">
          <div className="approach__rule">
            {theme.language === "en" ? APPROACH.en.rule : APPROACH.ru.rule}
          </div>
          <ul className="approach__rule-list">
            {(theme.language === "en"
              ? APPROACH.en.ruleText
              : APPROACH.ru.ruleText
            ).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Approach;
