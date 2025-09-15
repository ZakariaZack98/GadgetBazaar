"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { PaginationOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

import './styles.css'

interface CarouselPropsType {
  slidesCollection: {
    imageUrl: string;
    url: string;
  }[]
}

export default function Carousel({slidesCollection}: CarouselPropsType) {
  const paginationOptions: PaginationOptions = {
    clickable: true,
  };

  return (
    <div className="h-full w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={paginationOptions}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {
          slidesCollection?.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.url} className="relative w-full h-full block">
                <Image
                  src={slide.imageUrl}
                  alt="a_slide_image"
                  fill
                  className="object-cover object-center"
                />
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}