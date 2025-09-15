import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Carousel from '../common/Carousel';

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

const Hero = ({bannerProps, topAdBanner, bottomAdBanner}: HeroPropsType) => {
  return (
    <div className='py-6'>
      <div className="container mx-auto">
        {/* ========================== banner part ======================== */}
      <div className="grid grid-cols-12 gap-5 items-stretch">
        {/* ======================= slider ======================== */}
        <div className='col-span-8 h-130'>
          <Carousel slidesCollection={bannerProps}/>
        </div>
        {/* =================== Ad banner ======================= */}
        <div className="col-span-4 grid cols-2 gap-5">
          <div className="relative">
            <Link href={topAdBanner.url} className=' w-full h-full'>
              <Image src={topAdBanner.imageUrl} fill alt='image_of_top_ad_banner' className='object-cover object-center rounded-sm'/>
            </Link>
          </div>
          <div className=" relative">
            <Link href={bottomAdBanner.url} className=' w-full h-full'>
              <Image src={bottomAdBanner.imageUrl} fill alt='image_of_top_ad_banner' className='object-cover object-center rounded-sm'/>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
