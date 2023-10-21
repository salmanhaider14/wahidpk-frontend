import Header from "../../components/Header";

import { FaArrowAltCircleRight, FaPhone } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CustomScrollContainer from "@/components/CustomScrollContainer";

export default function Projects() {
  const developers = [
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
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
  ];
  return (
    <main>
      <Header />
      <section className="mb-[50px] bg-white overflow-x-auto">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Featured Developers
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Featured dev
        </p>
        <CustomScrollContainer
          containerId="container7"
          leftButtonId="leftButton7"
          rightButtonId="rightButton7"
        >
          {developers.map((story) => (
            <img
              src={story.img}
              className="md:h-[150px] md:w-[210px] w-[150px]"
            />
          ))}
        </CustomScrollContainer>
        {/* <div className="flex justify-center   ">
          <div className="flex flex-row items-center flex-nowrap  relative   overflow-x-auto overflow-y-hidden ml-5   gap-2 mt-6 py-6 ">
            {developers.map((story) => (
              <img
                src={story.img}
                className="md:h-[150px] md:w-[210px] w-[150px]"
              />
            ))}
          </div>
        </div> */}
      </section>

      <section className=" bg-[#E6FFE0]  bg-opacity-7  ">
        <h1 className="text-zinc-900 drop-shadow-lg md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
          Latest Projects
        </h1>
        <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
          Check out the latest properties available for rent in Pakistan
        </p>
        <CustomScrollContainer
          containerId="container6"
          leftButtonId="leftButton6"
          rightButtonId="rightButton6"
        >
          {properties.map((property) => (
            <Link href={"/single-property"}>
              <div className="md:w-[330px] w-[230px] md:h-[440px] h-[370px] bg-white relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-2  rounded-xl border">
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

                <p className="text-neutral-700 text-sm font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                  Starting At
                </h1>

                <hr />
                <div className="flex justify-between items-center mt-2">
                  <div className="w-10 h-10 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2">3 Years Ago</p>
                </div>
              </div>
            </Link>
          ))}
        </CustomScrollContainer>
        {/* <div className="flex justify-center ">
          <div className="flex cursor-grab hover:cursor-grabbing ml-5 items-start gap-4 overflow-x-auto mt-6 py-6 mb-[60px] ">
            {properties.map((property) => (
              <Link href={"/single-property"}>
                <div className="md:w-[330px] w-[230px] md:h-[440px] h-[370px] bg-white relative cursor-pointer shadow-lg p-2 flex flex-col md:gap-3 gap-2  rounded-xl border">
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

                  <p className="text-neutral-700 text-sm font-normal font-['Poppins']  leading-[18px]">
                    {property.desc}
                  </p>
                  <h1 className=" text-[#25C55B] md:text-lg text-sm font-semibold font-['Poppins']">
                    Starting At
                  </h1>

                  <hr />
                  <div className="flex justify-between items-center mt-2">
                    <div className="w-10 h-10 bg-zinc-300 rounded-full" />
                    <p className="flex items-center gap-2">3 Years Ago</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </section>

      <section
        className="overflow-x-hidden w-full "
        style={{ backgroundImage: "/assets/contactbg.png" }}
      >
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 md:justify-center justify-start items-center mt-16">
          <div className="flex md:justify-start lg:justify-end md:items-end justify-center items-start  flex-wrap w-full min-h-[500px]">
            <div className="flex flex-col gap-1 md:gap-3  justify-start items-center md:items-start text-center md:text-start  w-[540px] min-h-[500px] flex-wrap ms-10 ">
              <h1 className=" text-black md:text-[45px] text-lg font-['Poppins']  font-extrabold leading-normal ">
                We provide the most <br /> suitable and quality
                <br />
                real estate.
              </h1>
              <p className=" text-neutral-400 md:text-sm text-sm pt-2 font-normal font-['Poppins'] leading-[21px] w-[70%]">
                Fill in your basic information and one of our representative
                will be in touch.
              </p>
              <div className="flex items-center md:flex-row flex-col gap-2 md:gap-8 md:mt-7 flex-wrap">
                <img src="/assets/locationico.png" className="w-10 md:w-14" />
                <div className="w-[429px] h-[71px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Office address
                  </div>
                  <div className="self-stretch text-neutral-700 text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                    Office 6, Street 22nd, Block J<br />
                    Al-Rehman Garden Phase 2 Lahore
                  </div>
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col gap-2 md:gap-8 md:mt-7 flex-wrap">
                <img src="/assets/callico.png" className="w-10 md:w-14" />
                <div className="w-[429px] h-[61px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Request a call back
                  </div>
                  <div className="self-stretch text-[#25C55B] text-md md:text-2xl font-extrabold font-['Poppins']">
                    +92 (312) 4823-680
                  </div>
                </div>
              </div>
              <div className="flex items-center md:flex-row flex-col gap-2 md:gap-8 md:mt-7 flex-wrap">
                <img src="/assets/mailico.png" className="w-10 md:w-14" />
                <div className="w-[429px] h-[47px] flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-neutral-400 text-sm font-semibold font-['Poppins'] leading-[21px]">
                    Email us
                  </div>
                  <div className="self-stretch text-[#25C55B] text-sm md:text-xl font-normal font-['Poppins'] leading-normal">
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
          <div className="flex justify-center  items-center flex-col gap-2 md:gap-5 ">
            <h1 className="text-zinc-900 md:text-5xl text-xl font-bold font-['Poppins'] leading-[56.72px]">
              Join Developer's Pool
            </h1>
            <p className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
              Become an agent and get the commission you deserve
            </p>
            <img src="/assets/quoteico.png" className="w-10 md:w-14" />
            <p className=" w-2/3 text-center text-neutral-700 text-sm md:text-md font-medium font-['Poppins'] leading-relaxed">
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
              <div className="self-stretch text-center text-neutral-400 text-sm font-normal py-1 font-['Poppins'] leading-snug">
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
    </main>
  );
}
