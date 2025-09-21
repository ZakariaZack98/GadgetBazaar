import React, { SetStateAction, useState } from "react";
import { Input } from "../ui/input";
import { Icons } from "@/lib/icons";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem, 
} from "../ui/select";
import { sortFactors } from "@/lib/sortFactors";

type SortType = {
  label: string;
  key: string;
};

interface SearchSortPropsType {
  searchTerm: string;
  onChangeSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sortFactor: SortType;
  onChangeSortFactor: React.Dispatch<React.SetStateAction<SortType>>;
}

const SearchAndSort = ({
  searchTerm,
  onChangeSearchTerm,
  sortFactor,
  onChangeSortFactor,
}: SearchSortPropsType) => {
  const [inputType, setInputType] = useState<string>("text");
  const sortFactorsList = sortFactors;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 0) {
      setInputType("search");
    }
    onChangeSearchTerm(e.target.value);
  };

  return (
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
            <Icons.close onClick={() => onChangeSearchTerm("")} />
          )}
        </span>
      </div>
      {/* sort ================ */}
      <div className="flex items-center gap-4">
        <Label htmlFor="sort" className="body-medium-400">
          Sort by:{" "}
        </Label>
        <Select
          value={sortFactor.key}
          onValueChange={(e) => {
            const matchedSortFactor = sortFactorsList?.find(
              (factor) => factor.key === e
            );
            if (matchedSortFactor) {
              onChangeSortFactor(matchedSortFactor);
            }
          }}
        >
          <SelectTrigger className="w-[180px] rounded-none !py-5">
            <SelectValue placeholder={sortFactor.label || "Most popular"} />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectGroup>
              {sortFactorsList?.map((factor) => (
                <SelectItem key={factor.key} value={factor.key}>
                  {factor.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchAndSort;