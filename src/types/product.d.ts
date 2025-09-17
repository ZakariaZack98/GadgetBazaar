import { IconType } from "react-icons";
import type { ImageType } from "./image";

export interface ProductType {
  id: number;
  title: string;
  slug:string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

// export interface ProductType {
//   name: string;
//   slug:string;
//   images: ImageType[];
//   sku: string;
//   price: number;
//   brand: string; //! BrandType later
//   isAvailable: boolean; 
//   category: string; //! CategoryType later
//   subcategory: string; //! SubcategoryType later
//   discount?: number; //! DiscountType later
//   variant?: string; //! VariantType later
//   desc: string;
//   features: {
//     icon: IconType;
//     desc: string;
//   }[];
//   totalSold: number;
//   totalRated: number;
//   avgRating: number;
// }