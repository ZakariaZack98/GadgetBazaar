"use client";
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import SubcategoryList from "./SubcategoryList";

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
  placeholder: string;
  onValueChange: (value: string) => void;
}

const CategorySelector = ({ categories, placeholder, onValueChange }: SelectorPropsType) => {
  const [hoveredCategory, setHoveredCategory] = useState<any>(null);

  return (
    <div className="relative" >
      <Select onValueChange={onValueChange}>
        <SelectTrigger className="w-50">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category.slug}
              onMouseOver={() => setHoveredCategory(category)}
              className="body-small-500 text-deepBlack">
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="absolute m-55 top-0 ">
        {hoveredCategory && <SubcategoryList subcategorydata={hoveredCategory?.subcategory} />}
      </div>
    </div>
  );
};

export default  CategorySelector;
