"use client";
import { getPopularProducts } from "@/api/allProducts";
import ProductCard from "@/components/common/ProductCard";
import FeaturedProductLoadingSkeleton from "@/components/home/skeletons/featuredProductsSkeleton";
import CategoryRadio from "@/components/shop/categoryRadio";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
}

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [inputType, setInputType] = useState<string>("text");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortFactor, setSortFactor] = useState<SortType>({label: 'Most Popular', key: 'popularity'})
  const [filters, setFilters] = useState<string[]>([]);
  const [productsData, setProductsData] = useState<ProductType[]>([])

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
  const {isPending, isError, data, error} = useQuery({
    queryKey: ['allproducts'],
    queryFn: getPopularProducts
  });
  useEffect(() => {
    if(data) {
      setProductsData(data.products);
    } else if (error) {console.error(error)}
  }, [data])


  return (
    <div className="py-10 container mx-auto">
      <div className="grid grid-cols-12">
        {/* ============================================= sidebar ==============================================*/}
        <div className="col-span-3">
          <CategoryRadio
            categoryList={categoryList}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        {/* ======================================= product grid part ========================================*/}
        <div className="col-span-9 flex flex-col gap-4">
          {/* =========== search and sort area ={/* search ================ */}
          <div className="flex justify-between items-center w-full">
            {/* search ============ */}
            <div className="searchArea relative w-1/2">
              <Input
                type={inputType}
                placeholder="Search for anything"
                className="text-gray-700 rounded-none bg-white body-small-400 py-3.5 ps-5 pe-15 h-10 w-full border border-gray-300"
                value={searchTerm}
                onChange={(e) => handleInput(e)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-gray-700 text-xl">
                {searchTerm.length === 0 ? (
                  <Icons.search />
                ) : (
                  <Icons.close onClick={() => setSearchTerm("")} />
                )}
              </span>
            </div>
            {/* sort ================ */}
            <div className="flex items-center gap-4">
              <Label htmlFor="sort" className="body-medium-400">
                Sort by:{" "}
              </Label>
              <Select onValueChange={(e) => {
                const matchedSortFactor = sortFactorsList?.find(factor => factor.key === e)
                if(matchedSortFactor) {
                  setSortFactor(matchedSortFactor);
                }
              }}>
                <SelectTrigger className="w-[180px] rounded-none !py-5">
                  <SelectValue placeholder="Most Popular"/>
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectGroup>
                    {
                      sortFactorsList?.map(factor => (
                        <SelectItem key={factor.key} value={factor.key}>{factor.label}</SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* ================filter list ================== */}
          <div className="flex justify-between items-center py-3 px-6 bg-bannerGray">
            <div className="flex items-center gap-3 body-medium-500">
              <p className="text-lightBlack ">Active filters: </p>
              {
                filters.length > 0 && filters.map(filter => (
                  <div key={filter} className="flex items-center px-3 py-1 rounded-2xl bg-gray-300 gap-2">
                    <span>{filter}</span>
                    {/* //!bug */}
                    <Icons.close className="cursor-pointer hover:text-red-500" onClick={() => {setFilters(filters.splice(filters.indexOf(filter), 1) )}}/>
                  </div>
                ))
              }
            </div>
            <div className="flex items-center gap-2 text-sm">
              <strong>{productsData.length}</strong>
              <span>Results found</span>
            </div>
          </div>
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
