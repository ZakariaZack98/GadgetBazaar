"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Icons } from "@/lib/icons";
import Link from "next/link";

interface SelectOption {
  _id: string;
  name: string;
  slug: string;
  image: {
    url: string;
    publicId: string;
  };
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

interface SelectorPropsType {
  categories: SelectOption[];
}

interface SubCategoryType {
  category: {
      slug: string;
    };
    name: string;
    slug: string;
    isActive: boolean;
}

const CategorySelector = ({ categories }: SelectorPropsType) => {
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [hoveredCategory, setHoveredCategory] = useState<SelectOption | null>(null);

  return (
    <div className="relative h-full z-50">
      {/* ============================ Toggle switch button ========================== */}
      <Button
        className={`${
          categoryOpen ? "bg-accentOrange !text-white" : "bg-gray-300"
        } text-black !py-4 hover:bg-accentOrange hover:text-white`}
        onClick={() => setCategoryOpen((prev) => !prev)}>
        <span className="body-small-400">All Category</span>{" "}
        <span className="ms-2">{categoryOpen ? <Icons.upAngle /> : <Icons.downAngle />}</span>
      </Button>
      {categoryOpen && (
        <div className="absolute -bottom-153 left-0 w-120 h-150 flex gap-x-2">
          {/* ====================== Main Category Part =========================== */}
          <div className="flex flex-col gap-x-2 bg-white shadow-xl xl:max-w-1/2 h-fit border border-bannerGray">
            {categories?.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`text-start py-2 ps-4 pe-15 md:min-w-1/2 hover:bg-bannerGray ${
                  hoveredCategory && hoveredCategory.name === category.name ? "bg-bannerGray" : ""
                } duration-200 body-small-400`}
                onMouseOver={() => setHoveredCategory(category)}>
                {category.name}
              </Link>
            ))}
          </div>
          {/* ====================== SubCategory Part =========================== */}
            {hoveredCategory && (
              <div className="flex flex-col gap-x-2 bg-white shadow-xl md:w-1/2 h-fit border border-bannerGray">
                {hoveredCategory?.subcategory?.map((subcategory: SubCategoryType) => (
                  <Link
                    key={subcategory.slug}
                    href={`/category/${subcategory.category.slug}/${subcategory.slug}`}
                    className={`text-start py-2 ps-4 pe-10 hover:bg-bannerGray duration-200 body-small-400`}
                  >
                    {subcategory.name}
                  </Link>
                ))}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default CategorySelector;
