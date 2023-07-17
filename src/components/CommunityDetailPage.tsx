import Button from "@/generics/Button";
import PostCard from "@/generics/PostCard";
import { posts } from "@/libs/Posts";
import { faArrowLeft, faCamera, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function CommunityDetailPage() {
  const router = useRouter();
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
    <div className=" flex flex-col gap-4">
      <div className=" w-full rounded-[10px] border border-gray-300 bg-white overflow-hidden ">
        <div className="">
          <div className=" max-w-full group h-[220px] relative z-[1]">
            <img src={posts[0].cover && posts[0].cover} alt="" className=" w-full h-full object-cover " />
            <div className=" absolute z-[888] top-5 flex items-center justify-between px-8 w-full ">
              <Link onClick={() => viewNavigate("/")} href="/">
                <FontAwesomeIcon icon={faArrowLeft} className=" z-[3] text-white text-lg " />
              </Link>
              <FontAwesomeIcon icon={faEllipsis} className="z-[3] text-white cursor-pointer text-2xl" />
            </div>
            <div className=" absolute scale-0 group-hover:scale-[100%] duration-300 ease-linear top-0 right-0 left-0 bottom-0 bg-black bg-opacity-25 text-white flex items-center justify-center ">
              <input type="file" name="" id="cover-picture" className=" appearance-none hidden" />
              <label htmlFor="cover-picture" className=""><FontAwesomeIcon icon={faCamera} /></label>
            </div>
          </div>
          <div className="mx-auto relative rounded-full z-[2] group overflow-hidden  w-[max-content] mt-[-50px] card card-image-large">
            <img src={posts[0].avatar} alt="" className=" w-[100px] h-[100px] rounded-full" /><div className=" absolute scale-0 group-hover:scale-[100%] duration-300 ease-linear top-0 right-0 left-0 bottom-0 bg-black bg-opacity-25 text-white flex items-center justify-center ">
              <input type="file" name="" id="profile-picture" className=" appearance-none hidden" />
              <label htmlFor="profile-picture" className=""><FontAwesomeIcon icon={faCamera} /></label>
            </div>
          </div>
          <div className="">
            <div className=" flex flex-col items-center justify-center space-y-4 w-full mt-4 pb-[10px] ">
              <div className=" text-center">
                <h1 className=" font-semibold text-2xl">#/{posts[0].community}</h1>
                <p className=" font-medium text-[#9597A1]">Memeres</p>
              </div>
              <div className=" flex flex-col space-y-3 items-center   ">
                <div className=" flex items-center gap-2">
                  <p className=""> created on - </p>
                  <p className="">{new Date().toLocaleDateString()}</p>
                </div>
                <Button label="FOLLOWING" />
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-4">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
}
