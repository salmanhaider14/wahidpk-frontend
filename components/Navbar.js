"use client";
import React, { useState } from "react";

import { CiUser } from "react-icons/ci";

import Link from "next/link";
import { FaSun, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-3 rounded-xl bg-white">
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-6">
          <a
            className=" text-xl font-semibold text-slate-800  flex items-center gap-3"
            href="#"
          >
            <img src="/assets/logo.png" width={200} className="ms-10" />
          </a>

          <div
            className={`hidden  lg:flex space-x-4 gap-3 text-md font-semibold `}
          >
            <Link className="font-semibold" href="/">
              Home
            </Link>
            <Link className="font-semibold" href={"/projects"}>
              Projects
            </Link>
            <Link className="font-semibold" href={"/agents"}>
              Agents
            </Link>
            <Link className="font-semibold" href={"/about"}>
              About
            </Link>
            <Link className="font-semibold" href={"/contact"}>
              Contacts
            </Link>
            <Link className="font-semibold" href={"/#"}>
              Tools
            </Link>
          </div>
        </div>
        <button
          className="lg:hidden text-black focus:outline-none mr-8"
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
        <div className="hideen lg:flex items-center gap-3 hidden mr-3 ">
          <Link
            href={"/login"}
            className="flex justify-center items-center gap-2 text-md mr-2 cursor-pointer"
          >
            <CiUser size={30} /> Register/Login{" "}
          </Link>

          <button className="bg-[#25C55B] hover:bg-green-700 w-[180px] h-[40px] text-white text-md rounded-lg">
            Sell Property
          </button>
          <FaUser size={30} className="me-4 text-2xl cursor-pointer " />
          <FaSun size={30} className="me-4 text-2xl cursor-pointer " />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${
          menuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center">
          <Link className="block py-2" href="/">
            Home
          </Link>
          <Link className="block py-2" href="/projects">
            Projects
          </Link>
          <Link className="block py-2" href="/agents">
            Agents
          </Link>
          <Link className="block py-2" href="/about">
            About
          </Link>
          <Link className="block py-2" href="/contact">
            Contact
          </Link>
          <Link className="block py-2" href="/tools">
            Tools
          </Link>
          <Link className="block py-2" href="/login">
            Register/Login
          </Link>
        </div>
        <div className="flex items-center justify-center gap-3  mr-3 mt-3 ">
          <button className="bg-[#25C55B] hover:bg-green-700 w-[180px] h-[40px] text-white text-md rounded-lg">
            Sell Property
          </button>
          <FaUser size={30} className="me-4 text-2xl cursor-pointer " />
          <FaSun size={30} className="me-4 text-2xl cursor-pointer " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
