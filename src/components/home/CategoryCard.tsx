import React from "react";

interface categoryCardPropsType {
  category: {
    _id: string;
    name: string;
    slug: string;
    image: {
      url: string;
      publicId: string;
    };
    subcategory: {
      name: string;
      slug: string;
      isActive: boolean;
      category: {
        slug: string;
      };
    }[];
    isActive: boolean;
  };
}

const CategoryCard = ({category}: categoryCardPropsType) => {
  return <div className="border border-gray-300 p-6 flex flex-col justify-center items-center gap-4 h-59 w-full text-deepBlack bg-white">
    <picture className="h-7/10">
      <img src={category.image.url} alt={`image of ${category.name}`} className="h-full object-cover object-center"/>
    </picture>
    <p className="text-center body-medium-500">{category.name}</p>
  </div>;
};

export default CategoryCard;
