import { Icons } from '@/lib/icons';
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';

interface MenubarProps {
  menubarData: {
    label: string;
    path: string;
    icon: IconType;
  }[];
  phone: string;
}


const Menubar = ({ menubarData, phone }: MenubarProps) => {
  return (
    <div className='py-4 border border-gray-300'>
      <div className="container mx-auto flex justify-between items-center">
        {/* =========================== Category side ============================= */}
        <div className="flex items-center gap-x-6">
          {
            menubarData?.map((option) => (
              <Link href={option.path} className='flex items-center gap-x-1.5'>
                <span><option.icon/></span>
                <span className='body-small-400 text-lightBlack'>{option.label}</span>
              </Link>
            ))
          }
        </div>
        {/* =========================== Hotline Side ============================ */}
        <div className="flex items-center gap-x-2">
          <span><Icons.hotline/></span>
          <span className='body-large-400 text-deepBlack'>{phone}</span>
        </div>
      </div>
    </div>
  )
}

export default Menubar;
