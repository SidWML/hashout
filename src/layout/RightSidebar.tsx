import React from "react";
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
  faArrowCircleUp,
  faArrowUp,
  faArrowDown,
  faComment,
  faUsers,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button from "@/generics/Button";
import { posts } from "@/libs/Posts";
import { useRouter } from "next/router";

export default function RightSidebar() {
  const router = useRouter();

  const trendingposts = [
    {
      name: "Winnie Brewer",
      image: "/top-posts/tp-1.png",
      date: "01 Apr 2016",
      postTitle: "Last Minute Festive Packages From Superbreak",
      avatar: "/top-posts/ta-1.png",
    },
    {
      name: "Alberta Gibson ",
      image: "/top-posts/tp-2.png",
      date: "01 Apr 2016",
      postTitle: "Three Ways To Get Travel Discounts",
      avatar: "/top-posts/ta-2.png",
    },
  ];

  const people = [
    {
      name: "Nia",
      avatar: "/top-posts/ta-3.png",
    },
    {
      name: "Glenn",
      avatar: "/top-posts/ta-5.png",
    },
    {
      name: "Elizebeth",
      avatar: "/top-posts/ta-6.png",
    },
    {
      name: "Amanda",
      avatar: "/top-posts/ta-4.png",
    },
  ];
  const viewNavigate = (newRoute) => {
    if (!document.startViewTransition) {
      return router.push("/");
    } else {
      return document.startViewTransition(() => {
        router.push(newRoute);
      });
    }
  };
  return (
    <div className=" flex flex-col gap-3">
      <div
        style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
        className="   z-[5] relative space-y-2 bg-[white]  rounded-[10px] w-full border border-gray-300 p-4 "
      >
        <h6 className=" text-slate-600">Have your own community</h6>
        <h1 className=" font-medium text-xl">Come here to check in with your favourite communities</h1>
        <Link href="/create" className=" px-6 block uppercase py-2.5 bg-[black] rounded-full text-xs font-medium w-[max-content] text-white">
          create community
        </Link>
      </div>
      {router.pathname === "/" || !router.pathname.includes("community") ? (
        <div className=" flex flex-col gap-3">
          <div
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
            className="   z-[5] relative bg-[white]  rounded-[10px] w-full border border-gray-300 pb-4 "
          >
            <div className=" w-full flex flex-col  border-[#E6F0F2]">
              <h1 className=" text-sm font-medium p-4 border-b uppercase text-slate-600 ">Your Recent Posts</h1>
              <div className=" p-4 flex flex-col gap-3">
                {posts
                  .filter((item, index) => index < 2)
                  .map((post) => (
                    <Link
                      onClick={() =>
                        viewNavigate(
                          `/post/${post.title
                            .toLowerCase()
                            .replace(/[^\w\s]/g, "")
                            .replace(/\s+/g, "-")}`
                        )
                      }
                      href={`/post/${post.title
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center gap-4 p-2 rounded-[10px]   border "
                    >
                      <img src={post.avatar} alt="" className=" w-[40px] h-[40px] rounded-full" />
                      <div className=" space-y-1">
                        <h1 className=" font-medium text-md text-sky-500">{post.community}</h1>
                        <h1 className="text-sm text-slate-900">{post.title}</h1>
                        <div className=" flex items-center gap-4">
                          <p className=" text-xs text-slate-500 flex items-center gap-2">
                            {" "}
                            <FontAwesomeIcon icon={faArrowUp} /> <span className="">{post.votes}k</span> <FontAwesomeIcon icon={faArrowDown} /> Votes{" "}
                          </p>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <FontAwesomeIcon icon={faComment} /> <span className="">{post.votes}</span>comments
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <div className=" mt-6 w-full flex items-center justify-center">
                <Button label="View more" />
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
            className="   z-[5] relative bg-[white]  rounded-[10px] w-full border border-gray-300 pb-4 "
          >
            <div className=" w-full flex flex-col     border-[#E6F0F2]">
              <h1 className=" text-sm font-medium p-4 border-b uppercase text-slate-600 ">SUGGESTIONS </h1>
              <div className=" lg:overflow-hidden overflow-x-scroll p-4">
                <div className=" flex flex-col  gap-3">
                  {posts.map((person) => {
                    const community = person.community
                      .toLowerCase()
                      .replace(/[^\w\s]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <div className=" p-4 border shadow-sm rounded-[10px] gap-3 justify-between flex items-center">
                        <div className="flex items-center gap-2">
                          <Link href={`/community/${community}`} className="">
                            <img src={person.avatar} alt="" className=" w-[30px] h-[30px] rounded-full" />
                          </Link>
                          <Link href={`/community/${community}`}>
                            {" "}
                            <h6 className=" font-medium text-md text-slate-600">{person.community}</h6>
                          </Link>
                        </div>
                        <button className=" font-medium rounded-full hover:bg-[black] text-[black] hover:text-white text-xs border-black px-4 py-1 border">
                          JOIN
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" mt-6 w-full flex items-center justify-center">
                <Button label="View more" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-3">
          <div
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
            className="   z-[5] relative bg-[white]  rounded-[10px] w-full border border-gray-300 pb-4 "
          >
            <div className=" w-full flex flex-col  border-[#E6F0F2]">
              <h1 className=" text-sm font-medium p-4 border-b uppercase text-slate-600 ">
                <FontAwesomeIcon icon={faUsers} /> <span className="">COMMUNITY</span>{" "}
              </h1>
              <div className=" space-y-2 p-4 flex flex-col gap-3">
                <div className=" flex items-center px-4 justify-between py-3 border rounded-[10px]">
                  <h1 className=" font-medium text-lg">Posts</h1>
                  <p className=" font-medium text-slate-500">568</p>
                </div>
                <div className=" flex items-center px-4 justify-between py-3 border rounded-[10px]">
                  <h1 className=" font-medium text-lg">Members</h1>
                  <p className=" font-medium text-slate-500">4,354</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }}
            className="   z-[5] relative bg-[white]  rounded-[10px] w-full border border-gray-300 pb-4 "
          >
            <div className=" w-full flex flex-col  border-[#E6F0F2]">
              <h1 className=" text-sm font-medium p-4 border-b uppercase text-slate-600 ">
                <FontAwesomeIcon icon={faFire} /> <span className="">Trending</span>{" "}
              </h1>
              <div className=" lg:overflow-hidden overflow-x-scroll">
                <div className=" flex flex-col p-4 gap-3">
                  {posts
                    .filter((post, index) => index <= 4)
                    .map((post) => {
                      const slug = post.title
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-");
                      return (
                        <Link href={`/post/${slug}`} className=" p-3 border shadow-sm rounded-[10px] gap-3 justify-between flex items-center">
                          <div className="flex items-center gap-2">
                            <img src={post.avatar} alt="" className=" w-[40px] h-[40px] rounded-full" />
                            <div className=" space-y-1">
                              <h1 className="text-sm text-slate-900">{post.title}</h1>
                              <div className=" flex items-center gap-4">
                                <p className=" text-xs text-slate-500 flex items-center gap-2">
                                  {" "}
                                  <FontAwesomeIcon icon={faArrowUp} /> <span className="">{post.votes}k</span> <FontAwesomeIcon icon={faArrowDown} />{" "}
                                  Votes{" "}
                                </p>
                                <p className="text-xs text-slate-500 flex items-center gap-1">
                                  <FontAwesomeIcon icon={faComment} /> <span className="">{post.votes}</span>comments
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
              <div className=" mt-6 w-full flex items-center justify-center">
                <Button label="View more" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
