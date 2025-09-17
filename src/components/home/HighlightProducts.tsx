import React from 'react'
import FlashSale from './highlightProductsParts/FlashSale'

const HighlightProducts = () => {
  return (
    <div className='container mx-auto py-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      <FlashSale/>
    </div>
  )
}

export default HighlightProducts
