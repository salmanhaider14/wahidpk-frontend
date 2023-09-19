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

export default function Agents() {
  const agents = [
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
    {
      img: "/assets/storyimg.png",
      name: "Mr Patrick",
      desc: "He's our most trustworthy and quality provider agent",
    },
  ];

  return (
    <>
      <main className="">
        <section className="min-h-[50vh]  bg-[#E6FFE0] relative p-2 flex justify-center items-center flex-col gap-6">
          <h1 className="text-green-800 text-5xl font-bold">
            Explore Our Agents
          </h1>
          <FaArrowCircleDown
            color="green"
            size={40}
            className="cursor-pointer animate-bounce"
          />
        </section>
        <section className="min-h-[60vh] bg-white">
          <h1 className="text-zinc-900 text-[45px] text-center font-bold font-['Poppins'] pt-[50px]">
            Featured Agents
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
            Featured agents
          </p>
          <div className="flex justify-center items-center gap-8  flex-wrap mt-6">
            {agents.map((agent) => (
              <Link href="/single-agent">
                <div className="w-[300px] h-[300px] relative cursor-pointer bg-white rounded-2xl shadow-lg p-3">
                  <img src={agent.img} className="w-full h-1/2" />
                  <h1 className=" text-zinc-900 text-lg font-semibold font-['Poppins'] pt-3">
                    {agent.name}
                  </h1>

                  <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                    {agent.desc}
                  </p>
                  <h1 className=" text-[#25C55B] text-lg font-semibold pt-4 font-['Poppins']">
                    Available
                  </h1>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="min-h-screen "
          style={{ backgroundImage: "/assets/contactbg.png" }}
        >
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16">
            <div className="flex md:justify-end md:items-end justify-center items-center  flex-wrap w-full min-h-[500px]">
              <div className="flex flex-col gap-3  justify-start items-center md:items-start text-center md:text-start  w-[540px] min-h-[500px] flex-wrap ">
                <h1 className=" text-black md:text-[45px] text-[30px]  font-extrabold font-['Mulish']">
                  We provide the most <br /> suitable and quality
                  <br />
                  real estate.
                </h1>
                <p className=" text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
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
                    <div className="self-stretch text-[#25C55B] text-3xl font-extrabold font-['Mulish']">
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
                    <div className="self-stretch text-[#25C55B] text-base font-normal font-['Poppins'] leading-normal">
                      info@wahid.pk
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="min-h-[70vh] bg-green-100">
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16">
            <div className="flex justify-center  items-center flex-col gap-5 mt-8">
              <h1 className="text-zinc-900 text-5xl font-bold font-['Poppins'] leading-[56.72px]">
                Become Our Agents
              </h1>
              <p className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                Become an agent and get the commission you deserve
              </p>
              <img src="/assets/quoteico.png" />
              <p className=" w-2/3 text-center text-neutral-700 text-[16.81px] font-medium font-['Poppins'] leading-relaxed">
                With a great working history, we have built strong relationships
                with more than 1000+ real estate business partners, providing
                profitable opportunities for investors in all cities of
                Pakistan. We are proud to work with agents and business partners
                who are just as passionate about bringing the best properties to
                everyone as we are.{" "}
              </p>
              <div className="w-[292.01px] h-[69px] flex-col justify-start items-center inline-flex">
                <div className="self-stretch text-center text-zinc-900 text-[16.81px] font-semibold font-['Poppins'] leading-relaxed">
                  MA Sheikh
                </div>
                <div className="self-stretch text-center text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                  CEO and founder at Wahid Properties (PVT) Limited
                </div>
              </div>
              <img
                className="w-[138.65px] h-[51.47px]"
                src="/assets/sign.png"
              />
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
      </main>
    </>
  );
}
