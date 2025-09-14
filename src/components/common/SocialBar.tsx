import { socials } from '@/lib/socials'
import Link from 'next/link';
import React from 'react'

const SocialBar = () => {
  const socialHandles = socials;
  return (
    <div className='border-b border-[rgba(255,255,255,0.37)] bg-accentBlue text-white py-4'>
      <div className="container mx-auto flex justify-between items-center">
        <p className='leading-5 text-sm'>Welcome to GadgetBazaar online e-commerce website</p>
        <div className="social flex items-center gap-x-2">
          <span className='leading-5 text-sm me-2'>Follow us</span>
          {
            socialHandles?.map(handle => (
              <Link key={handle.platform} href={handle.url} target='_blank'>
                <span className='hover:opacity-75' title={handle.platform}><handle.icon/></span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SocialBar
