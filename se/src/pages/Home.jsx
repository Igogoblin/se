import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <main>
      <div className="wrapper">
        <div className="main__head">
          <div className="head-user"></div>
          <div className="head-profession"></div>
          <div className="head-work"></div>
          <div className="head-services"></div>
          <div className="head-awards">
            <div className="head-awards__block"></div>
          </div>
        </div>
        <h1 style={{ color: theme === "dark" ? "white" : "black" }}>
          Home ...
        </h1>
      </div>
    </main>
  );
};

export default Home;
