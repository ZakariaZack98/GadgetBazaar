import { ProductsResponseType } from "@/types/products.response";

export const getFeaturedProducts = async (categoryslug: string): Promise<ProductsResponseType> => {
  console.log(categoryslug)
  if(categoryslug !== 'all') {
    return await (await fetch(`https://dummyjson.com/products/category/${categoryslug}/?limit=8`)).json();
  } else return await (await fetch("https://dummyjson.com/products/?limit=8")).json();
};
