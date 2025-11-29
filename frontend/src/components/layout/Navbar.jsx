import { Link, useLocation } from "react-router-dom";
import { Layers, Tag, Package } from "lucide-react";

export default function Navbar() {
  const path = useLocation().pathname;

  const Item = ({ to, label, Icon }) => (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition
      ${
        path === to
          ? "bg-indigo-600 text-white"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">Dashboard</h1>

        <div className="flex gap-4">
          <Item to="/" label="Inicio" Icon={Layers} />
          <Item to="/categorias" label="Categorías" Icon={Tag} />
          <Item to="/productos" label="Productos" Icon={Package} />
        </div>
      </div>
    </nav>
  );
}
