"use client";
import React, { useState } from "react";

import { CiUser } from "react-icons/ci";
import {
  BsFillHouseFill,
  BsCameraVideoFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import Link from "next/link";
import { FaSun, FaUser } from "react-icons/fa";

const SubBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-3 rounded-xl ">
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-6">
          <div
            className={`hidden  lg:flex space-x-4 gap-3 text-md font-bold  text-white `}
          >
            <Link className="font-semibold flex items-center gap-2" href="#">
              <BsFillHouseFill color="white" /> Request Home Inspection
            </Link>
            <Link className="font-semibold flex items-center gap-2" href={"#"}>
              <BsCameraVideoFill color="white" /> Request Media Service
            </Link>
            <Link
              className="font-semibold flex items-center gap-2"
              href={"/agents"}
            >
              <BsPersonFill color="white" /> Become An Agent
            </Link>
          </div>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none mr-6"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="lg:flex items-center gap-3 hidden mr-3 ">
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              {" "}
              <BiLogoFacebook color="white" size={20} />
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              <BiLogoTwitter color="white" size={20} />{" "}
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              <BiLogoLinkedin color="white" size={20} />{" "}
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              {" "}
              <BiLogoInstagram color="white" size={20} />{" "}
            </Link>
          </div>
          <form>
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <input
                type="search"
                id="search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                style={{ color: "white" }}
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-white font-bold dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${
          menuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center text-white font-bold justify-center gap-3">
          <Link className="font-semibold flex items-start gap-2" href="#">
            <BsFillHouseFill color="white" /> Request Home Inspection
          </Link>
          <Link className="font-semibold flex items-start gap-2" href={"#"}>
            <BsCameraVideoFill color="white" /> Request Media Service
          </Link>
          <Link
            className="font-semibold flex items-center gap-2"
            href={"/agents"}
          >
            <BsPersonFill color="white" /> Become An Agent
          </Link>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              {" "}
              <BiLogoFacebook color="white" size={20} />
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              <BiLogoTwitter color="white" size={20} />{" "}
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              <BiLogoLinkedin color="white" size={20} />{" "}
            </Link>
          </div>
          <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
            <Link href={"#"}>
              {" "}
              <BiLogoInstagram color="white" size={20} />{" "}
            </Link>
          </div>
          <form>
            <label
              for="search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <input
                type="search"
                id="search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                style={{ color: "white" }}
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-white font-bold dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SubBar;
