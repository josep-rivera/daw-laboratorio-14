import { useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useFetch } from "../hooks/useFetch";
import {
  getProductos,
  createProducto,
  deleteProducto,
} from "../api/productosApi";

export default function Productos() {
  const { data: productos, loading, error, reload } = useFetch(getProductos);

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoriaId, setCategoriaId] = useState("");

  const save = () => {
    if (!nombre || !precio || !categoriaId) return;
    createProducto({
      nombre,
      precio: Number(precio),
      categoriaId: Number(categoriaId),
    }).then(() => reload());

    setNombre("");
    setPrecio("");
    setCategoriaId("");
  };

  return (
    <PageWrapper>
      <h2 className="text-3xl text-white font-semibold mb-6">Productos</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
        <input
          className="bg-gray-900 border border-gray-700 p-2 rounded-md text-white"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          className="bg-gray-900 border border-gray-700 p-2 rounded-md text-white"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          className="bg-gray-900 border border-gray-700 p-2 rounded-md text-white"
          placeholder="ID Categoría"
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
        />
        <Button onClick={save}>Agregar</Button>
      </div>

      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && (
        <p className="bg-red-600 text-white p-2 rounded">Error al cargar</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((p) => (
          <Card key={p.id}>
            <p className="text-xl text-white">{p.nombre}</p>
            <p className="text-gray-400">Precio: {p.precio}</p>
            <p className="text-gray-500 text-sm">Categoría: {p.categoriaId}</p>

            <Button
              className="mt-4 bg-red-600 hover:bg-red-500"
              onClick={() => deleteProducto(p.id).then(reload)}
            >
              Eliminar
            </Button>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
