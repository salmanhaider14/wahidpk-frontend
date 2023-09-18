"use client";
import Link from "next/link";
import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div className="min-h-screen bg-[#00000080] flex justify-center items-center">
      <div className="w-[600px] min-h-[750px] bg-white flex flex-col rounded-lg p-3 gap-4 relative">
        <h1 className="text-3xl font-bold pt-8 ps-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-xl absolute top-0 right-0 pt-8 pr-6 cursor-pointer">
            x
          </p>
          <div className="ms-6 mt-7">
            <label
              for="input-group-1"
              class="block mb-2 text-md font-bold text-gray-900 dark:text-white"
            >
              Email or Phone
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                class="bg-gray-50 border h-[65px] border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email or Phone"
              />
            </div>
          </div>
          <div className="ms-6 mt-7">
            <label
              for="input-group-1"
              class="block mb-2 text-md font-bold text-gray-900 dark:text-white"
            >
              Password
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <BiLockAlt size={20} />
              </div>
              <input
                type="password"
                id="input-group-1"
                class="bg-gray-50 border h-[65px] border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your password"
              />
            </div>
          </div>
          <Link href={"#"} className="text-right pr-7">
            <p className="pr-3">Forgot Password </p>
          </Link>
          <button className="bg-green-500 hover:bg-green-600 rounded-xl w-[90%] text-white text-lg font-bold m-auto mt-7 h-[65px]">
            Login
          </button>
          <p className="text-center text-lg pt-4">
            Don't you have any account ?{" "}
            <Link href={"/register"} className="text-green-600">
              Register
            </Link>
          </p>
          <div class="flex items-center mt-7">
            <hr class="flex-grow border-t" />
            <span class="flex-shrink mx-4 text-gray-400 text-md">
              or login with
            </span>
            <hr class="flex-grow border-t" />
          </div>
          <div className="flex gap-4 justify-center items-center flex-wrap mt-6">
            <div className="h-[60px] w-[250px] border-2 rounded font-bold text-lg flex justify-center items-center gap-3 cursor-pointer shadow">
              <FcGoogle size={25} /> Google
            </div>
            <div className="h-[60px] w-[250px] border-2 rounded font-bold text-lg flex justify-center items-center gap-3 cursor-pointer shadow ">
              <FaFacebook size={25} color="blue" /> Facebook
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
