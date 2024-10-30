import { useSelector } from "react-redux";

const Contacts = () => {
  const theme = useSelector((state) => state.mode.theme);
  return (
    <div>
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>
        Contacts ...
      </h1>
    </div>
  );
};

export default Contacts;
