import { useSelector } from "react-redux";

const Approach = () => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div>
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>
        Approach ...
      </h1>
    </div>
  );
};

export default Approach;
