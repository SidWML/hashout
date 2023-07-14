import Button from "@/generics/Button";
import PostCard from "@/generics/PostCard";
import { faArrowCircleLeft, faArrowLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import { socialMedia } from "../Homepage";
import Link from "next/link";

export default function ProfileDetailPage() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  console.log(slug);

  const posts = [
    {
      slug: "lele-pons",
      name: "Lele Pons",
      avatar: "/top-posts/ta-4.png",
      image: "/post-1.png",
      cover: "/search/pa-1.png",
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
      cover: "",
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
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return router.push("/");
    } else {
      return document.startViewTransition(() => {
        router.push(newRoute)
      });
    }
  };

  return (
    <div className=" flex flex-col gap-4">
      <div className=" w-full rounded-[20px] bg-white overflow-hidden ">
        <div className="">
          <div className=" max-w-full h-[220px] relative z-[1]">
            <img src={posts[0].cover} alt="" className=" w-full h-full object-cover " />
            <div className=" absolute  top-5 flex items-center justify-between px-8 w-full ">
              <Link onClick={() => viewNavigate("/")} href="/"><FontAwesomeIcon icon={faArrowLeft} className=" z-[3] text-white text-lg " /></Link>
              <FontAwesomeIcon icon={faEllipsis} className="z-[3] text-white text-2xl" />
            </div>
          </div>
          <div className="mx-auto rounded-full z-[2] relative  w-[max-content] mt-[-50px] card card-image-large">
            <img src={posts[0].avatar} alt="" className=" w-[100px] h-[100px] rounded-full" />
          </div>
          <div className="">
            <div className=" flex flex-col items-center justify-center space-y-4 w-full mt-4 pb-[10px] ">
             <div className=" text-center">
             <h1 className=" font-semibold text-2xl">{posts[0].name}</h1>
             <p className=" font-medium text-[#9597A1]">Musician</p>
             </div>
              <div className=" flex flex-col space-y-3 items-center   ">
                <div className=" w-full flex items-center gap-4">
                  <div className="">
                    <h1 className=" text-center  font-semibold text-black">145</h1>
                    <h6 className=" text-[#9597A1] text-lg font-semibold">POSTS</h6>
                  </div>
                  <div className="">
                    <h1 className="  text-center font-semibold text-black">555</h1>
                    <h6 className=" text-[#9597A1] text-lg font-semibold">FOLLOWING</h6>
                  </div>
                  <div className="">
                    <h1 className=" text-center  font-semibold text-black">645</h1>
                    <h6 className=" text-[#9597A1] text-lg font-semibold">FOLLOWERS</h6>
                  </div>
                </div>
                <Button label="FOLLOWING" />
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-4">
    {
        posts.map(post => (
            <PostCard socialMedia={socialMedia} post={post} />
        ))
    }
      </div>
    </div>
  );
}
