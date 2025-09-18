import { ProductType } from "@/types/product";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai"; 

interface ProductcardPropsType {
  product: ProductType;
}

const flags = [
  {
    label: "HOT",
    bgColorClass: "bg-red-500",
  },
  {
    label: "BEST DEALS",
    bgColorClass: "bg-blue-500",
  },
  {
    label: "SALE",
    bgColorClass: "bg-green-500",
  },
];

const ProductCard = ({ product }: ProductcardPropsType) => {
  let productflag: { label: string; bgColorClass: string } | undefined; 

  // if (product.totalSold > 500) {
  //   productflag = flags[0];
  // } else if (product.avgRating > 4.5) {
  //   productflag = flags[1];
  // } else if (product.discount) {
  //   productflag = flags[2];
  // }

  return (
    <div className=" bg-white max-h-88 overflow-hidden border border-gray-300 transition-shadow duration-300 relative group"> 
      <div className="flex gap-1.5 absolute top-2 left-2 z-20"> 
        {product.discountPercentage && product.discountPercentage > 0 ? (
          <div className="px-2 py-1 bg-accentOrange text-white text-xs font-bold z-10">
            {Math.floor(product.discountPercentage)}% OFF
          </div>
        ) : null}
        {productflag && (
          <div className={`inline px-2 py-1 ${productflag.bgColorClass} text-white text-xs font-bold z-10`}>
            {productflag.label}
          </div>
        )}
      </div>

      <div className="relative w-full h-13/20 flex justify-center items-center p-4">
        <img src={product.images[0]} alt={product.title} className="max-w-full max-h-full object-contain" />

        {/* Overlay and Buttons */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0)]  group-hover:bg-[rgba(0,0,0,0.25)]  transition-all duration-300 flex items-center justify-center space-x-2">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Heart Button */}
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-accentOrange hover:text-white">
              <AiOutlineHeart className="text-xl" title="Add to wishlist"/>
            </button>
            {/* Cart Button */}
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-accentOrange hover:text-white">
              <AiOutlineShoppingCart className="text-xl" title="Add to cart"/>
            </button>
            {/* Eye Button */}
            <button className="w-10 h-10 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-accentOrange hover:text-white">
              <AiOutlineEye className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col justify-end">
        <div className="flex items-center space-x-1 mb-2" title={`total ${product.reviews.length} ratings`}>
          {/* Loop to render stars based on avgRating */}
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-sm ${i < Math.floor(product.reviews.map(review => review.rating).reduce((a, b) => a+b)/product.reviews.length) ? "text-orange-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-gray-500">({product.reviews.length})</span>
        </div>
        {/*! product.category & product.subcategory should come as an object in production */}
        <Link
        // ! subcategory & slug comes later
          href={`/product/${product.category}/${product.id}`}
          className="font-public-sans text-sm leading-5 text-gray-800 line-clamp-2 min-h-[40px] ">
          {product.title}
        </Link>
        <p className="body-medium-600 text-blue-600 mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;