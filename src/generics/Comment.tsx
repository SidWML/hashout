import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "./Button";
import Reply from "./Reply";

export default function Comment({ comment, post }) {
  const [commentinput, setCommentinput] = useState(false);
  const [showReplies, setshowReplies] = useState(false);
  return (
    <div className=" w-full relative rounded-b-2xl mt-4 ">
      {/* <div className=" absolute md:block hidden bottom-0 w-[2px] h-[100%]  top-[20px] bg-[#e5e7eb]  left-[8px]"></div> */}
      <div className=" pt-2 relative flex items-center gap-2 w-full">
        <img src={comment.avatar} alt="" className=" w-[20px] h-[20px] rounded-full" />
        <h1 className=" md:font-medium md:text-md text-sm font-normal py-1.5  text-sky-500">#/{comment.name}</h1>
      </div>
      <div className="pl-2 ">
        <div className="p-4  space-y-3 gap-2 bg-[#f5f5f5] w-full border-l rounded-bl-2xl">
          <p className="">{comment.comment}</p>
          <div className=" flex items-center gap-4">
            <div className=" text-slate-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowCircleUp} />
              <span className="">{post.comments}</span>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </div>
            <button onClick={() => setCommentinput(!commentinput)} className="">
              reply
            </button>
            <div onClick={() => setshowReplies((prev) => !prev)} className=" flex items-center space-x-1 bg-[#f5f5f5] cursor-pointer ">
              <span className=" text-xs rounded-full flex items-center justify-center border border-black w-[15px] h-[15px]">
                {comment.replies?.length}
              </span>{" "}
              <span className="block">replies</span>
            </div>
          </div>
          {commentinput && (
            <div className=" space-y-2 my-4 w-full">
              <textarea
                placeholder="write a comment"
                className="rounded-[10px] border placeholder:font-light overflow-hidden bg-[white] px-4 py-3 w-full"
                name=""
                id=""
                rows="2"
              ></textarea>
              <Button label="comment" />
            </div>
          )}
        </div>
      </div>
        <div className={` md:pl-2 pl-3 text ${showReplies ? " full " : " "}"`}>
          {comment.replies.map((reply, index) => (
            <Reply
              key={reply.id} 
              reply={reply}
              showReplies={showReplies}
              setshowReplies={setshowReplies}
            />
          ))}
        </div>

    </div>
  );
}
