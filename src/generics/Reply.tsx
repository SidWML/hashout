import React, { useState } from "react";
import Comment from "./Comment";

export default function Reply({ reply, post, showReplies, setshowReplies }) {
  return (
    <div className={` ${showReplies ? " full " : " h-[0px]"} duration-300 ease-linear text border-l-2 pl-4 z-[5] relative ml-12`}>
      <div className=" absolute w-[15px] z-[999] h-[15px] bg-gray-300 rounded-full left-[-8px] top-[12px]">+ </div>
      <div className=" absolute w-[30px] h-[2px] bg-gray-300 rounded-full left-[-5px] top-[20px]"></div>
      <Comment showReplies={showReplies} setshowReplies={setshowReplies} post={post} comment={reply} />
    </div>
  );
}
