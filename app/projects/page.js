import Header from "../../components/Header";

import { FaArrowAltCircleRight, FaPhone } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Projects() {
  const developers = [
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
  return (
    <>
      <main className="">
        <Header />
        <section className="min-h-[60vh] bg-white">
          <h1 className="text-zinc-900 drop-shadow-lg text-[45px] text-center font-bold font-['Poppins'] pt-[50px]">
            Featured Developers
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
            Featured dev
          </p>
          <div className="flex justify-center items-center gap-2 flex-wrap mt-6">
            {developers.map((story) => (
              <div className="w-[210px] h-[150px] relative cursor-pointer">
                <img src={story.img} className="w-full h-full" />
              </div>
            ))}
          </div>
        </section>

        <section className="min-h-screen bg-[#E6FFE0]  bg-opacity-7 p-3 ">
          <h1 className="text-zinc-900 drop-shadow-lg text-[45px] text-center font-bold font-['Poppins'] pt-[50px]">
            Latest Projects
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
            Check out the latest properties available for rent in Pakistan
          </p>
          <div className="flex justify-center items-center gap-4 flex-wrap mt-6 mb-[65px]">
            {properties.map((property) => (
              <div className="w-[330px] h-[440px] bg-white relative cursor-pointer rounded-2xl shadow-lg p-2 flex flex-col gap-3 border">
                <img
                  src="/assets/featuredtag.png"
                  className="absolute top-5 left-0"
                />
                <img
                  src="/assets/saletag.png"
                  className="absolute top-12 left-0"
                />
                <img src={property.img} className="w-full h-1/2" />
                <h1 className=" text-zinc-900 text-lg font-semibold font-['Poppins'] pt-3">
                  {property.title}
                </h1>

                <p className="text-neutral-700 text-xs font-normal font-['Poppins']  leading-[18px]">
                  {property.desc}
                </p>
                <h1 className=" text-[#25C55B] text-lg font-semibold font-['Poppins']">
                  Starting at
                </h1>

                <hr />
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 bg-zinc-300 rounded-full" />
                  <p className="flex items-center gap-2">Check more details</p>
                </div>
              </div>
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
                <h1 className=" text-black md:text-[45px] text-[30px]  font-extrabold font-['Poppins']">
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
        <section className="min-h-[70vh] bg-green-100">
          <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16">
            <div className="flex justify-center  items-center flex-col gap-5 mt-8">
              <h1 className="text-zinc-900 text-5xl font-bold font-['Poppins'] leading-[56.72px]">
                Join Developers Pool
              </h1>
              <p className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-snug">
                Become an agent and get the commission you deserve
              </p>
              <img src="/assets/quoteico.png" />
              <p className=" text-center text-neutral-700 text-[16.81px] font-medium font-['Poppins'] leading-relaxed">
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
