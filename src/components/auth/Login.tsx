import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="">
      <div className=" fixed w-full px-6 mx-auto p-4 flex items-center justify-between">
        <Link className="max-w-[5%]" href="/">
          <img src="https://wmlit.com/Logo.png" alt="" className="" />
        </Link>
        <div className=" flex items-center space-x-4">
          <div className=" font-medium text-md text-white">
            <Link href="/register" mainInnerText="Sign Up" />
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-2">
        <div className=" max-w-full h-[100vh]">
          <img src="/meme-3.jpg" alt="" className=" w-full h-full object-cover" />
        </div>
        <div className=" col-span-1 bg-white flex flex-col items-center justify-center ">
          <div className="  w-[60%] dark:bg-black text-black dark:text-white ">
            <div className="w-full flex items-center justify-center  min-h-[90vh]  md:py-0 py-[60px]">
              <div className=" overflow-hidden    rounded-3xl  w-full ">
                <div className="  p-6 space-y-8">
                  <div className=" text-center font-medium space-y-3">
                    <h1 className=" font-bold md:text-3xl text-xl font-rosario w-full text-center">Welcome Back </h1>
                  </div>
                  <div className=" space-y-2">
                    <form className=" space-y-6 ">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="Email" className=" font-medium text-[#475569]">
                          Email
                        </label>
                        <input type="email" id="Email" className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="Password" className=" font-medium text-[#475569]">
                          Password
                        </label>
                        <input type="password" id="Password" className=" px-4 py-3 border focus:outline-sky-500 rounded-[10px]" />
                      </div>

                      <button
                        type="submit"
                        className="px-6 py-3 rounded-xl text-white hover:bg-[#0269d0] text-center w-full bg-[#0077ed] font-medium "
                      >
                        Log In
                      </button>
                    </form>
                    <div className=" flex items-center justify-between">
                      <Link href="/register" className=" font-light text-xs underline text-slate-700 dark:text-slate-300">
                        Don't have an account ?
                      </Link>
                      <Link href="/forget-password" className=" font-light text-xs underline text-slate-700 dark:text-slate-300">
                        Forgot Password ?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}