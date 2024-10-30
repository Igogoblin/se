import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <div>
      <h1 style={{ color: theme.theme === "dark" ? "white" : "black" }}>
        {theme.language === "en" ? "About ..." : "Страница о себе ..."}
      </h1>
    </div>
  );
};

export default About;
