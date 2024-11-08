import { useSelector } from "react-redux";

const Contacts = () => {
  const theme = useSelector((state) => state.mode);
  return (
    <div className="page">
      <h1 style={{ color: theme.theme === "dark" ? "white" : "black" }}>
        {theme.language === "en" ? "Contacts" : "Страница контактов"} ...
      </h1>
    </div>
  );
};

export default Contacts;
