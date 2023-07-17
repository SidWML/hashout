import React, { useState } from "react";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Link from "next/link";

export default function HashoutLayout({ children, poppins }) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className={`${poppins} lg:grid grid-cols-5 `}>
      <div
        className={`border-r lg:col-span-1 ${
          sidebar ? " lg:translate-x-0 translate-x-0 lg:w-full  md:w-[40vw]  w-[90vw] " : " lg:translate-x-0  -translate-x-[110%]"
        } lg:py-0 py-[50px]   bg-white duration-300 ease-linear z-[999] lg:sticky h-[100vh] fixed top-0 self-start overflow-y-scroll  `}
      >
        <div className=" lg:block hidden w-full p-6">
          <Link href="/" className=" block  max-w-[30%]">
            <img src="https://wmlit.com/Logo.png" alt="" className="" />
          </Link>
        </div>
        <LeftSidebar sidebaractive={sidebar} />
      </div>
      <div className=" w-full lg:col-span-4  ">
        <div className=" sticky top-0 self-start z-[999]">
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className=" grid grid-cols-6  lg:px-12 lg:py-6 p-2 md:gap-12">
          <div className=" lg:col-span-4 col-span-6 ">{children}</div>
          <div className=" lg:col-span-2 col-span-6 lg:block hidden ">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
