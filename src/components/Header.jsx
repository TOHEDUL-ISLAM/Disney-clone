import React, { useState } from "react";
import DisNiLogo from "../assets/logo/logo";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {

  const [toggle,settoggle]=useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className=" max-w-[1440px] mx-auto flex items-center justify-between  px-[50px] pt-5 place-content-center">
      <div className="flex gap-8 items-center">
        <DisNiLogo size={"text-2xl md:text-4xl "} />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        <div className=" md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem  key={index} name='' Icon={item.icon} />
              )
          )}
          <div className="md:hidden hover"
               onClick={()=>settoggle(!toggle)}>
            <HeaderItem name="" Icon={HiDotsVertical} />
           { toggle? <div className="absolute mt-3 border  p-3 bg-[#121212] border-gray-700 px-5 ">
              {menu.map(
                (item, index) =>
                  index >= 3 && (
                    <HeaderItem
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                    />
                  )
              )}
            </div>:null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[35px] md:w-[40px] rounded-full ml-4 mt-1"
      />
    </div>
  );
};

export default Header;
