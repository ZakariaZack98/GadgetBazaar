// components/common/Breadcrumb.tsx
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

// A simple utility to format a slug into a readable string
const formatSlug = (slug: string) => {
  // Replace hyphens with spaces and capitalize the first letter of each word
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="bg-bannerGray">
      <nav className="container mx-auto flex items-center text-sm text-gray-500 py-4">
        <Link
          href="/"
          className="flex items-center hover:text-gray-700 transition-colors"
        >
          <FaHome className="mr-2 text-gray-400" />
          Home
        </Link>

        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const formattedSegment = formatSlug(segment);

          return (
            <React.Fragment key={path}>
              <BiChevronRight className="mx-2 text-gray-400" />
              {isLast ? (
                <span className="text-gray-900">{formattedSegment}</span>
              ) : (
                <Link
                  href={path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {formattedSegment}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumb;
