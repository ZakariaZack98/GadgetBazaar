"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./cardCarousel.css";

interface CardCarouselProps {
  slides?: React.ReactNode[] ;
}

const CardCarousel = ({slides}: CardCarouselProps) => {
  return (
    <div className="relative "> 
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="card-swiper"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons placed outside the Swiper container */}
      <div className="swiper-button-prev-custom absolute -left-5 top-1/2 -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </div>
      <div className="swiper-button-next-custom absolute -right-5 top-1/2 -translate-y-1/2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </div>
    </div>
  );
};

export default CardCarousel;
