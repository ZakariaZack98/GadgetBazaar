import React from 'react'
import FlashSale from './highlightProductsParts/FlashSale'
import BestSeller from './highlightProductsParts/BestSeller'
import TopRated from './highlightProductsParts/TopRated'
import NewArrival from './highlightProductsParts/NewArrival'

const HighlightProducts = () => {
  return (
    <div className='container mx-auto py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      <FlashSale/>
      <BestSeller/>
      <TopRated/>
      <NewArrival/>
    </div>
  )
}

export default HighlightProducts
