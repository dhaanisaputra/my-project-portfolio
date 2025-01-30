import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          SOFTWARE<span className="text-yellow-400"> ENGINEER</span>
        </h1>
        <Link href={"/"} className="nav-link">
          Home
        </Link>
        <Link href={"#about"} className="nav-link">
          About
        </Link>
        <Link href={"#services"} className="nav-link">
          Services
        </Link>
        <Link href={"#projects"} className="nav-link">
          Project
        </Link>
        <Link href={"#contact"} className="nav-link">
          Contact
        </Link>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
