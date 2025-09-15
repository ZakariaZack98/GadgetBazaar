import { menubarOptionsData } from "@/lib/menubarOptionsData";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface menubarDataType {
    label: string;
    path: string;
    icon: IconType;
};

const MenubarOptions = () => {
  const menubarData: menubarDataType[] = menubarOptionsData;
  console.log(menubarData)
  return (
    <>
      {menubarData?.map((option) => (
        <Link key={option.path} href={option.path} className="flex items-center gap-x-1.5">
          <span>
            <option.icon />
          </span>
          <span className="body-small-400 text-lightBlack">{option.label}</span>
        </Link>
      ))}
    </>
  );
};

export default MenubarOptions;
