import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./styles.css";
import { Input } from "../ui/input";
import { getPriceBreakpoints } from "@/helpers/getPriceBreakpoint";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface PriceRangePropsType {
  maxPriceLimit: number;
  minPriceLimit: number;
  priceRange: [number, number];
  onChangePriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const PriceRange = ({
  priceRange,
  onChangePriceRange,
  maxPriceLimit,
  minPriceLimit,
}: PriceRangePropsType) => {
  const priceBreakPoints = getPriceBreakpoints(maxPriceLimit);
  console.log(priceBreakPoints);

  const handleRangeChange = (value: string) => {
    if (value == "all") {
      onChangePriceRange([minPriceLimit, maxPriceLimit]);
    } else {
      const idx = Number(value);
      onChangePriceRange(priceBreakPoints[idx].range);
    }
  };

  return (
    <div className="pe-10 pb-10 border-b border-gray-300 flex flex-col gap-5 text-lightBlack">
      <h3 className="label2 ">PRICE RANGE</h3>
      {/* ============ price slider ========== */}
      <RangeSlider
        id="range-slider-yellow"
        value={priceRange}
        onInput={onChangePriceRange}
        max={maxPriceLimit}
        min={minPriceLimit}
      />
      {/* ============= manual range input =========== */}
      <div className="flex justify-between items-center gap-5 w-full">
        <Input
          type="number"
          value={priceRange[0]}
          className="rounded-none"
          onChange={(e) =>
            onChangePriceRange([Number(e.target.value), priceRange[1]])
          }
        />
        <Input
          type="number"
          value={priceRange[1]}
          className="rounded-none"
          onChange={(e) =>
            onChangePriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>
      {/* =============== range radio list ============== */}
      <div className="">
        <RadioGroup
          defaultValue="all"
          className="flex flex-col gap-4"
          onValueChange={(value: string) => handleRangeChange(value)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem
              value="all"
              id="r1"
              className="h-5 w-5 border-2 border-gray-300 rounded-full data-[state=checked]:bg-accentOrange"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-transparent transition-colors duration-200 data-[state=checked]:bg-white border-2 border-white">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent transition-colors duration-200 data=[state=checked]:bg-white"></div>
              </div>
            </RadioGroupItem>
            <Label htmlFor="r1">All Price</Label>
          </div>
          {priceBreakPoints?.map(
            (priceRange, idx, arr) =>
              idx < arr.length - 1 && (
                <div
                  key={priceRange.range[0]}
                  className="flex items-center gap-3"
                >
                  <RadioGroupItem
                    value={idx.toString()}
                    id="r1"
                    className="h-5 w-5 border-2 border-gray-300 rounded-full data-[state=checked]:bg-accentOrange"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-transparent transition-colors duration-200 data-[state=checked]:bg-white border-2 border-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-transparent transition-colors duration-200 data=[state=checked]:bg-white"></div>
                    </div>
                  </RadioGroupItem>
                  <Label htmlFor="r1">{priceRange.label}</Label>
                </div>
              )
          )}
        </RadioGroup>
      </div>
    </div>
  );
};

export default PriceRange;
