import AgentSearch from "@/components/AgentSearch";
import ContactAgent from "@/components/ContactAgent";
import TourForm from "@/components/TourForm";
import React from "react";
import { FaPhone, FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import Link from "next/link";

const SingleAgent = () => {
  const properties = [
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: 7500,
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: 7500,
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: 7500,
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: 7500,
      beds: 4,
      baths: 2,
      area: 1150,
    },
  ];

  return (
    <div>
      <section className="min-h-screen ">
        <div className="flex justify-center mt-10">
          <div className="grid md:grid-cols-3 gap-8 w-[80%]  p-4 relative">
            <div className="flex flex-col items-start gap-2  col-span-2 relative ">
              {" "}
              <div className="flex flex-col gap-6 ">
                <div className="max-w-[1070px] min-h-[300px] flex flex-wrap gap-2 relative shadow-md rounded-xl p-2">
                  <img src="/assets/propertyimg.png" className="w-[400px]" />
                  <div className="flex flex-col  flex-wrap max-w-[680px] ">
                    <h1 className=" text-zinc-900 text-[27.79px] font-bold font-['Poppins']">
                      Cameron Williamson
                    </h1>
                    <p className="">
                      <span className="text-neutral-400 text-lg font-normal font-['Poppins'] leading-relaxed">
                        Company Agent at{" "}
                      </span>
                      <span className="text-zinc-900 text-lg font-bold font-['Mulish'] leading-relaxed">
                        Themesflat
                      </span>
                    </p>
                    <div className=" flex flex-col gap-2 mt-6 mb-3">
                      <p className="flex items-center gap-2 text-main">
                        <img src="/assets/callinbound.png" /> +7-445-556-8337
                      </p>
                      <p className="flex items-center gap-2 ">
                        <img src="/assets/envelope.png" />{" "}
                        cameronwilliamson@gmail.com
                      </p>
                      <p className="flex items-center gap-2 ">
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
                  </div>
                </div>
                <div className="max-w-[1070px] min-h-[300px] flex flex-wrap gap-1 relative shadow-md rounded-xl p-2">
                  <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    About Cameron Williamson
                  </h1>
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
                </div>
                <div className="max-w-[1070px] min-h-[300px] max-h-[360px]  flex flex-wrap gap-1 relative shadow-md rounded-xl p-4">
                  <img
                    src="/assets/videotag.png"
                    className="absolute top-0 left-0"
                  />
                  <img
                    src="/assets/propertyimg.png"
                    className="w-full h-full "
                  />
                </div>
                <div className="max-w-[1070px] min-h-[300px] max-h-[360px]  flex flex-wrap gap-1 relative shadow-md rounded-xl p-4">
                  <img
                    src="/assets/agencytag.png"
                    className="absolute top-8 left-3"
                  />
                  <img
                    src="/assets/propertyimg.png"
                    className="w-full h-full "
                  />
                </div>
                <div className="flex items-center gap-4">
                  <h1 className="border-b-4 border-b-main text-[22.74px] font-semibold font-['Poppins'] text-main">
                    For Rent
                  </h1>
                  <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    For sale
                  </h1>
                  <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
                    Stories
                  </h1>
                </div>
                <hr />
                {properties.map((property) => (
                  <Link href="/single-agent">
                    <div className="max-w-[1070px] min-h-[300px] flex flex-wrap gap-2 relative shadow-md rounded-xl p-2">
                      <img
                        src="/assets/supremetag.png"
                        className="absolute top-5 left-0"
                      />
                      <img
                        src="/assets/saletag.png"
                        className="absolute top-12 left-0"
                      />
                      <img
                        src="/assets/propertyimg.png"
                        className="w-[330px]"
                      />
                      <div className="flex flex-col gap-3 flex-wrap max-w-[680px] ">
                        <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                          {property.title}
                        </h1>
                        <p className=" text-neutral-700 text-xs font-normal font-['Poppins'] leading-[18.87px]">
                          {property.desc}
                        </p>
                        <h1 className="text-[#25C55B] text-[20.96px] font-extrabold font-['Mulish']">
                          $ {property.price}
                        </h1>
                        <p className="flex items-center gap-2">
                          <img src="/assets/bed.png" /> Beds: {property.beds}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/bath.png" /> Baths: {property.baths}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/area.png" /> Sqft: {property.area}
                        </p>
                        <hr />
                        <div className="flex  gap-2  items-center">
                          <img
                            src="/assets/propertyimg.png"
                            className="w-[35px] h-[35px] rounded-full"
                          />
                          <h1 className="text-neutral-700 text-[13px] font-semibold font-['Poppins'] leading-tight">
                            Kathryn Murphy
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className=" max-w-[600px]   flex flex-col gap-4  p-3  ">
              <ContactAgent />
              <AgentSearch />
              <TourForm />
            </div>
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

export default SingleAgent;
