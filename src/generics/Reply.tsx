import React, { useState } from "react";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

export default function Reply({ reply, post, }) {
  const [showReplies, setshowReplies] = useState(true);
  const [showReplyInput, setShowReplyInput] = useState(false); 

  const handleToggleReplyInput = () => {
    setShowReplyInput((prev) => !prev);
  }

  return (
    <div className={` ${showReplies ? " full md:-mt-[4px] -mt-[14px] " : " h-[0px]"} duration-300 ease-linear text border-l md:pl-2.5 pl-2.5 pt-1 z-[5] relative md:ml-4  `}>
      <div onClick={() => setshowReplies(!showReplies)} className=" absolute w-[15px] flex items-center justify-center z-[1000] h-[15px]   bg-gray-300 rounded-full left-[-08px] top-[23px]">{ showReplies ? " - " : " + " } </div>
      <div className=" absolute w-[20px] h-[2px] bg-gray-300 rounded-full left-[0px] top-[30px] md:top-[30px]"></div> 
      <div className=" absolute w-[1px] h-[20px] rotate-180  bg-[#e5e7eb] rounded-full left-[14px] top-[40px]"></div> 
      <div className="w-full ">
      <div className="pt-2 relative flex items-center gap-2 w-full">
        <img src={reply.avatar} alt="" className="w-[20px] h-[20px] rounded-full" />
        <h1 className="font-medium text-xs py-3 text-sky-500">#/{reply.name}</h1>
      </div>
      <div className="md:pl-1 pl-1 mt-[-2px]">
        <div className="p-4 space-y-3 gap-2 bg-[#f8f8f8] w-full border-l rounded-bl-2xl">
          <p className="md:text-base text-xs ">{reply.comment}</p>
          <div className="flex flex-wrap items-center gap-4">
          <div className=" text-slate-600 flex items-center gap-2">
              <FontAwesomeIcon icon={faArrowCircleUp} />
              <span className="">15</span>
              <FontAwesomeIcon icon={faArrowCircleDown} />
            </div>
            <button onClick={handleToggleReplyInput} className="">
              reply
            </button>
            {
               reply.replies?.length &&  (
                <button onClick={() => setshowReplies((prev) => !prev)} className="flex items-center gap-1 px-3 border-black py-1 text-xs bg-[#f2f2f2] rounded-full border">
                <span className="text-xs rounded-full flex items-center justify-center border border-black w-[15px] h-[15px]">
                  {reply.replies?.length}
                </span>{" "}
                <span className="block">replies</span>
              </button>
              )
            }
            
          </div>
          
          {showReplyInput && (
        <div className="space-y-2 my-4 w-full">
          <textarea
            placeholder="write a reply"
            className="rounded-[10px] border placeholder:font-light overflow-hidden bg-[white] px-4 py-3 w-full"
            name=""
            id=""
            rows="2"
          ></textarea>
          <Button label="reply" />
        </div>
      )}
          
        </div>
      </div>
    </div>
        <div className={` ${showReplies ? " full " : " "} text pl-1`}>
          {reply.replies && reply.replies.map((nestedReply, index) => (
            <Reply
              key={nestedReply.id} 
              reply={nestedReply}
              showReplies={showReplies}
              setshowReplies={setshowReplies}
            />
          ))}
        </div>
    </div>
  );
}
