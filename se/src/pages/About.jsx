import { useSelector } from "react-redux";
import aboutImage from "../assets/images/Iam.png";
// import aboutCentre from "../assets/images/aboutCentre.png";
const ABOUT = {
  skills: {
    title: "Skills",
    text: 'The key skill is to identify and deeply analyze user goals, objectives and problems at all stages of interaction with the product (both when working with an existing product and when creating a new one). Understanding "what and for what" needs to be done (or not done).',
    list: [
      "Market research and analysis (capacity, segments, barriers, direct and indirect competitors, audience, trends, opportunities, innovations, etc.).",
      "Analysis of all business system and product variables identifying weak and strong components and their impact on business and product metrics + prioritization and constraints.",
      "Ability to work with data and make decisions based on it.",
      "Conducting primary and secondary, qualitative and quantitative research, including conducting in-depth interviews (CustDev).",
      "Segmentation of CA by different attributes (stages of the transaction, motivations, triggers, etc.).",
      "Generating user requirements in User stories / Job stories and JTBD.",
      "Hypothesis work.",
      "Understanding and ability to lead on various product development methodologies (Agile, etc.).",
      "Ability to work in a team and liaise with all project stakeholders.",
      "Understanding the stages of product development, Roadmap and Backlog writing.",
      "Formulation of product vision (CA, needs, product features and capabilities with value definition, business objectives) to achieve PMF.",
      "Elaborate and prioritize all possible scenarios of product usage.",
      "Building processes in the most streamlined and efficient way possible.",
      "Identifying the most appropriate business models and monetization methods.",
      "Skill in building user interaction with the product using funnel principles (AAARRR, RARRA).",
      "Ability to communicate the effectiveness, core and added value of the product to the user.",
      "Defining and enabling the Aha-moment and shortening the user journey to its realization.",
      "Skill in defining goals and setting objectives relevant to the current situation + understanding the criteria for evaluating their achievement.",
      "USP.",
      "UX testing.",
      "Metrics (product, growth, business, value added, north star, OKR, KPI, ROI, ROMI, LTV, Retention, metrics hierarchy and pyramid, etc.).",
      "Defining the Customer lifecycle.",
      "Ability to reduce Time to value for key user segments.",
    ],
  },
};
const About = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <section
      className={`about ${theme.theme === "dark" ? "about__dark" : ""}`}
      id="about"
    >
      <div className="about__container scrollable">
        <div className="about__area ">
          <div className="about__area-place">
            <div className="about__skills">{ABOUT.skills.title}</div>
          </div>
          <div className="about__area-place">
            <div className="about__skills-text">{ABOUT.skills.text}</div>
          </div>
          <div className="about__area-place-list">
            <div className="about__area-place-title">
              <p className="about__title-text">Product management</p>{" "}
              {/* <p className="about__title-text">skills</p> */}
            </div>
            <ul className="about__list">
              {ABOUT.skills.list.map((item) => (
                <li className="about__item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={aboutImage} alt="author" className="about__image" />
      </div>
    </section>
  );
};

export default About;
