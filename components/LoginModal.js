"use client";
import Link from "next/link";
import React from "react";
import { BiLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaCross, FaFacebook } from "react-icons/fa";

const LoginModal = ({ setShowModal, setShowRegModal }) => {
  const handleSubmit = () => {};
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto px-4 md:px-0 fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
        <div className="relative w-auto min-w-[300px] my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Login</h3>
            </div>
            <div
              className="p-4"
              aria-hidden="true"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
            >
              <form onSubmit={handleSubmit}>
                <div
                  className="text-xl absolute top-0 right-0 pt-8 pr-6 cursor-pointer"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  x
                </div>
                <div className=" mt-7">
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
                <div className=" mt-7">
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
                <div href={"#"} className="text-right pr-7 mb-2">
                  <span className="pr-3">Forgot Password </span>
                </div>

                <div class="relative mb-6">
                  <button className="bg-main p-2 rounded-lg w-full h-[56px]   text-white font-bold  ">
                    Login
                  </button>
                </div>

                <div className="text-center ms-1 text-lg flex gap-2  ">
                  Don't you have any account ?{" "}
                  <p
                    className="text-green-600 cursor-pointer"
                    onClick={() => {
                      setShowModal(false);
                      setShowRegModal(true);
                    }}
                  >
                    Register
                  </p>
                </div>
                <div class="flex items-center mt-7">
                  <hr class="flex-grow border-t" />
                  <span class="flex-shrink mx-4 text-gray-400 text-md">
                    or login with
                  </span>
                  <hr class="flex-grow border-t" />
                </div>
                <div className="flex gap-4 justify-center items-center flex-wrap mt-6">
                  <div className="h-[60px] w-[250px] border-2 rounded font-bold text-lg flex justify-center items-center gap-3 cursor-pointer shadow">
                    <FcGoogle size={25} /> <span> Google</span>
                  </div>
                  <div className="h-[60px] w-[250px] border-2 rounded font-bold text-lg flex justify-center items-center gap-3 cursor-pointer shadow ">
                    <FaFacebook size={25} color="blue" /> <span>Facebook</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LoginModal;
