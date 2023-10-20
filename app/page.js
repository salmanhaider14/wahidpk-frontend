"use client";
import Header from "@/components/Header";
import {
  FaArrowAltCircleRight,
  FaArrowRight,
  FaBath,
  FaBed,
  FaChartArea,
  FaEnvelope,
  FaHome,
  FaPhone,
  FaPlus,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";
import CustomScrollContainer from "@/components/CustomScrollContainer";

export default function Home() {
  const stories = [
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
    { img: "/assets/storyimg.png" },
  ];
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

  // const scrollContainer = (scrollOffset) => {
  //   const container = document.querySelector(".scroll-container");
  //   container.scrollBy({
  //     top: 0,
  //     left: scrollOffset,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = document.querySelector(".scroll-container");
  //     const leftButton = document.getElementById("left-button");
  //     const rightButton = document.getElementById("right-button");

  //     if (container.scrollLeft > 0) {
  //       leftButton.style.display = "block";
  //     } else {
  //       leftButton.style.display = "none";
  //     }

  //     if (
  //       container.scrollWidth - container.clientWidth >
  //       container.scrollLeft
  //     ) {
  //       rightButton.style.display = "block";
  //     } else {
  //       rightButton.style.display = "none";
  //     }
  //   };

  //   document
  //     .querySelector(".scroll-container")
  //     .addEventListener("scroll", handleScroll);

  //   return () => {
  //     document.querySelector(".scroll-container");
  //     // .removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main>
      <Header />
      <section className=" bg-white overflow-x-auto">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Featured Stories
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Featured stories, a quick look of any property
        </p>
        {/* <div className="justify-center flex ">
          <div className="flex flex-row items-center  flex-nowrap  ml-5  overflow-x-auto gap-2 mt-4 py-6 ">
            {stories.map((story) => (
              <img
                src={story.img}
                className="md:w-[190px] md:h-[280px] w-[120px] cursor-pointer"
              />
            ))}
          </div>
        </div> */}
        <CustomScrollContainer
          containerId="container8"
          leftButtonId="leftButton8"
          rightButtonId="rightButton8"
        >
          {stories.map((story) => (
            <img
              src={story.img}
              className="md:w-[190px] md:h-[280px] w-[120px] cursor-pointer"
            />
          ))}
        </CustomScrollContainer>
      </section>
      <section className="mb-[60px] bg-white">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Featured properties
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Supreme Plus properties available for sale or rent
        </p>
        <CustomScrollContainer
          containerId="container1"
          leftButtonId="leftButton1"
          rightButtonId="rightButton1"
        >
          {properties.map((property) => (
            <Link href={"/single-property"}>
              <div className="md:w-[330px] w-[230px] md:min-h-[480px] min-h-[370px] relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                <img
                  src="/assets/featuredtag.png"
                  className="absolute top-5 left-0"
                />
                <img
                  src="/assets/saletag.png"
                  className="absolute top-12 left-0"
                />
                <img src={property.img} className="w-full h-1/2" />
                <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                  {property.title}
                </h1>

                <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                  ${property.price}
                </h1>
                <div className="flex justify-start items-center gap-3 mt-3">
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bed.png" />{" "}
                    <span className="hidden md:flex"> Beds:</span>{" "}
                    <span className="font-bold"> {property.beds} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bath.png" />{" "}
                    <span className="hidden md:flex"> Baths:</span>{" "}
                    <span className="font-bold"> {property.baths} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/area.png" />{" "}
                    <span className="hidden md:flex"> Sqft:</span>{" "}
                    <span className="font-bold"> {property.sqft} </span>
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-2">
                  <p className="flex items-center md:gap-2">
                    <FaPlus color="green" />{" "}
                    <span className="hidden md:flex">Compare</span>
                  </p>
                  <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2 text-sm">3 Years Ago</p>
                </div>
              </div>
            </Link>
          ))}
        </CustomScrollContainer>
        {/* <div className="flex justify-center relative">
          <div
            className="container"
            style={{ overflowX: "hidden", position: "relative" }}
          >
            <div className="scroll-container flex cursor-grab hover:cursor-grabbing ml-5 items-start gap-4 overflow-x-auto  mt-4 py-6 container ">
              {properties.map((property) => (
                <Link href={"/single-property"}>
                  <div className="md:w-[330px] w-[230px] md:min-h-[480px] min-h-[370px] relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                    <img
                      src="/assets/featuredtag.png"
                      className="absolute top-5 left-0"
                    />
                    <img
                      src="/assets/saletag.png"
                      className="absolute top-12 left-0"
                    />
                    <img src={property.img} className="w-full h-1/2" />
                    <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                      {property.title}
                    </h1>

                    <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                      {property.desc}
                    </p>
                    <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                      ${property.price}
                    </h1>
                    <div className="flex justify-start items-center gap-3 mt-3">
                      <p className="flex justify-center items-center gap-2 ">
                        <img src="/assets/bed.png" />{" "}
                        <span className="hidden md:flex"> Beds:</span>{" "}
                        <span className="font-bold"> {property.beds} </span>
                      </p>
                      <p className="flex justify-center items-center gap-2 ">
                        <img src="/assets/bath.png" />{" "}
                        <span className="hidden md:flex"> Baths:</span>{" "}
                        <span className="font-bold"> {property.baths} </span>
                      </p>
                      <p className="flex justify-center items-center gap-2 ">
                        <img src="/assets/area.png" />{" "}
                        <span className="hidden md:flex"> Sqft:</span>{" "}
                        <span className="font-bold"> {property.sqft} </span>
                      </p>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center mt-2">
                      <p className="flex items-center md:gap-2">
                        <FaPlus color="green" />{" "}
                        <span className="hidden md:flex">Compare</span>
                      </p>
                      <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                      <p className="flex items-center gap-2 text-sm">
                        3 Years Ago
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button
            id="left-button"
            onClick={() => scrollContainer(-300)} // Adjust the value based on your needs
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded"
            style={{ display: "none" }}
          >
            {"<"}
          </button>
          <button
            id="right-button"
            onClick={() => scrollContainer(300)} // Adjust the value based on your needs
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded"
          >
            {">"}
          </button>
        </div> */}
      </section>
      <section className=" bg-[#E6FFE0]  bg-opacity-7  ">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-2xl text-center font-bold font-['Poppins'] pt-[50px]">
          Latest Properties For Rent
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Check out the latest properties available for rent in Pakistan
        </p>
        <CustomScrollContainer
          containerId="container2"
          leftButtonId="leftButton2"
          rightButtonId="rightButton2"
        >
          {properties.map((property) => (
            <Link href={"/single-property"}>
              <div className="md:w-[330px] w-[230px] md:h-[480px] h-[370px] bg-white relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                <img
                  src="/assets/featuredtag.png"
                  className="absolute top-5 left-0"
                />
                <img
                  src="/assets/saletag.png"
                  className="absolute top-12 left-0"
                />
                <img src={property.img} className="w-full h-1/2" />
                <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                  {property.title}
                </h1>

                <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                  ${property.price}
                </h1>
                <div className="flex justify-start items-center gap-3 mt-3">
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bed.png" />{" "}
                    <span className="hidden md:flex"> Beds:</span>{" "}
                    <span className="font-bold"> {property.beds} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bath.png" />{" "}
                    <span className="hidden md:flex"> Baths:</span>{" "}
                    <span className="font-bold"> {property.baths} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/area.png" />{" "}
                    <span className="hidden md:flex"> Sqft:</span>{" "}
                    <span className="font-bold"> {property.sqft} </span>
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-2">
                  <p className="flex items-center md:gap-2">
                    <FaPlus color="green" />{" "}
                    <span className="hidden md:flex">Compare</span>
                  </p>
                  <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2 text-sm">3 Years Ago</p>
                </div>
              </div>
            </Link>
          ))}{" "}
        </CustomScrollContainer>
        {/* <div className="flex justify-center ">
          <div className="flex cursor-grab hover:cursor-grabbing ml-5 items-start gap-4 overflow-x-auto mt-6 py-6 mb-[60px] ">
            {properties.map((property) => (
              <Link href={"/single-property"}>
                <div className="md:w-[330px] w-[230px] md:h-[480px] h-[370px] bg-white relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                  <img
                    src="/assets/featuredtag.png"
                    className="absolute top-5 left-0"
                  />
                  <img
                    src="/assets/saletag.png"
                    className="absolute top-12 left-0"
                  />
                  <img src={property.img} className="w-full h-1/2" />
                  <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                    {property.title}
                  </h1>

                  <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                    {property.desc}
                  </p>
                  <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                    ${property.price}
                  </h1>
                  <div className="flex justify-start items-center gap-3 mt-3">
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/bed.png" />{" "}
                      <span className="hidden md:flex"> Beds:</span>{" "}
                      <span className="font-bold"> {property.beds} </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/bath.png" />{" "}
                      <span className="hidden md:flex"> Baths:</span>{" "}
                      <span className="font-bold"> {property.baths} </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/area.png" />{" "}
                      <span className="hidden md:flex"> Sqft:</span>{" "}
                      <span className="font-bold"> {property.sqft} </span>
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <p className="flex items-center md:gap-2">
                      <FaPlus color="green" />{" "}
                      <span className="hidden md:flex">Compare</span>
                    </p>
                    <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                    <p className="flex items-center gap-2 text-sm">
                      3 Years Ago
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </section>
      <section className="mb-[60px] bg-white">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Properties For Sale
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          lobortis justo
        </p>
        <CustomScrollContainer
          containerId="container3"
          leftButtonId="leftButton3"
          rightButtonId="rightButton3"
        >
          {properties.map((property) => (
            <Link href={"/single-property"}>
              <div className="md:w-[330px] w-[230px] md:h-[480px] h-[370px] relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                <img
                  src="/assets/featuredtag.png"
                  className="absolute top-5 left-0"
                />
                <img
                  src="/assets/saletag.png"
                  className="absolute top-12 left-0"
                />
                <img src={property.img} className="w-full h-1/2" />
                <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                  {property.title}
                </h1>

                <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                  ${property.price}
                </h1>
                <div className="flex justify-start items-center gap-3 mt-3">
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bed.png" />{" "}
                    <span className="hidden md:flex"> Beds:</span>{" "}
                    <span className="font-bold"> {property.beds} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/bath.png" />{" "}
                    <span className="hidden md:flex"> Baths:</span>{" "}
                    <span className="font-bold"> {property.baths} </span>
                  </p>
                  <p className="flex justify-center items-center gap-2 ">
                    <img src="/assets/area.png" />{" "}
                    <span className="hidden md:flex"> Sqft:</span>{" "}
                    <span className="font-bold"> {property.sqft} </span>
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center mt-2">
                  <p className="flex items-center md:gap-2">
                    <FaPlus color="green" />{" "}
                    <span className="hidden md:flex">Compare</span>
                  </p>
                  <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2 text-sm">3 Years Ago</p>
                </div>
              </div>
            </Link>
          ))}
        </CustomScrollContainer>
        {/* <div className="flex justify-center">
          <div className="flex cursor-grab hover:cursor-grabbing ml-5 items-start gap-4 overflow-x-auto mt-6 py-6 ">
            {properties.map((property) => (
              <Link href={"/single-property"}>
                <div className="md:w-[330px] w-[230px] md:h-[480px] h-[370px] relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-1 rounded-xl border">
                  <img
                    src="/assets/featuredtag.png"
                    className="absolute top-5 left-0"
                  />
                  <img
                    src="/assets/saletag.png"
                    className="absolute top-12 left-0"
                  />
                  <img src={property.img} className="w-full h-1/2" />
                  <h1 className=" text-zinc-900 md:text-lg text-sm font-semibold font-['Poppins'] pt-3">
                    {property.title}
                  </h1>

                  <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                    {property.desc}
                  </p>
                  <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                    ${property.price}
                  </h1>
                  <div className="flex justify-start items-center gap-3 mt-3">
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/bed.png" />{" "}
                      <span className="hidden md:flex"> Beds:</span>{" "}
                      <span className="font-bold"> {property.beds} </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/bath.png" />{" "}
                      <span className="hidden md:flex"> Baths:</span>{" "}
                      <span className="font-bold"> {property.baths} </span>
                    </p>
                    <p className="flex justify-center items-center gap-2 ">
                      <img src="/assets/area.png" />{" "}
                      <span className="hidden md:flex"> Sqft:</span>{" "}
                      <span className="font-bold"> {property.sqft} </span>
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <p className="flex items-center md:gap-2">
                      <FaPlus color="green" />{" "}
                      <span className="hidden md:flex">Compare</span>
                    </p>
                    <div className="md:w-10 md:h-10 w-7 h-7 bg-zinc-300 rounded-full" />
                    <p className="flex items-center gap-2 text-sm">
                      3 Years Ago
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </section>
      <section className=" bg-neutral-100">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Featured Agencies
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Our top notch real estate agents
        </p>
        <CustomScrollContainer
          containerId="container4"
          leftButtonId="leftButton4"
          rightButtonId="rightButton4"
        >
          <div className="w-[350px] h-[330px] p-1 relative ">
            <img src="/assets/propertyimg.png" />
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                Wade Warren
              </h1>
              <div className="flex items-center gap-2">
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaPhone color="#8E8E93" size={20} />
                </div>{" "}
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaEnvelope color="#8E8E93" size={20} />
                </div>{" "}
              </div>
            </div>
            <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
              Salesperson
            </p>
          </div>
          <div className="w-[350px] h-[330px] p-1 relative ">
            <img src="/assets/propertyimg.png" />
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                Wade Warren
              </h1>
              <div className="flex items-center gap-2">
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaPhone color="#8E8E93" size={20} />
                </div>{" "}
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaEnvelope color="#8E8E93" size={20} />
                </div>{" "}
              </div>
            </div>
            <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
              Salesperson
            </p>
          </div>
          <div className="w-[350px] h-[330px] p-1 relative ">
            <img src="/assets/propertyimg.png" />
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                Wade Warren
              </h1>
              <div className="flex items-center gap-2">
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaPhone color="#8E8E93" size={20} />
                </div>{" "}
                <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                  <FaEnvelope color="#8E8E93" size={20} />
                </div>{" "}
              </div>
            </div>
            <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
              Salesperson
            </p>
          </div>
        </CustomScrollContainer>
        {/* <div className="justify-center flex">
          <div className="flex items-start gap-4 ml-5 overflow-x-auto mt-6 py-6">
            <div className="w-[350px] h-[330px] p-1 relative ">
              <img src="/assets/propertyimg.png" />
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                  Wade Warren
                </h1>
                <div className="flex items-center gap-2">
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaPhone color="#8E8E93" size={20} />
                  </div>{" "}
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaEnvelope color="#8E8E93" size={20} />
                  </div>{" "}
                </div>
              </div>
              <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
                Salesperson
              </p>
            </div>
            <div className="w-[350px] h-[330px] p-1 relative ">
              <img src="/assets/propertyimg.png" />
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                  Wade Warren
                </h1>
                <div className="flex items-center gap-2">
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaPhone color="#8E8E93" size={20} />
                  </div>{" "}
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaEnvelope color="#8E8E93" size={20} />
                  </div>{" "}
                </div>
              </div>
              <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
                Salesperson
              </p>
            </div>
            <div className="w-[350px] h-[330px] p-1 relative ">
              <img src="/assets/propertyimg.png" />
              <div className="flex justify-between items-center mt-4">
                <h1 className="text-zinc-900 text-lg font-semibold font-['Poppins']">
                  Wade Warren
                </h1>
                <div className="flex items-center gap-2">
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaPhone color="#8E8E93" size={20} />
                  </div>{" "}
                  <div class="w-10 h-10 border border-white rounded-full flex items-center justify-center cursor-pointer">
                    <FaEnvelope color="#8E8E93" size={20} />
                  </div>{" "}
                </div>
              </div>
              <p className="text-neutral-700 text-xs font-normal  font-['Poppins'] leading-[18px]">
                Salesperson
              </p>
            </div>
          </div>
        </div> */}
      </section>
      <section
        className="overflow-x-hidden w-full "
        style={{ backgroundImage: "/assets/contactbg.png" }}
      >
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 md:justify-center justify-start items-center mt-16">
          <div className="flex md:justify-start lg:justify-end md:items-end justify-center items-start  flex-wrap w-full min-h-[500px]">
            <div className="flex flex-col gap-3  justify-start items-center md:items-start text-center md:text-start  w-[540px] min-h-[500px] flex-wrap ms-10 ">
              <h1 className=" text-black md:text-[45px] text-[30px] font-['Poppins']  font-extrabold ">
                We provide the most <br /> suitable and quality
                <br />
                real estate.
              </h1>
              <p className=" text-neutral-400 md:text-sm text-xsm font-normal font-['Poppins'] leading-[21px] w-[70%]">
                Fill in your basic information and one of our representative
                will be in touch.
              </p>
              <div className="flex items-center md:flex-row flex-col gap-8 mt-7 flex-wrap">
                <img src="/assets/locationico.png" />
                <div className="w-[429px] h-[71px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Office address
                  </div>
                  <div className="self-stretch text-neutral-700 text-base font-normal font-['Poppins'] leading-normal">
                    Office 6, Street 22nd, Block J<br />
                    Al-Rehman Garden Phase 2 Lahore
                  </div>
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col gap-8 mt-7 flex-wrap">
                <img src="/assets/callico.png" />
                <div className="w-[429px] h-[61px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Request a call back
                  </div>
                  <div className="self-stretch text-[#25C55B] text-2xl font-extrabold font-['Poppins']">
                    +92 (312) 4823-680
                  </div>
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col gap-8 mt-7 flex-wrap">
                <img src="/assets/mailico.png" />
                <div className="w-[429px] h-[47px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Email us
                  </div>
                  <div className="self-stretch text-[#25C55B] text-xl font-normal font-['Poppins'] leading-normal">
                    info@wahid.pk
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
      <section className=" bg-green-100">
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16">
          <div className="flex justify-center  items-center flex-col gap-5 ">
            <h1 className="text-zinc-900 md:text-5xl text-3xl font-bold font-['Poppins'] leading-[56.72px]">
              Become Our Agents
            </h1>
            <p className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
              Become an agent and get the commission you deserve
            </p>
            <img src="/assets/quoteico.png" />
            <p className=" w-2/3 text-center text-neutral-700 text-[16.81px] font-medium font-['Poppins'] leading-relaxed">
              With a great working history, we have built strong relationships
              with more than 1000+ real estate business partners, providing
              profitable opportunities for investors in all cities of Pakistan.
              We are proud to work with agents and business partners who are
              just as passionate about bringing the best properties to everyone
              as we are.{" "}
            </p>
            <div className="w-[292.01px] h-[69px] flex-col justify-start items-center inline-flex">
              <div className="self-stretch text-center text-zinc-900 text-[16.81px] font-semibold font-['Poppins'] leading-relaxed">
                MA Sheikh
              </div>
              <div className="self-stretch text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                CEO and founder at Wahid Properties (PVT) Limited
              </div>
            </div>
            <img className="w-[138.65px] h-[51.47px]" src="/assets/sign.png" />
            <div className="flex items-center gap-5 flex-wrap">
              <button
                type="submit"
                class="text-white mt-2 flex items-center gap-2 bg-[#25C55B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaArrowAltCircleRight /> Join Us
              </button>
              <button
                type="submit"
                class="text-white mt-2 flex items-center gap-2 bg-[#25C55B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FaPhone /> Contact Us
              </button>
            </div>
          </div>
          <img src="/assets/largeimg.png " className="w-full h-full" />
        </div>
      </section>
      <section className="  ">
        {" "}
        <h1 className=" text-center pt-8 text-black md:text-[45px] text-3xl font-bold font-['Poppins'] leading-[54px]">
          From our blog
        </h1>
        <p className="pt-2 text-center text-neutral-400 md:text-sm text-xsm  font-normal font-['Poppins'] leading-[21px]">
          Read our recent blogs an stay updated with local & international
          market trends.
        </p>
        <CustomScrollContainer
          containerId="container5"
          leftButtonId="leftButton5"
          rightButtonId="rightButton5"
        >
          <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
            <img src="/assets/propertyimg.png" className="w-full " />

            <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
              Building gains into housing stocks and how to trade the sector
            </h1>

            <Link href={"#"}>
              {" "}
              <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                Read More <FaArrowRight />
              </p>{" "}
            </Link>
          </div>
          <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
            <img src="/assets/propertyimg.png" className="w-full " />

            <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
              Building gains into housing stocks and how to trade the sector
            </h1>

            <Link href={"#"}>
              {" "}
              <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                Read More <FaArrowRight />
              </p>{" "}
            </Link>
          </div>
          <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
            <img src="/assets/propertyimg.png" className="w-full " />

            <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
              Building gains into housing stocks and how to trade the sector
            </h1>

            <Link href={"#"}>
              {" "}
              <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                Read More <FaArrowRight />
              </p>{" "}
            </Link>
          </div>
        </CustomScrollContainer>
        {/* <div className="flex justify-center mb-[50px] overflow-y-hidden">
          <div className="flex items-start gap-4 p-2 overflow-x-auto overflow-y-hidden mt-6">
            <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
              <img src="/assets/propertyimg.png" className="w-full " />

              <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
                Building gains into housing stocks and how to trade the sector
              </h1>

              <Link href={"#"}>
                {" "}
                <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                  Read More <FaArrowRight />
                </p>{" "}
              </Link>
            </div>
            <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
              <img src="/assets/propertyimg.png" className="w-full " />

              <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
                Building gains into housing stocks and how to trade the sector
              </h1>

              <Link href={"#"}>
                {" "}
                <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                  Read More <FaArrowRight />
                </p>{" "}
              </Link>
            </div>
            <div className="w-[350px] max-w-none min-w-[250px] h-[330px] p-1 relative">
              <img src="/assets/propertyimg.png" className="w-full " />

              <h1 className="text-zinc-900 md:text-lg text-sm font-semibold py-2 font-['Poppins']">
                Building gains into housing stocks and how to trade the sector
              </h1>

              <Link href={"#"}>
                {" "}
                <p className=" text-green-600 flex items-center gap-2 md:text-md text-sm">
                  Read More <FaArrowRight />
                </p>{" "}
              </Link>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}
