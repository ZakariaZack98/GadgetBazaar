'use client'
import { categories } from '@/lib/Categories';
import { Icons } from '@/lib/icons';
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import CategorySelector from './CategorySelector';
import MenubarOption from './MenubarOptions';
import MenubarOptions from './MenubarOptions';



interface SelectedCategoryType {
  category: string;
  subcategory: string;
}


const Menubar = () => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategoryType>({
    category: 'All',
    subcategory: 'All'
  });
  const categoryList = categories;

  const handleValueChange = (value: string):void => {
    setSelectedCategory({
      category: value,
      subcategory: 'All'
    })
  }

  return (
    <div className='py-4 border border-gray-300 !font-public-sans'>
      <div className="container mx-auto flex justify-between items-center">
        {/* =========================== Category side ============================= */}
        <div className="flex items-center gap-x-6">
          <CategorySelector categories={categoryList} placeholder='All Category' onValueChange={handleValueChange}/>
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
