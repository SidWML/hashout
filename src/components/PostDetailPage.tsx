import PostCard from "@/generics/PostCard";
import { posts } from "@/libs/Posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useState } from "react";
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
import Button from "@/generics/Button";
import Comment from "@/generics/Comment";
import Reply from "@/generics/Reply";
import Link from "next/link";

export default function PostDetailPage() {
  const router = useRouter();

  const { slug } = router.query;

  const [comments, setComments] = useState(true);
  const [showReplies, setshowReplies] = useState(true);

  return (
    <div className="">
      {posts
        .filter(
          (post) =>
            post.title
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-") === slug
        )
        .map((post) => (
          <div style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.02)" }} className=" border   w-full bg-white block rounded-[10px] ">
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
              <div className=" w-full p-4 ">
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
                  <button onClick={() => setComments(!comments)} className=" flex items-center gap-1 px-6 py-1.5 bg-[#f2f2f2] rounded-full border">
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
                <div className=" w-full">
                  <h1 className=" w-fyll py-2 border-y mt-4">comments </h1>
                  <div className=" space-y-2 my-4 w-full">
                    <textarea
                      placeholder="write a comment"
                      className="rounded-[10px] placeholder:font-light overflow-hidden bg-[#f5f5f5] px-4 py-3 w-full"
                      name=""
                      id=""
                      rows="2"
                    ></textarea>
                    <Button label="comment" />
                  </div>
                  {comments && (
                    <div className=" w-full mt-4 ">
                      {post.commentsArray.map((comment) => (
                        <div>
                          <Comment showReplies={showReplies} setshowReplies={setshowReplies} post={post} comment={comment} />
                          {comment.replies?.map((reply) => (
                            <Reply showReplies={showReplies} setshowReplies={setshowReplies} reply={reply} post={post} />
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
