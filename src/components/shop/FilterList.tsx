import { Icons } from "@/lib/icons";
import React from "react";

interface FilterListPropsType {
  filters: string[];
  onChangeFilters: React.Dispatch<React.SetStateAction<string[]>>;
  productCount: number;
}

const FilterList = ({filters, onChangeFilters, productCount}: FilterListPropsType) => {
  return (
    <div className="flex justify-between items-center py-3 px-6 bg-bannerGray">
      <div className="flex items-center gap-3 body-medium-500">
        <p className="text-lightBlack ">Active filters: </p>
        {filters.length > 0 &&
          filters.map((filter) => (
            <div
              key={filter}
              className="flex items-center px-3 py-1 rounded-2xl bg-gray-300 gap-2"
            >
              <span>{filter}</span>
              {/* //!bug */}
              <Icons.close
                className="cursor-pointer hover:text-red-500"
                onClick={() => {
                  onChangeFilters(filters.splice(filters.indexOf(filter), 1));
                }}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center gap-2 text-sm">
        <strong>{productCount}</strong>
        <span>Results found</span>
      </div>
    </div>
  );
};

export default FilterList;
