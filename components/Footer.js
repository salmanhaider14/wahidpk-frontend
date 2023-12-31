import React from "react";
import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaPhone, FaHome, FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer class="bg-zinc-900 w-full">
      <div class="container mx-auto py-10 px-4 lg:px-0 p-[5rem]">
        <div class="container mx-auto md:w-[1110px] mb-7">
          <div class="flex flex-col md:flex-row md:space-x-4">
            <div class="w-full md:w-[540px] p-6 bg-green-100 rounded-xl shadow">
              <div class="flex">
                <div class="w-[150px] h-[100px] bg-zinc-300 rounded-[10px]"></div>
                <div class="ml-6">
                  <h2 class="text-zinc-900 text-xl md:text-3xl font-bold font-poppins">
                    You need a house
                  </h2>
                  <p class="text-zinc-900 text-sm font-normal font-mulish leading-[21px]">
                    Tell us your needs, we will give you thousands of
                    suggestions for the dream home.
                  </p>
                </div>
              </div>
              <div class="mt-4">
                <button class=" flex items-center gap-2 text-white text-[15px] font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
                  <FaPhone /> Contact Seller
                </button>
              </div>
            </div>

            <div class="w-full md:w-[540px] p-6 bg-green-100 rounded-xl shadow mt-4 md:mt-0">
              <div class="flex">
                <div class="w-[150px] h-[100px] bg-zinc-300 rounded-[10px]"></div>
                <div class="ml-6">
                  <h2 class="text-zinc-900 text-xl md:text-3xl font-bold font-poppins">
                    Sell your house
                  </h2>
                  <p class="text-zinc-900 text-sm font-normal font-mulish leading-[21px]">
                    We will connect you to thousands of people who need to buy a
                    home.
                  </p>
                </div>
              </div>
              <div class="mt-4">
                <button class="text-white flex items-center gap-2 text-[15px] font-bold font-poppins leading-snug bg-[#25C55B] hover:bg-green-700 rounded-[10px] px-[18px] py-4">
                  <FaHome /> Sell Property
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
          <div class="w-full ">
            <div class="text-white text-lg font-semibold font-'Poppins'">
              Office Address
            </div>
            <div class="text-white text-sm font-normal font-'Poppins' leading-5 opacity-50 mt-2">
              Head office:
            </div>
            <div class="text-green-50 text-sm font-semibold font-'Poppins' leading-5">
              Office 6, Street 22nd, Block J Al-Rehman Garden Phase 2 Lahore
            </div>
            <div class="border-t border-white border-opacity-10 my-4"></div>
            <div class="text-white text-sm font-normal font-'Poppins' leading-5 opacity-50">
              Note:
            </div>
            <div class="text-green-50 text-sm font-normal font-'Poppins' leading-5">
              We are only taking booked visits at the moment. Please call us
              before your arrival.
            </div>
          </div>
          <div class="w-full">
            <div class="text-white text-lg font-semibold font-'Poppins'">
              Contact Us
            </div>
            <div class="flex items-center gap-4 mt-2">
              <div class="w-12 h-12 bg-zinc-300 rounded-full"></div>
              <div class="flex flex-col">
                <div class="text-white text-sm font-normal font-'Poppins' leading-5 opacity-50">
                  General Enquiries
                </div>
                <div class="text-green-50 text-sm font-semibold font-'Poppins' leading-5">
                  +92 (312) 680-4225
                </div>
              </div>
            </div>
            <div class="border-t border-white border-opacity-10 my-4"></div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 relative opacity-30">
                <img src="/assets/callico.svg" />
                <div class="w-8 h-8 left-2 top-2 absolute"> </div>
              </div>
              <div class="flex flex-col">
                <div class="text-white text-sm font-normal font-'Poppins' leading-5 opacity-50">
                  Customer Service 10 to 17
                </div>
                <div class="text-green-50 text-sm font-semibold font-'Poppins' leading-5">
                  +92 (312) 680-4225
                </div>
              </div>
            </div>
            <div class="border-t border-white border-opacity-10 my-4"></div>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 relative opacity-30">
                <img src="/assets/emailico.svg" />
                <div class="w-8 h-8 left-2 top-2 absolute"> </div>
              </div>
              <div class="flex flex-col">
                <div class="text-white text-sm font-normal font-'Poppins' leading-5 opacity-50">
                  Email:
                </div>
                <div class="text-green-50 text-sm font-semibold font-'Poppins' leading-5">
                  info@wahid.pk
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="text-white text-lg font-semibold font-'Poppins'">
              Quick Links
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-main" />
                <Link href="#">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Become An Agent
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/about-us">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    About Us
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/agents">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Our Agents
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/terms">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Terms Of Use
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/privacy-policy">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Privacy Policy
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/contact">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="text-white text-lg font-semibold font-'Poppins'">
              Quick Links
            </div>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-main" />
                <Link href="#">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Help & Support
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/about-us">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Advertise with us
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/agents">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Project Inquiries
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/terms">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Jobs
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/privacy-policy">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Media Service
                  </span>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <FaArrowRight className="text-main" />
                <Link href="/contact">
                  <span className="text-white text-sm font-normal font-'Poppins' leading-5 opacity-70">
                    Home Inspection
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full hidden md:block">
            <div class="text-white text-lg font-semibold font-'Poppins'">
              Create Free Account, SignUp
            </div>
            <div class="mt-2">
              <div class="text-green-50 text-sm font-normal font-'Mulish' leading-5">
                Enter your email, create a free account.
              </div>
              <div class="mt-4 hidden md:block">
                <input
                  type="text"
                  placeholder="Email"
                  id="default-input"
                  class="h-[56px] bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />

                <div class="mt-2">
                  <button class="w-full h-12  bg-white bg-opacity-10 rounded-md border text-white font-bold border-white border-opacity-10 flex items-center justify-center gap-2.5">
                    Sign Up
                  </button>
                </div>
                <div class="mt-4 flex items-center gap-4">
                  <div class="w-5 h-5 relative">
                    <div class="w-5 h-5 left-0 top-0 absolute bg-white bg-opacity-10 rounded-md border border-white border-opacity-10"></div>
                  </div>
                  <div class="text-green-50 text-xs font-normal font-'Poppins' leading-5">
                    I have read and agree to the terms & conditions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="border-t border-white border-opacity-10 my-4"></div>
        <div class="flex md:justify-between justify-center items-center flex-wrap">
          <img src="/assets/footerlogo.png" />

          <div class="flex  items-center md:gap-6 gap-4 mt-2 mb-4 grow lg:mb-0">
            <Link
              href="/"
              class="text-white text-base font-semibold font-'Poppins' leading-normal"
            >
              Developers
            </Link>
            <Link
              href="/projects"
              class="text-white text-base font-semibold font-'Poppins' leading-normal"
            >
              Tools
            </Link>
            <Link
              href="/"
              class="text-white text-base font-semibold font-'Poppins' leading-normal"
            >
              Home
            </Link>
            <Link
              href="#"
              class="text-white text-base font-semibold font-'Poppins' leading-normal"
            >
              Blogs
            </Link>
            <Link
              href="/contact"
              class="text-white text-base font-semibold font-'Poppins' leading-normal"
            >
              Contact
            </Link>
          </div>
          <div class="flex items-center gap-4 mr-7">
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoFacebook color="white" size={20} />{" "}
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoYoutube color="white" size={20} />{" "}
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoLinkedin color="white" size={20} />{" "}
              </Link>
            </div>
            <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center">
              <Link href={"#"}>
                {" "}
                <BiLogoInstagram color="white" size={20} />{" "}
              </Link>
            </div>
          </div>
        </div>
        <div class="border-t border-white border-opacity-10 my-4"></div>
        <div class="text-center text-green-50 text-sm font-normal font-'Poppins' leading-5">
          Copyright © 2023 Real estate CP. Designed & Developed by Wahid PK.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
