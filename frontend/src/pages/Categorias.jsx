import { useState } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useFetch } from "../hooks/useFetch";
import {
  getCategorias,
  createCategoria,
  deleteCategoria,
} from "../api/categoriasApi";

export default function Categorias() {
  const { data: categorias, loading, error, reload } = useFetch(getCategorias);
  const [nombre, setNombre] = useState("");

  const save = () => {
    if (!nombre.trim()) return;
    createCategoria({ nombre }).then(() => reload());
    setNombre("");
  };

  return (
    <PageWrapper>
      <h2 className="text-3xl text-white font-semibold mb-6">Categorías</h2>

      <div className="flex gap-4 mb-6">
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="bg-gray-900 border border-gray-700 p-2 rounded-md text-white w-64"
          placeholder="Nueva categoría"
        />
        <Button onClick={save}>Agregar</Button>
      </div>

      {loading && <p className="text-gray-400">Cargando...</p>}
      {error && (
        <p className="bg-red-600 text-white p-2 rounded-md">Error al cargar</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categorias.map((c) => (
          <Card key={c.id}>
            <div className="flex justify-between">
              <p className="text-lg text-white">{c.nombre}</p>
              <Button
                className="bg-red-600 hover:bg-red-500"
                onClick={() => deleteCategoria(c.id).then(() => reload())}
              >
                Eliminar
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
