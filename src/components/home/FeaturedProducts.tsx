"use client";
import { featuredProductsData } from "@/lib/featuredProduct";
import Link from "next/link";
import React, { useState } from "react";
import ProductCard from "../common/ProductCard";
import { sampleProduct } from "../../../temp/sampleProduct";

interface featuredCategoryType {
  name: string;
  slug: string;
}

const FeaturedProducts = () => {

  const sampleProductData = sampleProduct;

  const featuredProductsAssets = featuredProductsData;
  const [selectedCategory, setSelectedCategory] = useState<featuredCategoryType | null>(null);
  return (
    <div className="my-18 container mx-auto">
      <div className="flex gap-x-5 items-stretch h-fit">
        {/* ============================= vertical banner ============================= */}
        <div className="h-full w-full relative">
          <picture>
            <img src={featuredProductsAssets.banner.imgUrl} alt="banner_image" className="" />
          </picture>
        </div>
        {/* =========================== featured tab section ============================= */}
        <div className="lg:min-w-3/4 flex flex-col">
          {/* ==================== Heading =====================*/}
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-2xl leading-8">Featured Products</h3>
            <div className="flex gap-x-2 items-baseline body-medium-400 text-lightBlack">
              <p
                onClick={() => setSelectedCategory(null)}
                className={`py-2 cursor-pointer duration-200 ${
                  selectedCategory ? "hover:text-accentOrange" : "font-semibold text-deepBlack border-b-2 border-accentOrange"
                }`}>
                All Products
              </p>
              {featuredProductsAssets.featuredCategories?.map((category) => (
                <p
                  key={category.slug}
                  className={`p-2 cursor-pointer duration-200 ${
                    selectedCategory && selectedCategory.name === category.name
                      ? "font-semibold text-deepBlack border-b-2 border-accentOrange"
                      : "hover:text-accentOrange"
                  }`}
                  onClick={() => setSelectedCategory(category)}>
                  {category.name}
                </p>
              ))}
              <Link href={'/featured/all'} className="text-accentOrange p-2 font-semibold">Browse all products  →</Link>
            </div>
          </div>
          {/* ================== Products grid ================== */}
          <div className="w-58">
            <ProductCard product={sampleProductData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
