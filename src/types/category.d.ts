import { ImageType } from "./image";

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: ImageType;
  subcategory: {
    name: string;
    slug: string;
    isActive: boolean;
    category: {
      slug: string;
    };
  }[];
  isActive: boolean;
}