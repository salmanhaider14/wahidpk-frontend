import {
  FaArrowAltCircleRight,
  FaArrowCircleDown,
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
import AgentSearchBar from "@/components/AgentSearchBar";
import { CiLocationOn } from "react-icons/ci";
import AgentSearchModal from "@/components/AgentSearchModal";
import AgentHeader from "@/components/AgentHeader";

export default function Agents() {
  const agents = [
    {
      img: "/assets/propertyimg.png",
      name: "ABC Associates",
      desc: "19 For Sale | 32 For Rent",
      location: "Lahore",
    },
    {
      img: "/assets/propertyimg.png",
      name: "ABC Associates",
      desc: "19 For Sale | 32 For Rent",
      location: "Lahore",
    },
    {
      img: "/assets/propertyimg.png",
      name: "ABC Associates",
      desc: "19 For Sale | 32 For Rent",
      location: "Lahore",
    },
    {
      img: "/assets/propertyimg.png",
      name: "ABC Associates",
      desc: "19 For Sale | 32 For Rent",
      location: "Lahore",
    },
  ];
  const cities = [
    { name: "Lahore", agencies: 1000 },
    { name: "Islamabad", agencies: 1000 },
    { name: "Karachi", agencies: 1000 },
    { name: "Multan", agencies: 1000 },
  ];

  return (
    <>
      <main className="">
        <AgentHeader />
        <section className=" bg-white">
          <h1 className="text-zinc-900 md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
            Featured Agencies
          </h1>
          <div className="flex justify-center">
            <div className="flex  items-center gap-8 overflow-x-auto mt-8">
              {agents.map((agent) => (
                <Link href="/single-agent">
                  <div className="w-[300px]   relative cursor-pointer   p-2 flex items-center gap-4 ">
                    <img src={agent.img} className="w-[100px]" />
                    <div className="flex flex-col gap-2">
                      <h1 className=" text-zinc-900 md:text-md text-sm font-semibold font-['Poppins'] ">
                        {agent.name}
                      </h1>

                      <p className="text-gray-500 md:text-md text-sm font-normal font-['Poppins']  leading-[18px]">
                        {agent.desc}
                      </p>
                      <p className="text-neutral-700 md:text-md text-sm font-normal font-['Poppins']  leading-[18px] flex items-center gap-2">
                        <CiLocationOn className="text-main" /> {agent.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="min-h-[60vh]  bg-white">
          <h1 className="text-zinc-900 md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
            Browse Agents By Cities
          </h1>
          <div className="flex justify-center">
            <div className="flex  items-center gap-8  overflow-x-auto mt-8">
              {cities.map((city) => (
                <div className="w-[370px] h-[130px]  relative cursor-pointer bg-white rounded-lg shadow-lg p-4 flex items-start flex-col md:gap-4 gap-2 border">
                  <div>
                    <h1 className=" text-zinc-900 md:text-xl text-lg font-semibold font-['Poppins'] ">
                      {city.name}
                    </h1>

                    <p className="text-gray-500 md:text-md text-sm font-normal font-['Poppins']  leading-[18px]">
                      {city.agencies} Agencies
                    </p>
                  </div>
                  <Link href={"#"} className="text-blue-500 md:text-md text-sm">
                    View Trend
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="min-h-[60vh] bg-[#E6FFE0]  ">
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
      </main>
    </>
  );
}
