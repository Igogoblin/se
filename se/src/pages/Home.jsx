// import Layout from "./Layout";

import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <main className="page">
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>Home ...</h1>
    </main>
  );
};

export default Home;
