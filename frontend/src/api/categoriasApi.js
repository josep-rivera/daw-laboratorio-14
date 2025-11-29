import client from "./axiosClient";

export const getCategorias = () => client.get("/categorias");
export const createCategoria = (body) => client.post("/categorias", body);
export const deleteCategoria = (id) => client.delete(`/categorias/${id}`);
