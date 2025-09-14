'use client'
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const OfferHeading = () => {
  const [closeHeading, setCloseHeading] = useState<boolean>(false);

  return (
    <div className={`text-white bg-deepBlack relative duration-300 flex items-center ${closeHeading ? 'h-0 overflow-hidden' : 'h-16'}`}>
      <div className=" container mx-auto flex justify-between items-center py-2">
        <picture>
          <img src="/images/logos/offerbar_logo.png" alt="offer_logo" />
        </picture>
        <div className="flex items-center gap-x-2">
          <span className="label3">Upto</span>
          <span className="display3 text-accentYellow">40%</span>
          <span className="body-xl-600">OFF</span>
        </div>
        <Button className="bg-accentYellow text-black !text-sm leading-12 !px-6">SHOP NOW <FaArrowRight/> </Button>
      </div>
      <div className="absolute right-2 xxl:right-10 top-1/2 -translate-y-1/2">
        <Button className="bg-shadowBlack h-7 w-7" onClick={() => setCloseHeading(true)}><IoClose/></Button>
      </div>
    </div>
  );
};

export default OfferHeading;
