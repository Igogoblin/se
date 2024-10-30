import { useSelector } from "react-redux";

const About = () => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div>
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>About ...</h1>
    </div>
  );
};

export default About;
