import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "../common/Carousel";
import { serviceHighlightData } from "@/lib/serviceHighlight";

interface HeroPropsType {
  bannerProps: {
    imageUrl: string;
    url: string;
  }[];
  topAdBanner: {
    imageUrl: string;
    url: string;
  };
  bottomAdBanner: {
    imageUrl: string;
    url: string;
  };
}

const Hero = ({ bannerProps, topAdBanner, bottomAdBanner }: HeroPropsType) => {
  const serviceHighlights = serviceHighlightData;
  return (
    <div className="py-6">
      <div className="container mx-auto">
        {/* ========================== banner part ======================== */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* ======================= slider ======================== */}
          <div className="col-span-8 h-130">
            <Carousel slidesCollection={bannerProps} />
          </div>
          {/* =================== Ad banner ======================= */}
          <div className="col-span-4 grid cols-2 gap-5">
            <div className="relative">
              <Link href={topAdBanner.url} className=" w-full h-full">
                <Image
                  src={topAdBanner.imageUrl}
                  fill
                  alt="image_of_top_ad_banner"
                  className="object-cover object-center rounded-sm"
                />
              </Link>
            </div>
            <div className=" relative">
              <Link href={bottomAdBanner.url} className=" w-full h-full">
                <Image
                  src={bottomAdBanner.imageUrl}
                  fill
                  alt="image_of_top_ad_banner"
                  className="object-cover object-center rounded-sm"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* ======================= Services Higlights =========================== */}
        <div className="h-25 w-full mt-6 grid grid-cols-12 border border-gray-300">
          {
            serviceHighlights?.map((service, idx, arr )=> (
              <div key={service.title} className={`my-6 col-span-3 flex justify-center items-center gap-x-4  ${idx != arr.length - 1 ? 'border-e border-gray-300': ''}`}>
                <span className="icon text-3xl text-gray-500">
                  <service.icon/>
                </span>
                <div className="flex flex-col">
                  <p className="text-deepBlack">{service.title.toUpperCase()}</p>
                  <p className="body-small-400 text-gray-500">{service.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
        
      </div>
      
    </div>
  );
};

export default Hero;
