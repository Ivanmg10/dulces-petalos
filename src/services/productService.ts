import type { Product } from "../types/types";

const BASE_URL = "https://dulces-petalos.jakala.es/api/v1/product";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al cargar productos");
  return res.json();
};

export const getProductById = async (
  id: string | undefined
): Promise<Product> => {
  if (!id) throw new Error("ID no proporcionado");
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Producto no encontrado");
  return res.json();
};
