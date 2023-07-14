import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faSearch,
  faChevronDown,
  faUser,
  faLock,
  faRightFromBracket,
  faGear,
  faHome,
  faFire,
  faUserGroup,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover, Transition } from "@headlessui/react";
import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({ setSidebar, sidebar }) {
  const [searchbarDropdown, setsearchbarDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const Notification = [
    {
      name: "Winnie Brewer",
      image: "/top-posts/tp-1.png",
      date: "01 Apr 2016",
      postTitle: "Last Minute Festive Packages From Superbreak",
      avatar: "/top-posts/ta-5.png",
      liked: true,
      disliked: false,
      followed: false,
    },
    {
      name: "Alberta Gibson ",
      image: "/top-posts/tp-2.png",
      date: "01 Apr 2016",
      postTitle: "Three Ways To Get Travel Discounts",
      avatar: "/top-posts/ta-6.png",
      liked: false,
      disliked: false,
      followed: true,
    },
    {
      name: "Nia ",
      image: "/top-posts/tp-2.png",
      date: "01 Apr 2016",
      postTitle: "Three Ways To Get Travel Discounts",
      avatar: "/top-posts/ta-3.png",
      liked: true,
      disliked: false,
      followed: false,
    },
    {
      name: "Glenn ",
      image: "/top-posts/tp-2.png",
      date: "01 Apr 2016",
      postTitle: "Three Ways To Get Travel Discounts",
      avatar: "/top-posts/ta-4.png",
      liked: true,
      disliked: false,
      followed: false,
    },
  ];
  const search = [
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

  const navbarLinks = [
    {
      name: "Home",
      icon: <FontAwesomeIcon className=" text-md" icon={faHome} />,
    },
    {
      name: "Trending",
      icon: <FontAwesomeIcon className=" text-md" icon={faFire} />,
    },
    {
      name: "News Feed",
      icon: <FontAwesomeIcon className=" text-md" icon={faNewspaper} />,
    },
  ];

  return (
    <div className="  py-3 lg:px-0 px-3  z-[999] w-full    bg-white border-b ">
      <div className=" w-[95%] mx-auto justify-between gap-4 flex items-center">
        <div onClick={() => setSidebar(!sidebar)} className=" lg:hidden flex flex-col gap-2 cursor-pointer">
          <div
            style={{ transformOrigin: "center" }}
            className={` ${sidebar ? " translate-y-[12px] rotate-45 " : " translate-y-0 "} duration-300 ease-out w-[35px] h-[3px] bg-black `}
          ></div>
          <div className={` ${sidebar ? " opacity-0 scale-0 " : " translate-y-0 "} duration-300 ease-out w-[35px] h-[3px] bg-black `}></div>
          <div
            style={{ transformOrigin: "center" }}
            className={` ${sidebar ? " translate-y-[-10px]  -rotate-45 " : " translate-y-0 "} duration-300 ease-out w-[35px] h-[3px] bg-black `}
          ></div>
        </div>
        <div className=" lg:hidden block max-w-[10%]">
          <img src="https://wmlit.com/Logo.png" alt="" className="" />
        </div>
        <div className=" lg:w-[60%] w-full md:block hidden relative ">
          <div className=" relative w-full   z-[888]">
            <input
              onClick={() => setsearchbarDropdown(!searchbarDropdown)}
              style={{ width: "100% !important" }}
              type="text"
              placeholder="Find Community or Posts"
              className="  focus:outline-[#0ba8e0] pl-12 pr-4 w-full placeholder:text-sm placeholder:font-light py-3 rounded-[10px] text-black bg-[#f5f5f5] "
            />
            <FontAwesomeIcon icon={faSearch} className=" absolute top-[50%] text-slate-400 -translate-y-[50%] left-[15px] " />
            <div
              className={`absolute shadow-xl rounded-[10px] text overflow-hidden right-[0%]  left-0  z-[888] w-full  ${
                searchbarDropdown ? "full translate-y-0  " : " translate-y-3 "
              } `}
            >
              <div className="w-full space-y-6 bg-white p-6  ">
                <div className="">
                  <h1 className=" text-sm font-medium w-full flex items-center justify-between uppercase text-slate-400 mb-4 pl-6">
                    {" "}
                    <span className="">PEOPLE</span> <span className=" text-sky-500 cursor-pointer">View All</span>{" "}
                  </h1>
                  <div className=" grid lg:grid-cols-6 md:grid-cols-3 gap-3  ">
                    {search[0].peoples.map((item) => (
                      <div className=" flex  space-y-2 items-center flex-col">
                        <img src={item.avatar} alt="" className="" />
                        <h1 className=" font-medium text-lg">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h1 className=" text-sm font-medium uppercase flex items-center justify-between text-slate-400 mb-4 pl-6">
                    {" "}
                    <span className="">PAGES</span> <span className=" text-sky-500 cursor-pointer">View All</span>{" "}
                  </h1>
                  <div className=" grid lg:grid-cols-6 md:grid-cols-3 gap-3    ">
                    {search[1].peoples.map((item) => (
                      <div className=" flex min-w-[max-content] space-y-2 items-center flex-col">
                        <img src={item.avatar} alt="" className="w-[60px] h-[60px] rounded-full" />
                        <h1 className=" font-medium text-sm">{item.name}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center space-x-8">
          <Popover className=" relative ml-auto z-[888]">
            <Popover.Button>
              <div className=" relative">
                <FontAwesomeIcon className=" text-2xl" icon={faBell} />
                <span className=" w-[20px] absolute top-[-10px] right-[-10px] rounded-full flex items-center justify-center bg-red-400 text-white font-medium text-xs h-[20px]">
                  6{" "}
                </span>
              </div>
            </Popover.Button>

            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Popover.Panel className="absolute shadow-xl rounded-[10px] overflow-hidden lg:-right-[10%] lg:translate-x-[10%] z-[888] md:w-[400px] w-[350px] right-[0%] translate-x-0 ">
                <div className="     bg-white">
                  <ul className=" w-full">
                    {Notification.map((item) => (
                      <li className=" flex gap-2 p-4 border-b">
                        <img src={item.avatar} alt="" className="w-[40px] h-[40px]" />
                        <div className=" ">
                          <h1 className=" font-medium text-sm text-sky-500">{item.name}</h1>
                          <p className=" text-sm font-medium text-[#414d54]">
                            {item.liked ? `liked \ "${item.postTitle}"` : item.disliked ? `disliked "${item.postTitle}"` : "started following you"}{" "}
                          </p>
                          <p className=" text-xs font-medium text-[#9597A1]">{item.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button className=" font-medium text-center mx-auto block text-xs py-4 text-[#9597A1]">Load more</button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {loggedIn ? (
            <Popover className=" relative lg:block hidden z-[888]">
              <Popover.Button className=" outline-none">
                <div className=" flex items-center space-x-2 border py-1.5 px-4 rounded-[10px]  bg-gradient-to-b drop-shadow-sm from-slate-100 to-white">
                  <div className=" w-[40px] h-[40px]">
                    <img src="/ellipse.png" alt="" className=" w-full h-full" />
                  </div>
                  <div className=" flex items-center space-x-2">
                    <h1 className=" font-medium ">Peter Griffin</h1>
                    <FontAwesomeIcon icon={faChevronDown} className=" text-slate-400" />
                  </div>
                </div>
              </Popover.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Popover.Panel className="absolute shadow-xl rounded-[10px] min-w-[max-content] p-6 top-[10px] bg-white overflow-hidden right-[100%] translate-x-[50%] z-[888] ">
                  <div className=" w-full flex flex-col space-y-2">
                    <div className=" flex items-center space-x-4  ">
                      <div className=" min-w-[80px] h-[80px]">
                        <img src="/ellipse.png" alt="" className=" w-full h-full" />
                      </div>
                      <div className=" w-full">
                        <h1 className=" font-medium text-2xl">Peter Griffin</h1>
                        <p className=" text-[#9597A1]">Musician</p>
                      </div>
                    </div>
                    <div className=" w-full flex flex-col">
                      <Link href="" className=" py-2 space-x-2 border-[#E6F0F2] border-b">
                        {" "}
                        <FontAwesomeIcon icon={faUser} /> <span>Account</span>{" "}
                      </Link>
                      <Link href="" className=" py-2 space-x-2 border-[#E6F0F2] border-b">
                        {" "}
                        <FontAwesomeIcon icon={faLock} /> <span>Privacy</span>{" "}
                      </Link>
                      <Link href="" className=" py-2 space-x-2 border-[#E6F0F2] ">
                        {" "}
                        <FontAwesomeIcon icon={faGear} /> <span> Settings</span>{" "}
                      </Link>
                      <Link href="" className=" py-2 space-x-2 border-[#E6F0F2] ">
                        {" "}
                        <FontAwesomeIcon icon={faRightFromBracket} /> <span> Logout</span>{" "}
                      </Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          ) : (
            <Link
              className=" px-6 py-2 rounded-full border  border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium text-sm"
              href="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
