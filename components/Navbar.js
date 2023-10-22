"use client";
import React, { useEffect, useState } from "react";

import { CiSun, CiUser } from "react-icons/ci";

import Link from "next/link";
import { FaCross, FaSun, FaUser } from "react-icons/fa";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import {
  BsCameraVideoFill,
  BsFillHouseFill,
  BsPersonFill,
} from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitch,
  BiLogoTwitter,
} from "react-icons/bi";
import InquiryFormModal from "./InquiryFormModal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showRegModal, setShowRegModal] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen) {
        if (
          !event.target.closest(".sidebar") &&
          !event.target.closest(".dropdown")
        ) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="p-3 rounded-xl bg-white">
      {showModal ? (
        <LoginModal
          setShowModal={setShowModal}
          setShowRegModal={setShowRegModal}
        />
      ) : null}
      {showRegModal ? (
        <RegisterModal
          setShowModal={setShowModal}
          setShowRegModal={setShowRegModal}
        />
      ) : null}
      {showInquiry ? <InquiryFormModal setShowModal={setShowInquiry} /> : null}
      <div className="flex justify-between items-center ">
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
        <div className="flex justify-center items-center gap-12">
          <a
            className=" text-xl font-semibold text-slate-800  flex items-center gap-3"
            href="#"
          >
            <img
              src="/assets/logo.png"
              className="ms-10 w-[150px] md:w-[200px]"
            />
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
      {/* <div
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
          <Link className=" block  py-2 " href="#">
            Request Home Inspection
          </Link>
          <Link className=" block  py-2 " href={"#"}>
            Request Media Service
          </Link>
          <Link className=" block  py-2 " href={"/agents"}>
            Become An Agent
          </Link>
          <div className="flex items-center gap-2 mt-2">
            {" "}
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoFacebook color="blue" size={25} />
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                <BiLogoTwitter color="blue" size={25} />{" "}
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                <BiLogoLinkedin color="blue" size={25} />{" "}
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoInstagram color="red" size={25} />{" "}
              </Link>
            </div>
          </div>

          <form>
            <div class="relative">
              <input
                type="search"
                id="search"
                class="block w-full p-4 my-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                style={{ color: "white" }}
              />
            </div>
          </form>
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
      </div> */}
      <div className="lg:hidden">
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-64 md:w-96 h-full bg-[#040D12] text-white transition-all duration-300 ease-in-out z-50 overflow-y-auto`}
        >
          <div className="absolute top-0 right-3">
            <p className="text-lg">x</p>
          </div>
          <div className="flex flex-col items-start p-4 gap-2 md:gap-4 mt-2">
            <form>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 my-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                  style={{ color: "white" }}
                />
              </div>
            </form>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="block py-2" onClick={() => setShowModal(true)}>
              Register/Login
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="flex items-start flex-col justify-start gap-3  mt-3 ">
              <button className="bg-[#25C55B] hover:bg-green-700 w-[180px] h-[40px] text-white text-md rounded-lg">
                Sell Property
              </button>
              <div className="flex items-start justify-start gap-2">
                <CiUser size={30} className="cursor-pointer" />
                <CiSun size={30} className="cursor-pointer" />
              </div>
            </div>
            <Link href="/" className="block py-2">
              Home
            </Link>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <Link href="/projects" className="block py-2">
              Projects
            </Link>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <Link href="/agents" className="block py-2">
              Agents
            </Link>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <Link href="/about" className="block py-2">
              About
            </Link>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <Link href="/contact" className="block py-2">
              Contact
            </Link>
            <div className=" w-full h-px bg-white opacity-30"></div>
            {/* <Link href="/tools" className="block py-2">
              Tools
            </Link> */}
            <div className="relative dropdown">
              <div
                className="block py-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                More
              </div>
              {dropdownOpen && (
                <div className="pl-4">
                  <Link
                    href="/advertise"
                    className="block py-2"
                    onClick={handleLinkClick}
                  >
                    Advertise
                  </Link>

                  {/* Add more links as needed */}
                </div>
              )}
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="block py-2" onClick={() => setShowInquiry(true)}>
              Request Home Inspection
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="block py-2" onClick={() => setShowInquiry(true)}>
              Request Media Service
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="block py-2" onClick={() => setShowInquiry(true)}>
              Become An Agent
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
            <div className="flex items-center gap-2 my-2">
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <Link href="#">
                  <BiLogoFacebook color="white" size={25} />
                </Link>
              </div>
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <Link href="#">
                  <BiLogoTwitter color="white" size={25} />
                </Link>
              </div>
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <Link href="#">
                  <BiLogoLinkedin color="white" size={25} />
                </Link>
              </div>
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <Link href="#">
                  <BiLogoInstagram color="white" size={25} />
                </Link>
              </div>
            </div>
            <div className=" w-full h-px bg-white opacity-30"></div>
          </div>
        </div>
        {/* <div className="fixed top-4 left-4 z-50">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:bg-transparent"
          >
            <svg
              className="w-8 h-8 text-gray-800 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
