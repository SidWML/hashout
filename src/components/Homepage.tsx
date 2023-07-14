import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronDown,
  faCamera,
  faFile,
  faPaperclip,
  faThumbsUp,
  faThumbsDown,
  faShareNodes,
  faShare,
  faEllipsisVertical,
  faTrash,
  faEdit,
  faVideo,
  faLink,
  faAdd,
  faList,
  faColumns,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Link from "next/link";
import Button from "@/generics/Button";
import { Popover, Transition } from "@headlessui/react";
import PostCard from "@/generics/PostCard";
import { useRouter } from "next/router";
import { posts } from "@/libs/Posts";

export const comments = [
  {
    slug: "lele-pons",
    name: "Lele Pons",
    avatar: "/top-posts/ta-4.png",
    image: "/post-1.png",
    date: "38m ago",
    postTitle: "HAPPY BIRTHDAY BESTIE! Love you and wish you the best day ever. 🎉😘",
    reactions: {
      likes: "333k",
      shares: "565k",
      dislikes: "50k",
    },
    comments: [
      {
        name: "Matthew Garner ",
        avatar: "/avatar-3.png",
        comment: "It was at that moment Amanda knew she was done",
      },
      {
        name: "Katherine Hughes ",
        avatar: "/avatar-2.png",
        comment: "YES YES YES YES I LOVE THIS 😂😂😂😂😂😂",
      },
      {
        name: "Clayton Ramirez ",
        avatar: "/avatar-3.png",
        comment: "what did I just see this is straigh boss all the way through - a h m a z i n g 💦💦💦💦💦💦💦💦💦💦💦💦💦💦",
      },
    ],
  },
  {
    slug: "lele-pons",
    name: "Lele Pons",
    avatar: "/top-posts/ta-4.png",
    date: "38m ago",
    postTitle: "Twitter Lawyer Will Sue Facebbok for Threads app",
    reactions: {
      likes: "333k",
      shares: "565k",
      dislikes: "50k",
    },
    comments: [
      {
        name: "Matthew Garner ",
        avatar: "/avatar-3.png",
        comment: "It was at that moment Amanda knew she was done",
      },
      {
        name: "Katherine Hughes ",
        avatar: "/avatar-2.png",
        comment: "YES YES YES YES I LOVE THIS 😂😂😂😂😂😂",
      },
      {
        name: "Clayton Ramirez ",
        avatar: "/avatar-3.png",
        comment: "what did I just see this is straigh boss all the way through - a h m a z i n g 💦💦💦💦💦💦💦💦💦💦💦💦💦💦",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "WhatsApp",
    icon: "/social-media/whatsapp.png",
  },
  {
    name: "Facebook",
    icon: "/social-media/facebook.png",
  },
  {
    name: "Instagram",
    icon: "/social-media/instagram.png",
  },
  {
    name: "Twitter",
    icon: "/social-media/twitter.png",
  },
  {
    name: "Telegram",
    icon: "/social-media/telegram.png",
  },
  {
    name: "Linkedin",
    icon: "/social-media/linkedin.png",
  },
];
export default function Homepage() {
  const router = useRouter();
  const [View, setView] = useState("");
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return router.push("/");
    } else {
      return document.startViewTransition(() => {
        router.push(newRoute);
      });
    }
  };

  const quickTabs = ["Best", "Hot", "Trending", "Top", "Rising"];

  return (
    <div className=" w-full min-h-[100vh] flex flex-col gap-4  rounded-[10px]  ">
      <div
        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
        className=" flex flex-col justify-between md:gap-2 gap-3 border border-slate-300  w-full p-4 rounded-[10px]  bg-white "
      >
        <div className=" flex  gap-2 w-full ">
          <Link href="" className=" block w-[40px] h-[40px]">
            <img src="/ellipse.png" alt="" className=" w-full h-full" />
          </Link>
          <Link href="/create" className=" w-full relative ">
            <input
              onClick={() => viewNavigate("/create")}
              placeholder="Create a post"
              className=" placeholder:font-light pr-12 pl-4 drop-shadow-sm py-2 w-full rounded-[10px] focus:outline-[#0ba8e0]  bg-[#f8f8f8] "
            />
            <FontAwesomeIcon icon={faSearch} className=" absolute top-[50%] text-slate-400 -translate-y-[50%] right-[15px] " />
          </Link>
        </div>
        <div className="   flex items-center md:gap-2 gap-3  flex-wrap  md:justify-end">
          <div className=" flex items-center justify-between gap-2 text-xs ">
            <Link
              href="/create"
              onClick={() => viewNavigate("/create")}
              className=" px-4 py-2 rounded-[10px] space-x-2 min-w-[max-content] bg-[#f5f5f5]"
            >
              <label htmlFor="image">
                <FontAwesomeIcon icon={faCamera} />
              </label>
              <span className="">Image</span>
            </Link>
            <Link
              href="/create"
              onClick={() => viewNavigate("/create")}
              className=" px-4 py-2 rounded-[10px] space-x-2 min-w-[max-content] bg-[#f5f5f5]"
            >
              <label htmlFor="image">
                <FontAwesomeIcon icon={faVideo} />
              </label>
              <span className="">Video</span>
            </Link>
            <Link
              href="/create"
              onClick={() => viewNavigate("/create")}
              className=" px-4 py-2 rounded-[10px] space-x-2 min-w-[max-content] bg-[#f5f5f5]"
            >
              <label htmlFor="image">
                <FontAwesomeIcon icon={faLink} />
              </label>
              <span className="">Link</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button label="Post" />
            <Link href="/create" className=" px-6 py-2 font-medium border border-black text-black text-sm bg-white rounded-full">
              {" "}
              <FontAwesomeIcon icon={faAdd} /> Community
            </Link>
          </div>
        </div>
      </div>
      <div className="  px-4 ">
        <div className=" flex items-center  min-w-[max-content] gap-2">
          <div className=" p-1 border w-[max-content] bg-gradient-to-r from-slate-100 backdrop-blur-md to-[#f5f5f5] rounded-[10px]">
            {quickTabs.map((tab, index) => (
              <button className={` rounded-[8px] overflow-hidden ${index === 0 ? " text-white bg-black " : " "}`}>
                <div className=" px-4 py-2  ">{tab}</div>
              </button>
            ))}
          </div>

          <div className=" ml-auto md:flex hidden items-center gap-2">
            <span className=" font-medium text-sm">View :</span>
            <button
              onClick={() => {
                View === "list" ? setView("grid") : setView("list");
              }}
              className="px-4 py-2 bg-white rounded-[10px]"
            >
              <FontAwesomeIcon icon={View === "list" ? faList : faColumns} />
            </button>
          </div>
        </div>
      </div>
      {posts.map((post) => (
        <PostCard view={View} socialMedia={socialMedia} post={post} />
      ))}
    </div>
  );
}
