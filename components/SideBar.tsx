import React from "react";
import Image from "next/image";
const SideBar = () => {
  return (
    <aside className="fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-sm w-[20rem]">
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          width={35}
          alt=""
          className="w-12 mx-3.5 min-h-fit"
          height={35}
          src="/DZ-logos_white.png"
        />
        <h1 className="pl-2 font-bold text-2xl text-[#e6e9ee]">Dashboard</h1>
      </div>
    </aside>
  );
};

export default SideBar;
