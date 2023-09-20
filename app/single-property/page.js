"use client";
import AgentSearch from "@/components/AgentSearch";
import ContactAgent from "@/components/ContactAgent";
import TourForm from "@/components/TourForm";
import LoanCalculator from "@/components/LoanCalculator";
import React from "react";
import {
  FaEye,
  FaPhone,
  FaSearch,
  FaCheckSquare,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { Carousel } from "flowbite-react";
import { AiOutlineDislike, AiOutlineEye, AiOutlineLike } from "react-icons/ai";
import ReviewForm from "@/components/ReviewForm";
import Floors from "@/components/Floors";
const SingleProperty = () => {
  const properties = [
    {
      img: "/assets/propertyimg.png",
      title: "Gorgeous Apartment Building",
      desc: "58 Hullbrook Road, Billesley, B13 0LA",
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
    {
      img: "/assets/propertyimg.png",
      title: "Gorgeous Apartment Building",
      desc: "58 Hullbrook Road, Billesley, B13 0LA",
      price: 7500,
      beds: 4,
      baths: 2,
      sqft: 1150,
    },
  ];
  return (
    <div>
      <section className="min-h-screen  ">
        <div className="flex justify-center mt-10 ">
          <div className="grid lg:grid-cols-3 gap-8 w-[80%]  p-4 relative ">
            <div className="flex flex-col items-start gap-2  md:col-span-2 relative  ">
              {" "}
              <div className="flex flex-col gap-6 ">
                <div className="max-w-[1070px] min-h-[200px] flex flex-col flex-wrap gap-1 relative shadow-md rounded-xl p-2">
                  <Carousel className="h-[500px] mb-0">
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    />
                    <img
                      alt="..."
                      src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    />
                  </Carousel>
                </div>

                <div className="max-w-[1070px] min-h-[200px] flex flex-col flex-wrap gap-1 relative shadow-md rounded-xl p-2">
                  <div className="flex justify-between items-center w-full gap-4  flex-wrap ">
                    <h1 className="text-black text-[20px] font-bold font-['Poppins']">
                      Villa Belo a large superior luxury villa
                    </h1>
                    <div className="flex items-center gap-3">
                      <img src="/assets/01.png" />
                      <img src="/assets/02.png" />
                      <img src="/assets/03.png" />
                      <img src="/assets/04.png" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full gap-4  flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="w-[82.45px] h-[27.09px] px-[10.72px] py-2 bg-yellow-400 rounded justify-center items-center gap-[13.41px] inline-flex">
                        <div className="text-white text-base font-bold font-['Mulish']">
                          For sale
                        </div>
                      </div>
                      <p className="text-neutral-700 flex items-center gap-2 text-sm font-normal font-['Poppins'] leading-7">
                        <img src="/assets/locationico.png" className="w-7" /> 58
                        Hullbrook Road, Billesley, B13 0LA
                      </p>
                      <p className="text-neutral-700 flex items-center gap-2 text-sm font-normal font-['Poppins'] leading-7">
                        <img src="/assets/calendar.png" className="w-7" /> 58 2
                        Years Ago
                      </p>
                      <p className="text-neutral-700 flex items-center gap-2 text-sm font-normal font-['Poppins'] leading-7">
                        <AiOutlineEye size={25} /> 4,529 Views
                      </p>
                    </div>
                    <h1 className="text-main text-[36.22px] font-bold font-['Poppins']">
                      $7,500
                    </h1>
                  </div>
                  <div className="flex justify-between items-center w-full gap-4  flex-wrap">
                    <div className="flex justify-around items-center gap-4 ">
                      <p className="flex justify-center items-center gap-2">
                        <img src="/assets/bed.png" /> Beds: 4
                      </p>
                      <p className="flex justify-center items-center gap-2">
                        <img src="/assets/bath.png" /> Baths: 2
                      </p>
                      <p className="flex justify-center items-center gap-2">
                        <img src="/assets/area.png" /> Sqft:1150
                      </p>
                    </div>
                    <p className="text-neutral-700 text-base font-normal font-['Poppins'] leading-normal">
                      1964 Sq Ft
                    </p>
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[200px] flex flex-col flex-wrap gap-1 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[20.81px] font-semibold font-['Poppins']">
                    Overview
                  </h1>{" "}
                  <hr />
                  <div className="grid md:grid-cols-4 items-center mt-2 flex-wrap gap-8">
                    <div className="flex items-center gap-2">
                      <img src="/assets/rooms.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Rooms
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          8
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/baths.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Baths
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/beds.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Beds
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          4
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/areas.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Size
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          572 Sq Ft
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/calender.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Year Built
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          2023
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/ptype.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Property Type
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          Villa
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/assets/garage.png" className="w-12" />
                      <div className="flex flex-col ">
                        <p className=" text-neutral-700 text-[18.63px] font-normal font-['Mulish'] ">
                          Garage
                        </p>
                        <p className="text-neutral-700 text-[18.63px] font-bold font-['Mulish'] ">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Property Description
                  </h1>
                  <hr />
                  <p className=" text-neutral-700 text-lg font-normal font-['Poppins'] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam risus leo, blandit vitae diam a, vestibulum viverra
                    nisi. Vestibulum ullamcorper velit eget mattis aliquam.
                    Proin dapibus luctus pulvinar. Integer et libero ut purus
                    bibendum gravida non ac tellus. Proin sed tellus porttitor,
                    varius mauris vitae, tincidunt augue. Sed consectetur magna
                    elit, sit amet faucibus tortor sodales vitae. Maecenas quis
                    arcu est. Nam sit amet neque vestibulum, fringilla elit sit
                    amet, volutpat nunc.
                  </p>
                  <p className=" text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                    Show more
                  </p>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Property Details
                  </h1>
                  <hr />
                  <div className="w-full grid md:grid-cols-2 ms-3 gap-6 ">
                    <div className="flex items-start gap-16 text-start">
                      <h1 className="w-[150px]  text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        ID
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px] text-start">
                        #1234
                      </p>
                    </div>
                    <div className="flex items-start gap-16 text-start">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Beds
                      </h1>
                      <p className="text-start text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        7.320
                      </p>
                    </div>
                    <div className="flex items-start gap-16">
                      <h1 className="w-[150px]  text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Price
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        7500$
                      </p>
                    </div>
                    <div className="flex items-start gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Year Built
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        2022
                      </p>
                    </div>
                    <div className="flex items-start gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Size
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        150 Sqft
                      </p>
                    </div>
                    <div className="flex items-start gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Type
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Villa
                      </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Rooms
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        9
                      </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Status
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        For Sale
                      </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Baths
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        3
                      </p>
                    </div>
                    <div className="flex items-center gap-16">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Garage
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        1
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Featured
                  </h1>
                  <hr />
                  <div className="w-full grid md:grid-cols-4 ms-3 gap-6 ">
                    <h1 className="text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                      Outdoor features
                    </h1>
                    <h1 className="text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                      Indoor features
                    </h1>
                    <h1 className="text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                      Climate & Energy{" "}
                    </h1>
                    <h1 className="text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                      Plot features
                    </h1>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Swimming
                      Pools
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Swimming
                      Pools
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                    <p className="flex items-center gap-2 text-lg">
                      <FaCheckSquare className="text-main" size={30} /> Ensuite
                    </p>
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Map Location
                  </h1>
                  <hr />
                  <div className="w-full grid lg:grid-cols-2 ms-3 gap-6  ">
                    <div className="flex items-start gap-16 text-start flex-wrap">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Address
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px] text-start">
                        Lahore
                      </p>
                    </div>
                    <div className="flex items-start gap-16 text-start flex-wrap">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Postal Code
                      </h1>
                      <p className="text-start text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        7.320
                      </p>
                    </div>
                    <div className="flex items-start gap-16 flex-wrap">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        City
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Lahore
                      </p>
                    </div>
                    <div className="flex items-start gap-16 flex-wrap">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Area
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        7.289
                      </p>
                    </div>
                    <div className="flex items-start gap-16 flex-wrap">
                      <h1 className="max-w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        State/Country
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Lahore....
                      </p>
                    </div>
                    <div className="flex items-start gap-16 flex-wrap">
                      <h1 className="w-[150px] text-neutral-700 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        Country
                      </h1>
                      <p className=" text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Pakistan
                      </p>
                    </div>
                  </div>
                  <img
                    src="/assets/propertyimg.png"
                    className="h-[500px] w-full"
                  />
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Property Video
                  </h1>
                  <hr />

                  <img
                    src="/assets/propertyimg.png"
                    className="h-[500px] w-full"
                  />
                </div>
                <Floors />
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-6 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    What's nearby ?
                  </h1>
                  <hr />
                  <div className="flex items-center gap-6 flex-wrap">
                    <img src="/assets/Education.png" className="w-20" />
                    <div className="flex flex-col gap-2">
                      <h1 className="">
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          8/10{" "}
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                          Massachusetts Institute of Technology (MIT)
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          {" "}
                          1.5 miles
                        </span>
                      </h1>
                      <h1 className="">
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          6/10
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                          {" "}
                          Stanford University{" "}
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          2 miles
                        </span>
                      </h1>
                      <h1 className="">
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          5/10
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                          {" "}
                          University of Michigan-Ann Arbor{" "}
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          3.5 miles
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col ">
                      <p className="flex items-center gap-2 text-neutral-400 text-[15.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        {" "}
                        <img src="/assets/stars.png" /> (7 Reviews)
                      </p>
                      <p className="flex items-center gap-2 text-neutral-400 text-[15.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        {" "}
                        <img src="/assets/stars.png" /> (7 Reviews)
                      </p>
                      <p className="flex items-center gap-2 text-neutral-400 text-[15.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        {" "}
                        <img src="/assets/stars.png" /> (7 Reviews)
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center gap-6 flex-wrap">
                    <img src="/assets/Park.png" className="w-20" />
                    <div className="flex flex-col gap-2">
                      <h1 className="">
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          8/10{" "}
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                          Massachusetts Institute of Technology (MIT)
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          {" "}
                          1.5 miles
                        </span>
                      </h1>

                      <h1 className="">
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          5/10
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                          {" "}
                          University of Michigan-Ann Arbor{" "}
                        </span>
                        <span className="text-neutral-700 text-[20.63px] font-bold font-['Mulish'] leading-[42.95px]">
                          3.5 miles
                        </span>
                      </h1>
                    </div>
                    <div className="flex flex-col ">
                      <p className="flex items-center gap-2 text-neutral-400 text-[15.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        {" "}
                        <img src="/assets/stars.png" /> (7 Reviews)
                      </p>
                      <p className="flex items-center gap-2 text-neutral-400 text-[15.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        {" "}
                        <img src="/assets/stars.png" /> (7 Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <LoanCalculator />
                <div className="max-w-[1070px] min-h-[300px] flex-col  flex  gap-6 relative shadow-md rounded-xl p-2">
                  <div className="flex justify-between items-center flex-wrap">
                    <div className="flex items-center gap-2">
                      <FaStar color="orange" size={25} />
                      <h1 className="text-zinc-900 text-[20.81px] font-semibold font-['Poppins']">
                        Review
                      </h1>
                      <p className=" text-neutral-400 text-[15.63px] font-semibold font-['Poppins'] leading-[42.95px]">
                        (27 review)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-neutral-400 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Sort by
                      </p>
                      <h1 className="text-neutral-700 text-[20.63px] font-normal font-['Poppins'] leading-[42.95px]">
                        Newest
                      </h1>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center flex-wrap gap-8  ">
                    <img
                      src="/assets/propertyimg.png"
                      className="w-[120px] h-[120px]"
                    />
                    <div className="flex flex-col gap-3  ">
                      <h1 className=" text-zinc-900 text-[20.72px] font-semibold font-['Poppins'] leading-[49.08px]">
                        Leslie Alexander
                      </h1>
                      <img src="/assets/stars.png" className="w-[100px]" />
                      <p className="max-w-[500px] text-neutral-700 text-[15.63px] font-normal font-['Poppins'] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque at velit eu libero laoreet mattis ac a
                        ipsum. Vivamus efficitur volutpat ante, sed consequat
                        ligula ultricies in.
                      </p>
                      <div className="flex items-center gap-4">
                        <AiOutlineLike size={20} />
                        <AiOutlineDislike size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-md font-normal font-['Poppins'] ">
                        April 5, 2023
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center flex-wrap gap-8  ">
                    <img
                      src="/assets/propertyimg.png"
                      className="w-[120px] h-[120px]"
                    />
                    <div className="flex flex-col gap-3  ">
                      <h1 className=" text-zinc-900 text-[20.72px] font-semibold font-['Poppins'] leading-[49.08px]">
                        Leslie Alexander
                      </h1>
                      <img src="/assets/stars.png" className="w-[100px]" />
                      <p className="max-w-[500px] text-neutral-700 text-[15.63px] font-normal font-['Poppins'] ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque at velit eu libero laoreet mattis ac a
                        ipsum. Vivamus efficitur volutpat ante, sed consequat
                        ligula ultricies in.
                      </p>
                      <div className="flex items-center gap-4">
                        <AiOutlineLike size={20} />
                        <AiOutlineDislike size={20} />
                      </div>
                    </div>
                    <div>
                      <p className="text-neutral-400 text-md font-normal font-['Poppins'] ">
                        April 5, 2023
                      </p>
                    </div>
                  </div>
                </div>
                <ReviewForm />
              </div>
            </div>
            <div className=" max-w-[600px]   flex flex-col gap-4  p-3  ">
              <ContactAgent />
              <TourForm />
              <div className=" md:w-[90%] w-full relative  flex flex-col gap-4 p-3 ">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                  Featured listings
                </h1>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[80%]   flex flex-col gap-2 p-3 border">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins'] pb-2">
                  Real estate near you
                </h1>
                <div className="grid grid-cols-2 gap-2 ">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
              </div>
              <div className=" md:w-[90%] w-full relative  flex flex-col gap-4 p-3 border">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                  Hot Projects
                </h1>

                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[300px] flex-col justify-center items-center mt-4  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2">
          <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
            Similar Properties
          </h1>
          <p className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
            Check out similar properties
          </p>
          <div className="flex justify-center items-center  gap-4 flex-wrap mt-6 w-full">
            {properties.map((property) => (
              <div className="w-[330px] h-[480px] relative cursor-pointer shadow-lg p-2 flex flex-col gap-3 rounded-xl">
                <img src={property.img} className="w-full h-1/2" />
                <h1 className=" text-zinc-900 text-lg font-semibold font-['Poppins'] pt-3">
                  {property.title}
                </h1>

                <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] text-lg font-semibold font-['Poppins']">
                  ${property.price}
                </h1>
                <div className="flex justify-around items-center gap-4 mt-3">
                  <p className="flex justify-center items-center gap-2">
                    <img src="/assets/bed.png" /> {property.beds}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    <img src="/assets/bath.png" /> {property.baths}
                  </p>
                  <p className="flex justify-center items-center gap-2">
                    <img src="/assets/area.png" /> {property.sqft}
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-2">
                    <FaPlus className="text-main" /> Compare
                  </p>
                  <div className="w-10 h-10 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2">3 Years Ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-[60vh] bg-[#E6FFE0] ">
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16 w-full h-full">
          <div className="flex justify-center items-end mt-[150px]">
            <div className="flex flex-col justify-start items-start gap-6 w-[600px]">
              <h1 className=" text-zinc-900 text-[45px] font-bold font-['Poppins'] leading-[54px]">
                Find for your dream home
                <br />
                and increase your investment opportunities
              </h1>
              <p className="pt-3 text-zinc-700 text-sm font-normal font-['Mulish'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
              <button class="text-white flex items-center gap-3 text-[15px] font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
                <FaPhone /> Contact Seller
              </button>
            </div>
          </div>
          <img src="/assets/storyimg.png" className="h-full mt-10" />
        </div>
      </section>
    </div>
  );
};

export default SingleProperty;
