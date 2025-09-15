import Link from "next/link";
import React from "react";

interface SubcategoryPropsType {
  subcategorydata: {
    category: {
      slug: string;
    };
    name: string;
    slug: string;
    isActive: boolean;
  }[] | undefined;
}

const SubcategoryList = ({ subcategorydata }: SubcategoryPropsType) => {
  return (
    <div className="bg-white shadow-xl w-50 flex flex-col justify-start text-start">
      {subcategorydata?.filter(subcategory => subcategory.isActive === true).map((subcategory) => (
        <Link href={`/category/${subcategory.category.slug}/${subcategory.slug}`} className="py-2.5 px-5 hover:bg-gray-300 duration-200 body-small-500 mx-0 text-deepBlack">
          {subcategory.name}
        </Link>
      ))}
    </div>
  );
};

export default SubcategoryList;
