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
  faSortUp,
  faSortDown,
  faCaretUp,
  faCaretDown,
  faArrowCircleUp,
  faArrowCircleDown,
  faArrowUp,
  faArrowDown,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import Button from "@/generics/Button";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export default function PostCard({ post, socialMedia, view }) {
  const router = useRouter();
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
  function convertToSlug(title) {
    return (
      title &&
      title
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
    );
  }
  const slug = convertToSlug(post.title && post.title);

  return (
    <div className=" ">
      {view === "list" ? (
        <div
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
          className="   list-style bg-white border overflow-hidden block  w-full  rounded-[10px] border-gray-300 "
        >
          <div className=" gap-2 flex items-center border-b p-4  ">
            <Link href={`/community/${post.community}`} className="">
              <img src={post.avatar} alt="" className=" w-[30px] rounded-full h-[30px]" />
            </Link>
            <Link className="block" href={`/community/${post.community}`}>
              <h6 className="py-1.5 px-4 rounded-full bg-[#f5f5f5] font-bold text-sky-500  text-sm">#/{post.community}</h6>
            </Link>
            <span className=" text-xs text-[#9597A1]  font-medium "> posted by {post.name}</span>
            <span className=" text-xs bg-[#f2f2f2] text-slate-500 px-2 py-1 rounded-full  font-medium ">{post.date}</span>
            <button className="px-4 py-1 ml-auto border border-black rounded-full font-medium text-xs">JOIN</button>
          </div>
          <Link onClick={() => viewNavigate(`/post/${slug}`)} href={`/post/${slug}`} className=" flex   ">
            <div className=" gap-2 flex flex-col items-center p-4 border-r">
              <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <span className="">{post.votes}k</span>
              <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
            <div className=" w-full flex p-4 ">
              {post.content.type !== "description" && (
                <div className=" w-[200px] rounded-[10px] overflow-hidden max-h-[150px]  bg-[#f8f8f8] text-slate-800 ">
                  {post.content.type === "image" ? (
                    <img src={post.content.src} alt="" className=" w-full h-full object-cover " />
                  ) : post.content.type === "youtube" ? (
                    post.content.link
                  ) : null}
                </div>
              )}
              <div className=" w-full flex  flex-col px-4 space-y-3 h-full  justify-between  ">
                <h1 className=" font-medium text-2xl text-slate-800 line-clamp-2">{post.title}</h1>
                <p className=" font-normal text-slate-700 line-clamp-2">{post.description}</p>
                <div className="  flex items-center  mt-auto gap-2 text-xs font-medium  ">
                  <button className=" flex items-center gap-1 px-6 py-1.5 bg-[#f2f2f2] rounded-full border">
                    <FontAwesomeIcon icon={faComment} />
                    <span className="">{post.comments}</span>
                    <span className="">comments</span>
                  </button>
                  <button className=" flex items-center gap-1 px-4 py-1.5 bg-[#f2f2f2] rounded-full border">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <span className="">share</span>
                  </button>
                  <button className=" ml-auto">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div
          style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)", backdropFilter: "saturate(180%) blur(5px)", background: "hsla(0,0%,100%,.8)" }}
          className=" border border-gray-300  overflow-hidden  w-full  block rounded-[10px] "
        >
          <div className=" gap-2 flex items-center border-b p-4   ">
            <Link href={`/community/${post.community}`} className="">
              <img src={post.avatar} alt="" className=" max-w-[30px]  rounded-full h-[20px] h-[30px]" />
            </Link>
            <div className=" flex items-center gap-2">
              <Link href={`/community/${post.community}`} className=" block">
                <h6 className="py-1.5 px-4 rounded-full bg-[#f5f5f5] font-bold text-sky-500  text-sm">#/{post.community}</h6>
              </Link>

              <span className=" text-xs md:block hidden text-[#9597A1]  font-medium "> posted by {post.name}</span>
              <span className=" text-xs bg-sky-100 text-slate-500 px-2 py-1 rounded-full  font-medium ">{post.date}</span>
            </div>
            <button className="px-4 py-1 ml-auto border border-black rounded-full font-medium text-xs">JOIN</button>
          </div>
          <div className=" md:flex    ">
            <div className=" gap-2 md:flex hidden md:flex-col flex-row items-center p-4 border-r">
              <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
              <span className="">{post.votes}k</span>
              <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
            <Link onClick={() => viewNavigate(`/post/${slug}`)} href={`/post/${slug}`} className=" w-full p-4 block ">
              <div className=" w-full space-y-3 ">
                <h1 className=" font-medium text-xl text-slate-800">{post.title}</h1>
                <p className=" line-clamp-4 text-slate-700 ">{post.description}</p>
                <div className=" max-w-full   text-slate-800 ">
                  {post.content.type === "image" ? (
                    <img src={post.content.src} alt="" className=" w-full h-full object-cover " />
                  ) : post.content.type === "youtube" ? (
                    post.content.link
                  ) : (
                    post.content.text
                  )}
                </div>
              </div>
              <div className=" w-full flex  md:items-center gap-3  mt-4 ">
                <div className=" gap-2 md:hidden flex  items-center ">
                  <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </button>
                  <span className="">{post.votes}k</span>
                  <button className=" h-[40px] w-[40px] flex items-center justify-center border rounded-[10px] bg-[#f2f2f2]">
                    <FontAwesomeIcon icon={faArrowDown} />
                  </button>
                </div>
                <button className=" flex items-center gap-1 px-6 py-1.5 bg-[#f2f2f2] rounded-full border">
                  <FontAwesomeIcon icon={faComment} />
                  <span className="">{post.comments}</span>
                  <span className=" md:block hidden">comments</span>
                </button>
                <button className=" flex items-center gap-1 px-6 py-1.5 bg-[#f2f2f2] rounded-full border">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <span className=" md:block hidden">share</span>
                </button>
                <div className=" flex items-center justify-center ml-auto">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
