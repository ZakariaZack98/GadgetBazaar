import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface BrandFilterPropsType {
  allBrands: string[];
  selectedBrands: string[];
  onSelectBrand: React.Dispatch<React.SetStateAction<string[]>>;
}

const BrandFilter = ({
  allBrands,
  selectedBrands,
  onSelectBrand,
}: BrandFilterPropsType) => {
  return (
    <div>
      <h3 className="label2 mb-4 text-lightBlack">POPULAR BRANDS</h3>
      <div className="grid grid-cols-12 gap-4">
        {
          //* max 11 brands
          allBrands?.slice(0, 11)?.map((brand) => (
            <div key={brand} className="flex items-center gap-2 col-span-6">
              <Checkbox
                id={brand}
                className="w-5 h-5 rounded-none data-[state=checked]:bg-accentOrange data-[state=checked]:border-accentOrange hover:border-2 hover:border-accentOrange"
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    onSelectBrand([...selectedBrands, brand]);
                  } else {
                    onSelectBrand(selectedBrands.filter((b) => b !== brand));
                  }
                }}
              />
              <Label htmlFor={brand} className=" text-lightBlack">
                {brand}
              </Label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BrandFilter;
