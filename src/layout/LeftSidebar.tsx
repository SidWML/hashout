import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faRss,
  faHome,
  faCodeFork,
  faFire,
  faNewspaper,
  faUserGroup,
  faHandFist,
  faClapperboard,
  faBaseball,
  faCirclePlay,
  faImage,
  faMicrochip,
  faGear,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import Button from "@/generics/Button";

export const search = [
  {
    type: "PEOPLE",
    peoples: [
      {
        name: "Kylie",
        avatar: "/search/sa-1.png",
      },
      {
        name: "Johnatan",
        avatar: "/search/sa-2.png",
      },
      {
        name: "Jessica",
        avatar: "/search/sa-4.png",
      },
      {
        name: "Kate",
        avatar: "/search/sa-5.png",
      },
      {
        name: "Tomimi",
        avatar: "/search/sa-6.png",
      },
    ],
  },
  {
    type: "PAGES",
    peoples: [
      {
        name: "Sailor",
        avatar: "/search/pa-1.png",
      },
      {
        name: "Adventure",
        avatar: "/search/pa-2.png",
      },
      {
        name: "San Diego Trip",
        avatar: "/search/pa-3.png",
      },
      {
        name: "Goa",
        avatar: "/search/pa-4.png",
      },
      {
        name: "Tomimi",
        avatar: "/search/pa-5.png",
      },
    ],
  },
];

export default function LeftSidebar({ sidebaractive }) {
  const [searchbarDropdown, setsearchbarDropdown] = useState(false);

  const sidebar = [
    {
      name: "Home",
      icon: <FontAwesomeIcon className=" text-md" icon={faHome} />,
      href:"/"
    },
    {
      name: "Trending",
      icon: <FontAwesomeIcon className=" text-md" icon={faFire} />,
      href:"/"
    },
    {
      name: "News Feed",
      icon: <FontAwesomeIcon className=" text-md" icon={faNewspaper} />,
      href:"/"
    },
  ];

  const community = [
    {
      name: "Movies",
      icon: <FontAwesomeIcon className=" text-md" icon={faClapperboard} />,
      categories: ["Hollywood", "Bollywood", "Tollywood", "Sandlewood"],
    },
    {
      name: "Cricket",
      icon: <FontAwesomeIcon className=" text-md" icon={faBaseball} />,
    },
    {
      name: "Politics",
      icon: <FontAwesomeIcon className=" text-md" icon={faHandFist} />,
      categories: ["National", "World", "Telangana", "Andrapradesh"],
    },
    {
      name: "Pictures",
      icon: <FontAwesomeIcon className=" text-md" icon={faImage} />,
    },
    {
      name: "Videos",
      icon: <FontAwesomeIcon className=" text-md" icon={faCirclePlay} />,
    },
    {
      name: "Technology",
      icon: <FontAwesomeIcon className=" text-md" icon={faMicrochip} />,
    },
  ];

  const subscribed = [
    {
      name: "#/fans-legendpunitkumar",
    },
    {
      name: "#/elonmusk",
    },
    {
      name: "#/Jucks-threads",
    },
    {
      name: "#/cricket",
    },
    {
      name: "#/Messi",
    },
    {
      name: "#/Mission-Impossible",
    },
  ];

  return (
    <div
      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
      className={` lg:rounded-[10px]   z-[5] relative bg-[white]  w-full   p-6 ${
        sidebaractive ? " h-[100%] overflow-y-scroll lg:overflow-hidden lg:w-full w-[300px] " : "  "
      }`}
    >
      <div className=" flex lg:hidden items-center space-x-2  py-4 border-b mb-4 ">
        <Link href="/" className=" min-w-[40px] h-[40px]">
          <img src="/ellipse.png" alt="" className=" w-full h-full" />
        </Link>
        <div className=" flex items-center space-x-2 w-full justify-between">
          <h1 className=" font-medium ">Peter Griffin</h1>
          <FontAwesomeIcon icon={faChevronRight} className=" text-slate-400" />
        </div>
      </div>
      <div className=" relative md:hidden block my-3">
        <div className="w-full  relative overflow-hidden ">
          <input
            onClick={() => setsearchbarDropdown(!searchbarDropdown)}
            style={{ width: "100% !important" }}
            type="text"
            placeholder="Search...."
            className=" border pr-12 pl-4 outline-sky-500 focus:ring-sky-500 rounded-[10px] w-full drop-shadow-sm py-3   bg-[#f5f5f6] "
          />
          <FontAwesomeIcon icon={faSearch} className=" absolute top-[50%] text-slate-400 -translate-y-[50%] right-[15px] " />
        </div>
        <div className={` mt-4 text ${searchbarDropdown ? " full " : " "} `}>
          <div className="w-full space-y-6 bg-white  ">
            <div className="">
              <h1 className=" text-sm font-medium w-full flex items-center justify-between uppercase text-slate-400 mb-4 ">
                {" "}
                <span className="">PEOPLE</span> <span className=" text-sky-500 cursor-pointer">View All</span>{" "}
              </h1>
              <div className="  gap-3  ">
                {search[0].peoples.map((item) => (
                  <div className=" flex gap-2 py-2 border-b  border-[#E6F0F2]  items-center ">
                    <img src={item.avatar} alt="" className=" w-[30px] h-[30px] " />
                    <h1 className=" font-medium text-lg">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <h1 className=" text-sm font-medium uppercase flex items-center justify-between text-slate-400 mb-4 ">
                {" "}
                <span className="">PAGES</span> <span className=" text-sky-500 cursor-pointer">View All</span>{" "}
              </h1>
              <div className="   ">
                {search[1].peoples.map((item) => (
                  <div className=" flex gap-2 py-2 border-b  border-[#E6F0F2]  items-center">
                    <img src={item.avatar} alt="" className="w-[30px] h-[30px] rounded-full" />
                    <h1 className=" font-medium text-sm">{item.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col  pb-4  border-b border-[#E6F0F2]">
        <h1 className=" text-sm font-medium text-slate-400 mb-2">FEEDS</h1>
        {sidebar.map((barlinks) => (
          <Link className=" text-slate-600 w-full  border-slate-100 gap-2 py-1 flex items-center" href={barlinks.href}>
            {" "}
            <span className="w-[30px]  flex items-center justify-center">{barlinks.icon}</span> <span className="  text-md">{barlinks.name}</span>{" "}
          </Link>
        ))}
      </div>
      <div className=" w-full flex flex-col  py-4  border-b border-[#E6F0F2] ">
        <h1 className=" text-sm font-medium uppercase mb-2 text-slate-400">Community</h1>
        {community.map((bar) =>
          bar.categories ? (
            <Popover className="w-full">
              <Popover.Button className="w-full">
                <div className=" text-slate-600 w-full flex items-center justify-between  border-slate-100 gap-2 py-1 flex items-center">
                  {" "}
                  <span className="w-[30px]  flex items-center justify-center">{bar.icon}</span>
                  <span className="  text-md">{bar.name}</span> <FontAwesomeIcon className="text-[#A0B2B8] ml-auto" icon={faChevronDown} />{" "}
                </div>
              </Popover.Button>

              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel>
                  <div className=" pl-10 bg-[#f7f7f7] rounded-xl py-2 ">
                    {bar.categories.map((category) => (
                      <Link className=" text-slate-500 w-full  border-slate-100 gap-2 py-1 flex items-center" href="">
                        {" "}
                        <span className=" text-md">{category}</span>{" "}
                      </Link>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          ) : (
            <Link className=" text-slate-600 w-full  border-slate-100 gap-2 py-1 flex items-center" href="">
              <span className="w-[30px]  flex items-center justify-center">{bar.icon}</span> <span className="  text-md">{bar.name}</span>{" "}
            </Link>
          )
        )}
      </div>
      <div className=" w-full flex flex-col  py-4  border-b border-[#E6F0F2]">
        <h1 className=" text-sm font-medium text-slate-400 mb-2">SUBSCRIBED</h1>
        {subscribed.map((bar) => (
          <Link className=" text-slate-600 w-full  border-slate-100 gap-2 py-1 flex items-center" href="">
            {" "}
            <span className="  text-md">{bar.name}</span>{" "}
          </Link>
        ))}
      </div>
      <div className=" pt-4">
        <Link className=" text-slate-600 w-full  border-slate-100 gap-2 py-1 flex items-center" href="">
          {" "}
          <span className="w-[30px]  flex items-center justify-center">
            <FontAwesomeIcon icon={faGear} />
          </span>{" "}
          <span className=" font-medium text-lg">Settings</span>{" "}
        </Link>
      </div>
      <div className=" w-full  flex items-center mt-12 justify-center">
        <Button label="Logout" />
      </div>
    </div>
  );
}
