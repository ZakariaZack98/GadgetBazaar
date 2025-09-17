import { IconType } from "react-icons";
import type { ImageType } from "./image";

export interface ProductType {
  name: string;
  slug:string;
  images: ImageType[];
  sku: string;
  price: number;
  brand: string; //! BrandType later
  isAvailable: boolean; 
  category: string; //! CategoryType later
  subcategory: string; //! SubcategoryType later
  discount?: number; //! DiscountType later
  variant?: string; //! VariantType later
  desc: string;
  features: {
    icon: IconType;
    desc: string;
  }[];
  totalSold: number;
  totalRated: number;
  avgRating: number;
}