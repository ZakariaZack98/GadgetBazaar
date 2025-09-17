import { bannerSectionData } from '@/lib/bannerSection'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const BannerSection = () => {
  //fetch banner asset data here ========================
  const bannerSectionAssets = bannerSectionData;
  const { leftBanner, rightBanner } = bannerSectionAssets;

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 h-84 gap-6'>
      <Link href={leftBanner.url} className='relative h-full w-full '>
        <Image
          src={leftBanner.image.url}
          alt='left_banner_image'
          fill
          className='object-cover object-center rounded-md'
        />
      </Link>
      <Link href={rightBanner.url} className='relative h-full w-full '>
        <Image
          src={rightBanner.image.url}
          alt='right_banner_image'
          fill
          className='object-cover object-center rounded-md'
        />
      </Link>
    </div>
  )
}

export default BannerSection
