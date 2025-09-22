"use client";
import { getPopularProducts } from "@/api/allProducts";
import PopularTags from "@/components/common/PopularTags";
import ProductCard from "@/components/common/ProductCard";
import FeaturedProductLoadingSkeleton from "@/components/home/skeletons/featuredProductsSkeleton";
import BrandFilter from "@/components/shop/BrandFilter";
import CategoryRadio from "@/components/shop/categoryRadio";
import FilterList from "@/components/shop/FilterList";
import PriceRange from "@/components/shop/PriceRange";
import SearchAndSort from "@/components/shop/SearchAndSort";
import { categories } from "@/lib/Categories";
import { sortFactors } from "@/lib/sortFactors";
import { CategoryType } from "@/types/category";
import { ProductType } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type SortType = {
  label: string;
  key: string;
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [minPriceLimit, setMinPriceLimit] = useState<number>(0);
  const [maxPriceLimit, setMaxPriceLimit] = useState<number>(100);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPriceLimit,
    maxPriceLimit,
  ]);
  const [inputType, setInputType] = useState<string>("text");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortFactor, setSortFactor] = useState<SortType>({
    label: "Most Popular",
    key: "popularity",
  });
  const [filters, setFilters] = useState<string[]>([]);
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  //* data fetching layer ============================================================================
  //TODO: Fetch (mock) category data
  const categoryList = categories;

  //? mock fetch (change this later)
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["allproducts"],
    queryFn: getPopularProducts,
  });

  useEffect(() => {
    if (data) {
      setProductsData(data.products);
      const minPrice = Math.min(
        ...data.products.map((product) => product.price)
      );
      const maxPrice = Math.max(
        ...data.products.map((product) => product.price)
      );
      const brandsList = data.products.map((product) => product.brand);
      setBrands(brandsList);
      setMinPriceLimit(minPrice);
      setMaxPriceLimit(maxPrice);
      setPriceRange([minPrice, maxPrice]);
    } else if (error) {
      console.error(error);
    }
  }, [data, error]);

  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* ============================================= sidebar ==============================================*/}
        <div className="col-span-3">
          <div className="flex flex-col gap-10 ">
            <CategoryRadio
              categoryList={categoryList}
              onSelectCategory={setSelectedCategory}
            />
            <PriceRange
              priceRange={priceRange}
              onChangePriceRange={setPriceRange}
              minPriceLimit={minPriceLimit}
              maxPriceLimit={maxPriceLimit}
            />
            <BrandFilter
              allBrands={brands}
              selectedBrands={selectedBrands}
              onSelectBrand={setSelectedBrands}
            />
            <PopularTags />
            <div className="flex items-stretch h-fit">
              <Link href={"/shop/smartwatches"} className="relative w-full h-180 flex justify-center object-center object-cover">
                <Image
                  src={"/images/banner/sidebar_banner.png"}
                  alt="sidebar_banner"
                  fill
                />
              </Link>
            </div>
          </div>
        </div>
        {/* ======================================= product grid part ========================================*/}
        <div className="col-span-9 flex flex-col gap-4">
          <SearchAndSort
            searchTerm={searchTerm}
            onChangeSearchTerm={setSearchTerm}
            sortFactor={sortFactor}
            onChangeSortFactor={setSortFactor}
          />
          <FilterList
            filters={filters}
            onChangeFilters={setFilters}
            productCount={productsData.length || 0}
          />
          {/* =============== product grid ================ */}
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
