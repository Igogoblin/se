/* eslint-disable no-undef */
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Contacts from "./pages/Contacts";

// const basename = process.env.NODE_ENV === "production" ? "/se" : "";
function App() {
  return (
    // <HashRouter basename={basename}>
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="approach" element={<Approach />} />
        <Route path="contacts" element={<Contacts />} />

        <Route path="*" element={<div>Page not found </div>} />
      </Routes>
      {/* </Router> */}
      {/* // </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;
