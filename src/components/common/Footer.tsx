import { categories } from "@/lib/Categories";
import { menubarOptionsData } from "@/lib/menubarOptionsData";
import { popularTags } from "@/lib/popularTags";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // * Fetch part ============================
  const categoryData = categories.slice(0, 7);
  const quickLinksData = menubarOptionsData;
  const popularTagsData = popularTags;
  // * Fetch part ============================
  return (
    <div className="flex-col bg-deepBlack text-white">
      {/* =================================== Main footer part ================================ */}
      <div className="container mx-auto py-18 grid grid-cols-12 gap-4 text-white">
        {/* ========== Company details ========== */}
        <div className="col-span-3">
          <h3 className="text-3xl font-bold mb-3">GadgetBazaar</h3>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col">
              <p className="text-bannerGray text-xs">Customer support</p>
              <p className="text-xl">+912 2323 232 21</p>
            </div>
            <p className="text-gray-500 body-medium-500 w-5/7">231B, Menx Avenue, 27th Esco Strt, Kentucky, USA</p>
            <p className="text-gray-200 body-medium-500">info@gadgetbazaar.com</p>
          </div>
        </div>
        {/* ========== Top Categories ========== */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-4">TOP CATEGORIES</h4>
          {categoryData?.map((category) => (
            <div key={category._id} className="flex items-center gap-1 group my-3">
              <span className="h-0.5 w-0 bg-accentYellow group-hover:w-5  duration-200"></span>
              <Link
                href={`category/${category.slug}`}
                className="body-medium-500 text-gray-400 group-hover:text-white ">
                {category.name}
              </Link>
            </div>
          ))}
          <Link href='/category/all' className="body-medium-500 text-accentYellow ms-1">Browse all products →</Link>
        </div>
        {/* ========== Quick Links ========== */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
          <div className="flex items-center gap-1 group my-3">
              <span className="h-0.5 w-0 bg-accentYellow group-hover:w-5  duration-200"></span>
              <Link
                href={`/wishlist`}
                className="body-medium-500 text-gray-400 group-hover:text-white ">
                Wishlist
              </Link>
            </div>
          <div className="flex items-center gap-1 group my-3">
              <span className="h-0.5 w-0 bg-accentYellow group-hover:w-5  duration-200"></span>
              <Link
                href={`/cart`}
                className="body-medium-500 text-gray-400 group-hover:text-white ">
                Shopping Cart
              </Link>
            </div>
          {quickLinksData?.map((link) => (
            <div key={link.label} className="flex items-center gap-1 group my-3">
              <span className="h-0.5 w-0 bg-accentYellow group-hover:w-5  duration-200"></span>
              <Link
                href={`category/${link.path}`}
                className="body-medium-500 text-gray-400 group-hover:text-white ">
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        {/* ========== download app ========== */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-4">DOWNLOAD APP</h4>
          <div className="flex flex-col gap-3">
            <Link href={'https://playstore.google.com/gadgetbazaar'}>
              <picture>
                <img src="/images/banner/playstore.png" alt="playstore_banner" />
              </picture>
            </Link>
            <Link href={'https://appstore.apple.com/gadgetbazaar'}>
              <picture>
                <img src="/images/banner/appstore.png" alt="appstore_banner" />
              </picture>
            </Link>
          </div>
        </div>
        {/* ========== Popular tags ========== */}
        <div className="col-span-3">
          <h4 className="text-lg font-semibold mb-4">POPULAR TAGS</h4>
          <div className="flex gap-1 flex-wrap">
            {
            popularTagsData?.map(tag => (
              <Link href={`/tags/${tag.slug}`} className="py-1 px-2 border border-gray-400 body-large-500 hover:bg-gray-800">{tag.tagName}</Link>
            ))
          }
          </div>
        </div>
      </div>
      {/* =================================== credit/copyright ================================ */}
      <p className="text-center text-bannerGray py-6 border-t border-gray-800"> Developed by Zakaria &copy; 2025</p>
    </div>
  );
};

export default Footer;
