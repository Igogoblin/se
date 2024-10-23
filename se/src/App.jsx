import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <BrowserRouter basename="/se">
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="approach" element={<Approach />} />
        <Route path="contacts" element={<Contacts />} />

        <Route path="*" element={<div>Page not found </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
