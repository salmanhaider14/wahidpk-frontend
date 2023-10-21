import AgentSearch from "@/components/AgentSearch";
import ContactAgent from "@/components/ContactAgent";
import TourForm from "@/components/TourForm";
import React from "react";
import { FaEnvelope, FaPhone, FaSearch, FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import Link from "next/link";

const SingleAgent = () => {
  const properties = [
    {
      title: "5 Marla Brand New Luxury House ",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 1.3 Crore",
      beds: 4,
      baths: 2,
      area: 1150,
    },
  ];

  return (
    <div>
      <section className="min-h-screen ">
        <div className="flex justify-center mt-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:w-[80%] w-full  md:p-4 relative">
            <div className="flex flex-col items-start gap-2  lg:col-span-2 relative ">
              {" "}
              <div className="flex flex-col gap-6 ">
                <div className="max-w-[1070px] md:min-h-[200px] flex-wrap md:flex-nowrap flex gap-2  relative shadow-md rounded-xl p-2 border">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-full md:w-[40%] "
                  />
                  <div className="flex flex-col ">
                    <h1 className=" text-zinc-900 md:text-[22.79px] text-lg font-bold font-['Poppins']">
                      Cameron Williamson
                    </h1>
                    <p className="">
                      <span className="text-neutral-400 md:text-md text-sm font-normal font-['Poppins'] leading-relaxed">
                        Company Agent at{" "}
                      </span>
                      <span className="text-zinc-900 md:text-lg text-sm font-bold font-['Mulish'] leading-relaxed">
                        Themesflat
                      </span>
                    </p>
                    <div className=" flex flex-col gap-2 mt-4 ">
                      <p className="flex items-center gap-2 text-main md:text-md text-sm">
                        <img src="/assets/callinbound.png" /> +7-445-556-8337
                      </p>
                      <p className="flex items-center gap-2 md:text-md text-sm break-words flex-wrap ">
                        <img src="/assets/envelope.png" />{" "}
                        cameronwilliamson@gmail.com
                      </p>
                      <p className="flex items-center md:gap-2 md:text-md text-sm break-words flex-wrap ">
                        <CiLocationOn size={22} />
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                      </p>
                    </div>

                    <hr className="my-2" />
                    <div className="flex  gap-4  items-center mt-3">
                      <BiLogoFacebook size={35} color="#8E8E93" />
                      <BiLogoTwitter size={35} color="#8E8E93" />
                      <BiLogoLinkedin size={35} color="#8E8E93" />
                    </div>
                    <div className="flex items-center gap-3 md:hidden my-3">
                      <button className="text-center w-[75px] h-[40px] shadow-lg   text-black rounded-md bg-[#E6FFE0] gap-2 text-base font-bold font-['Poppins'] leading-normal ">
                        Email
                      </button>
                      <button className="text-center w-[75px] h-[40px] shadow-lg   text-black rounded-md bg-[#E6FFE0] gap-2 text-base font-bold font-['Poppins'] leading-normal ">
                        SMS
                      </button>
                      <button className="text-center  text-white rounded-md bg-[#25C55B] text-sm font-bold font-['Poppins'] w-[75px] h-[40px] ">
                        Call
                      </button>
                      <button className="text-center  text-white rounded-md bg-[#25C55B] text-sm font-bold font-['Poppins'] w-[80px] h-[40px] ">
                        Whatsapp
                      </button>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex flex-wrap md:gap-1 relative shadow-md rounded-xl p-2 border">
                  <h1 className=" text-zinc-900 md:text-[22.74px] text-[18px] font-semibold font-['Poppins']">
                    About Cameron Williamson
                  </h1>
                  <p className=" text-neutral-700 md:text-lg text-sm font-normal font-['Poppins'] leading-relaxed">
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
                </div>
                <div className="max-w-[1070px] min-h-[300px] max-h-[360px]  flex flex-wrap gap-1 relative  rounded-xl p-4 ">
                  <img
                    src="/assets/videotag.png"
                    className="absolute top-0 left-0"
                  />
                  <img
                    src="/assets/propertyimg.png"
                    className="w-full h-full "
                  />
                </div>
                <div className="max-w-[1070px] min-h-[300px] max-h-[360px]  flex flex-wrap gap-1 relative  rounded-xl p-4">
                  <img
                    src="/assets/agencytag.png"
                    className="absolute top-8 left-3"
                  />
                  <img
                    src="/assets/propertyimg.png"
                    className="w-full h-full "
                  />
                </div>
                <div className="flex items-center gap-4 ml-2">
                  <h1 className="border-b-4 border-b-main md:text-[22.74px] text-[18px] font-semibold font-['Poppins'] text-main">
                    For Rent
                  </h1>
                  <h1 className="text-zinc-900 md:text-[22.74px] text-[18px] font-semibold font-['Poppins']">
                    For sale
                  </h1>
                  <h1 className="text-zinc-900 md:text-[22.74px] text-[18px] font-semibold font-['Poppins']">
                    Stories
                  </h1>
                </div>
                <hr />
                {properties.map((property) => (
                  <div className="max-w-[1070px] md:min-h-[260px] min-h-[130px] flex gap-2 relative shadow-md rounded-xl p-2 border">
                    <img
                      src="/assets/supremetag.png"
                      className="absolute top-5 left-0 md:w-28 w-20"
                    />
                    <img
                      src="/assets/saletag2.png"
                      className="absolute top-12 left-0 md:w-20 w-10 "
                    />
                    <img src="/assets/propertyimg.png" className="w-[35%] " />

                    <div className="flex flex-col md:gap-4 lg:gap-3 xl:gap-4 gap-1  flex-wrap max-w-[680px] w-[63%]">
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
              </div>
            </div>
            <div className=" flex flex-col gap-4  p-3  ">
              <ContactAgent />
              <AgentSearch />
              <TourForm />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[60vh] bg-[#E6FFE0] ">
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16 w-full h-full mb-5">
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

export default SingleAgent;
