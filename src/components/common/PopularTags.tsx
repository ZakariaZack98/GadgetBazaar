import { popularTags } from '@/lib/popularTags';
import Link from 'next/link';
import React from 'react'

const PopularTags = () => {
  //fetch
  const popularTagsData = popularTags;


  return (
    <div className="col-span-3">
          <h4 className="text-lg font-semibold mb-4">POPULAR TAGS</h4>
          <div className="flex gap-1 flex-wrap">
            {
            popularTagsData?.map(tag => (
              <Link key={tag.slug} href={`/tags/${tag.slug}`} className="py-1 px-2 border border-gray-400 body-large-500 hover:bg-gray-800">{tag.tagName}</Link>
            ))
          }
          </div>
        </div>
  )
}

export default PopularTags