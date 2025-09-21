import { ProductsResponseType } from "@/types/products.response";

export const getPopularProducts = async (): Promise<ProductsResponseType> => {
  return await (await fetch("https://dummyjson.com/products/")).json();
};
