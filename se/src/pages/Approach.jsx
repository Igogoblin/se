import { useSelector } from "react-redux";

const Approach = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <div>
      <h1 style={{ color: theme.theme === "dark" ? "white" : "black" }}>
        {theme.language === "en" ? "Approach" : "Страница подхода"} ...
      </h1>
    </div>
  );
};

export default Approach;
