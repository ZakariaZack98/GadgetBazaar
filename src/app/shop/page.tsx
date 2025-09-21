"use client";
import { getPopularProducts } from "@/api/allProducts";
import PopularTags from "@/components/common/PopularTags";
import ProductCard from "@/components/common/ProductCard";
import FeaturedProductLoadingSkeleton from "@/components/home/skeletons/featuredProductsSkeleton";
import CategoryRadio from "@/components/shop/categoryRadio";
import FilterList from "@/components/shop/FilterList";
import SearchAndSort from "@/components/shop/SearchAndSort";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/Categories";
import { Icons } from "@/lib/icons";
import { sortFactors } from "@/lib/sortFactors";
import { CategoryType } from "@/types/category";
import { ProductType } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

type SortType = {
  label: string;
  key: string;
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [inputType, setInputType] = useState<string>("text");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortFactor, setSortFactor] = useState<SortType>({
    label: "Most Popular",
    key: "popularity",
  });
  const [filters, setFilters] = useState<string[]>([]);
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      setInputType("search");
    }
    setSearchTerm(e.target.value);
  };

  //* data fetching layer ============================================================================
  //TODO: Fetch category data
  const categoryList = categories;
  const sortFactorsList = sortFactors;

  //? mock fetch (change this later)
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["allproducts"],
    queryFn: getPopularProducts,
  });
  useEffect(() => {
    if (data) {
      setProductsData(data.products);
    } else if (error) {
      console.error(error);
    }
  }, [data]);

  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-12">
        {/* ============================================= sidebar ==============================================*/}
        <div className="col-span-3">
          <div className="flex flex-col gap-10">
            <CategoryRadio
              categoryList={categoryList}
              onSelectCategory={setSelectedCategory}
            />
            <PopularTags />
          </div>
        </div>
        {/* ======================================= product grid part ========================================*/}
        <div className="col-span-9 flex flex-col gap-4">
          <SearchAndSort searchTerm={searchTerm} onChangeSearchTerm={setSearchTerm} sortFactor={sortFactor} onChangeSortFactor={setSortFactor}/>
          <FilterList filters={filters} onChangeFilters={setFilters} productCount={productsData.length || 0}/>
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
