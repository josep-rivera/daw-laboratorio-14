import client from "./axiosClient";

export const getProductos = () => client.get("/productos");
export const createProducto = (body) => client.post("/productos", body);
export const deleteProducto = (id) => client.delete(`/productos/${id}`);
