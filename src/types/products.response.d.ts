import { ProductType } from "./product";

export interface ProductsResponseType {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}