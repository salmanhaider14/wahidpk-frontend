"use client";
import FilterForm from "@/components/FilterForm";
import React, { useState } from "react";
import { FaPhone, FaSearch, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { BiLogoWhatsapp } from "react-icons/bi";
import CustomScrollContainer from "@/components/CustomScrollContainer";
import Link from "next/link";
import SearchBarModal from "@/components/SearchBarModal";

const PropertyListing = () => {
  const properties = [
    {
      title: "5 Marla Brand New House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
  ];
  const stories = [
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
  ];
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <SearchBarModal setShowModal={setShowModal} />}
      <section className="min-h-screen  ">
        <div className="flex justify-center md:mt-3 mt-2">
          <div className="grid lg:grid-cols-3 gap-8 lg:w-[80%] p-1 md:p-4 relative">
            <div className="flex flex-col items-start gap-2  lg:col-span-2 ">
              <div className="flex md:hidden justify-center items-center gap-4 my-5">
                <button
                  className="bg-white border shadow-md hover:bg-gray-100 rounded-md w-[120px] h-[50px]  font-bold"
                  onClick={() => setShowModal(true)}
                >
                  Buy
                </button>{" "}
                <button
                  className="bg-white border shadow-md hover:bg-gray-100 rounded-md w-[120px] h-[50px]  font-bold"
                  onClick={() => setShowModal(true)}
                >
                  Rent
                </button>{" "}
              </div>
              <h1 className=" text-black text-[31.44px] font-bold font-['Poppins']">
                Property Listing
              </h1>
              <p className=" text-neutral-700 text-sm font-normal font-['Poppins'] leading-snug">
                There are currently 164,814 properties.
              </p>
              <div className="flex flex-col justify-start item-start gap-2 md:gap-6 ">
                {properties.map((property) => (
                  <div className="max-w-[1070px] md:min-h-[260px] min-h-[130px] flex gap-2 relative shadow-md rounded-xl p-2 border">
                    <img
                      src="/assets/supremetag.png"
                      className="absolute top-5 left-0 md:w-28 w-20"
                    />
                    <img
                      src="/assets/saletag2.png"
                      className="absolute md:top-12 top-10 left-0 md:w-20 w-10 "
                    />
                    <img src="/assets/propertyimg.png" className="w-[35%] " />

                    <div className="flex flex-col md:gap-4 lg:gap-3 xl:gap-4 gap-2  flex-wrap max-w-[680px] w-[63%]">
                      <h1 className="text-zinc-900 md:text-xl text-sm font-semibold font-['Poppins']">
                        {property.title}
                      </h1>
                      <p className="text-neutral-700 md:text-1vw text-sm font-normal hidden md:flex font-['Poppins'] leading-2.5vw">
                        {property.desc}
                      </p>
                      <h1 className="text-[#25C55B] text-4vw  font-extrabold font-['Mulish']">
                        {property.price}
                      </h1>
                      <div className="flex items-start gap-3 ">
                        <p className="flex items-center gap-2">
                          <img src="/assets/bed.png" />{" "}
                          <span className="md:flex hidden"> Beds:</span>{" "}
                          <span className="font-bold"> {property.beds}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/bath.png" />{" "}
                          <span className="md:flex hidden"> Baths:</span>{" "}
                          <span className="font-bold"> {property.baths}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/area.png" />{" "}
                          <span className="md:flex hidden"> Sqft:</span>{" "}
                          <span className="font-bold"> {property.area}</span>
                        </p>
                      </div>
                      <hr />
                      <div className="flex md:hidden justify-start gap-2  ">
                        {" "}
                        <button className="flex  grow justify-center items-center gap-1  p-1  border rounded-md text-[#25C55B] border-[#25C55B] hover:bg-[#25C55B] hover:text-white text-sm font-semibold font-['Poppins'] ">
                          <FaPhone className="text-[15px]" /> SMS
                        </button>
                        <button className=" flex  p-1 grow justify-center  items-center  gap-1   border rounded-md text-white border-[#25C55B] bg-main hover:text-green-600 text-sm font-semibold font-['Poppins'] ">
                          <FaEnvelope className="text-[15px]" /> CALL
                        </button>
                        <button className="flex grow  justify-center items-center p-1 px-2 border rounded-md text-white border-[#25C55B] bg-main hover:text-green-600  text-sm font-semibold font-['Poppins'] ">
                          <FaWhatsapp size={20} />
                        </button>
                      </div>
                      <div className="hidden md:flex justify-start gap-2 xl:mt-1 ">
                        <button className="w-[25%] h-[56px] p-1  justify-center items-center border rounded-md text-[#25C55B] border-[#25C55B] hover:bg-[#25C55B] hover:text-white text-3vw font-semibold font-['Poppins'] ">
                          Call
                        </button>
                        <button className="w-[29%] h-[56px] p-1  justify-center items-center border rounded-md text-[#25C55B] border-[#25C55B] hover:bg-[#25C55B] hover:text-white text-3vw font-semibold font-['Poppins'] ">
                          Message
                        </button>
                        <button className="w-[33%] h-[56px] p-1  justify-center items-center bg-[#25C55B] hover:bg-green-800 text-white rounded-md text-3vw font-semibold font-['Poppins'] ">
                          Whatsapp
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="justify-center flex">
                  <div className="flex flex-row items-center  flex-nowrap overflow-x-auto ml-5  gap-2 mt-6 ">
                    {stories.map((story) => (
                      <img
                        src={story.img}
                        className="w-[190px] h-[280px]   cursor-pointer"
                      />
                    ))}
                  </div>
                </div> */}
                <div className="hidden md:block">
                  <CustomScrollContainer
                    containerId="container15"
                    leftButtonId="leftButton15"
                    rightButtonId="rightButton15"
                  >
                    {stories.map((story) => (
                      <img
                        src={story.img}
                        className="w-[190px] h-[280px]   cursor-pointer"
                      />
                    ))}
                  </CustomScrollContainer>
                </div>
              </div>
            </div>
            <div
              className="w-full  relative  flex flex-col gap-4  p-3   "
              id="search-filter"
            >
              <div className="hidden md:block">
                <FilterForm />
              </div>
              <div className="  w-full relative  hidden md:flex flex-col gap-4 p-3 border rounded ">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                  Featured listings
                </h1>
                <div className="flex items-center gap-3 ">
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
                <div className="flex items-center gap-3 ">
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
                <div className="flex items-center gap-3 ">
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
              <div className="   hidden md:flex flex-col gap-2 p-3 border rounded">
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
              <div className="  w-full relative  hidden md:flex flex-col gap-4 p-3 border rounded">
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
      </section>
      <section className="min-h-[60vh] bg-[#E6FFE0] ">
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16 w-full h-full">
          <div className="flex justify-center items-end mt-[150px]">
            <div className="flex flex-col justify-start items-start gap-6 w-[600px]">
              <h1 className=" text-zinc-900 md:text-[45px] text-[30px] font-bold font-['Poppins'] md:leading-[54px]">
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
          <img src="/assets/storyimg.png" className="h-full md:mt-10 mt-2" />
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;
