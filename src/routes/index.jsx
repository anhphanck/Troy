import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Clients from "../pages/Clients";
import Strength from "../pages/Strength";
import Projects from "../pages/Projects";
import Partners from "../pages/Partners";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/khach-hang" element={<Clients />} />
        <Route path="/the-manh" element={<Strength />} />
        <Route path="/du-an" element={<Projects />} />
        <Route path="/doi-tac" element={<Partners />} />
        <Route path="/lien-he" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}