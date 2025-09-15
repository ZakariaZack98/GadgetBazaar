import { categories } from '@/lib/Categories';
import { Icons } from '@/lib/icons';
import React from 'react'
import CategorySelector from './CategorySelector';
import MenubarOptions from './MenubarOptions';


const Menubar = () => {
  const categoryList = categories;


  return (
    <div className='py-4 border border-gray-300 !font-public-sans'>
      <div className="container mx-auto flex justify-between items-center">
        {/* =========================== Category side ============================= */}
        <div className="flex items-center gap-x-6">
          <CategorySelector categories={categoryList} />
          <MenubarOptions/>
        </div>
        {/* =========================== Hotline Side ============================ */}
        <div className="flex items-center gap-x-2">
          <span><Icons.hotline/></span>
          <span className='body-large-400 text-deepBlack'>{'+88 01782 344161'}</span>
        </div>
      </div>
    </div>
  )
}

export default Menubar;
