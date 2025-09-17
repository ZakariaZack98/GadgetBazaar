"use client";
import { featuredProductsData } from "@/lib/featuredProduct";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "@/api/featuredProduct";
import FeaturedProductLoadingSkeleton from "./skeletons/featuredProductsSkeleton";
import { ProductType } from "@/types/product";

interface featuredCategoryType {
  name: string;
  slug: string;
}

const FeaturedProducts = () => {
  const Allcategory = {
    name: 'All',
    slug: 'all'
  }
  const featuredProductsAssets = featuredProductsData;
  const [selectedCategory, setSelectedCategory] = useState<featuredCategoryType>(Allcategory);
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["featuredproducts", selectedCategory.slug],
    queryFn: () => getFeaturedProducts(selectedCategory.slug),
  });

  useEffect(() => {
    if (data) {
      setProductsData(data.products);
    }
  }, [data]);

  return (
    <div className="my-18 container mx-auto">
      <div className="flex gap-x-5 items-stretch h-fit">
        {/* ============================= vertical banner ============================= */}
        <Link
          href={"/category/computers-laptops"}
          className="w-full relative flex justify-center object-cover object-center">
          <img src={featuredProductsAssets.banner.imgUrl} alt="banner_image" className="" />
        </Link>
        {/* =========================== featured tab section ============================= */}
        <div className="lg:min-w-3/4 flex flex-col justify-between gap-5">
          {/* ==================== Heading =====================*/}
          <div className="flex justify-between items-baseline">
            <h3 className="font-semibold text-2xl leading-8">Featured Products</h3>
            <div className="flex gap-x-2 items-baseline body-medium-400 text-lightBlack">
              <p
                onClick={() => setSelectedCategory(Allcategory)}
                className={`py-2 cursor-pointer duration-200 ${
                  selectedCategory.slug !== 'all'
                    ? "hover:text-accentOrange"
                    : "font-semibold text-deepBlack border-b-2 border-accentOrange"
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
              <Link href={"/featured/all"} className="text-accentOrange p-2 font-semibold">
                Browse all products →
              </Link>
            </div>
          </div>
          {/* ================== Products grid ================== */}
          {isPending ? (
            <FeaturedProductLoadingSkeleton />
          ) : isError ? (
            <p>Something went wrong</p>
          ) : (
            <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4 h-full">
              {productsData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          {/* ================== Products grid end ================== */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
