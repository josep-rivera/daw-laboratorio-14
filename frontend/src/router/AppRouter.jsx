import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Categorias from "../pages/Categorias";
import Productos from "../pages/Productos";
import Navbar from "../components/layout/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}
