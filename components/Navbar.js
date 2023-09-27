"use client";
import React, { useState } from "react";

import { CiSun, CiUser } from "react-icons/ci";

import Link from "next/link";
import { FaSun, FaUser } from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-3 rounded-xl bg-white">
      {showModal ? <LoginModal setShowModal={setShowModal} /> : null}
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center gap-12">
          <a
            className=" text-xl font-semibold text-slate-800  flex items-center gap-3"
            href="#"
          >
            <img src="/assets/logo.png" width={200} className="ms-10" />
          </a>

          <div
            className={`hidden  lg:flex space-x-4 gap-3 text-md font-normal `}
          >
            <Link className="" href="/">
              Home
            </Link>
            <Link className="" href={"/projects"}>
              Projects
            </Link>
            <Link className="" href={"/agents"}>
              Agents
            </Link>
            <Link className="" href={"/about"}>
              About
            </Link>
            <Link className="" href={"/contact"}>
              Contacts
            </Link>
            <Link className="" href={"/#"}>
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
          <div
            className="flex justify-center items-center gap-2 text-md mr-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <CiUser size={30} /> Register/Login{" "}
          </div>

          <button className="bg-[#25C55B] hover:bg-green-700 w-[180px] h-[40px] text-white text-md rounded-lg">
            Sell Property
          </button>
          <CiUser size={30} className="cursor-pointer" />
          <CiSun size={30} className=" cursor-pointer " />
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
          <div className="block py-2" onClick={() => setShowModal(true)}>
            Register/Login
          </div>
        </div>
        <div className="flex items-center justify-center gap-3  mr-3 mt-3 ">
          <button className="bg-[#25C55B] hover:bg-green-700 w-[180px] h-[40px] text-white text-md rounded-lg">
            Sell Property
          </button>
          <CiUser size={30} className="cursor-pointer" />
          <CiSun size={30} className=" cursor-pointer " />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
