import { FaArrowRight, FaCheckCircle, FaPhone } from "react-icons/fa";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export default function Agents() {
  const Individualpackages = [
    {
      title: "Listing Slot",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Supreme Listing",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Super Supreme Listing",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Restore Credits",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
  ];
  const Individualpackages2 = [
    {
      title: "Photoshoot Credit",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Video Credit",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Home Story",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Story Ad Credit",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
    {
      title: "Home Inspection",
      subtitle: "Automatically reach potential customers",
      price: "120",
      desc: "Per month, per company or team members",
    },
  ];

  return (
    <>
      <main className="">
        <section className="min-h-[50vh]  bg-[#25C55B] relative p-2 flex justify-center items-center flex-col md:flex-row  gap-7">
          <button className="w-[70%] md:w-[200px] lg:w-[280px] h-[70px] flex justify-center items-center gap-2 text-xl font-bold bg-white hover:bg-gray-400">
            <FaArrowRight /> For Individuals
          </button>
          <button className="w-[70%] md:w-[200px] lg:w-[280px] h-[70px] flex justify-center items-center gap-2 text-xl font-bold bg-white hover:bg-gray-400">
            <FaArrowRight /> For Agency
          </button>
          <button className="w-[70%] md:w-[200px] lg:w-[280px] h-[70px] flex justify-center items-center gap-2 text-xl font-bold bg-white hover:bg-gray-400">
            <FaArrowRight /> For Developers
          </button>
        </section>
        <section className="my-6 bg-white">
          <h1 className="text-zinc-900 md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[50px]">
            Pricing plans for every budget
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-4 font-['Poppins'] leading-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
          <div className="flex justify-center">
            {" "}
            <div className="flex justify-start items-center gap-6 overflow-x-auto mt-8 py-6">
              {Individualpackages.map((pkg) => (
                <div className="w-[330px] h-[350px] relative cursor-pointer border flex flex-col gap-6 p-4 rounded-xl shadow-md">
                  <h1 className=" text-zinc-900 text-[25.38px] font-bold font-['Poppins']">
                    {pkg.title}
                  </h1>
                  <h2 className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-tight">
                    {pkg.subtitle}
                  </h2>

                  <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] leading-[51.08px]">
                    Rs. {pkg.price}{" "}
                    <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                      / mo
                    </span>
                  </h1>
                  <p className="w-[282.83px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
                    {pkg.desc}
                  </p>
                  <hr />
                  <button className="bg-[#E6FFE0] hover:bg-green-400 w-full h-[50px] justify-center items-center font-bold">
                    Buy Listing Slot
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex justify-start items-center gap-6 overflow-x-auto mt-12 py-6">
              {Individualpackages2.map((pkg) => (
                <div className="w-[280px] h-[300px] relative cursor-pointer border flex flex-col gap-3 p-4 rounded-xl shadow-md">
                  <h1 className=" text-zinc-900 text-[25.38px] font-bold font-['Poppins']">
                    {pkg.title}
                  </h1>
                  <h2 className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-tight">
                    {pkg.subtitle}
                  </h2>

                  <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] leading-[51.08px]">
                    Rs. {pkg.price}{" "}
                    <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                      / mo
                    </span>
                  </h1>
                  <p className="w-[282.83px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-tight">
                    {pkg.desc}
                  </p>
                  <hr />
                  <button className="bg-[#E6FFE0] hover:bg-green-400 w-full h-[60px] justify-center items-center font-bold">
                    Buy Listing Slot
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="min-h-[100vh] bg-white">
          <h1 className="text-zinc-900 md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[30px]">
            For Agencies
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
          <div className="flex justify-center">
            <div className="flex justify-start items-start gap-6 overflow-x-auto mt-14">
              <div className="w-[350px] h-[668px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Silver
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[183px] h-[66px] relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] leading-[51.08px]">
                        Rs.19
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[265px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Listing free
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[350px] h-[680px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Gold
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[300px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Pro listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[350px] h-[750px] p-[30px]  bg-[#25C55B] text-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-white text-3xl font-bold font-['Poppins']">
                      Platinum
                    </div>
                    <div className="self-stretch text-white text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-white text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-white text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-white text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[370px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> VIP listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[350px] h-[970px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Exclusive
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[600px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Pro listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[100vh] bg-white">
          <h1 className="text-zinc-900 md:text-[45px] text-3xl text-center font-bold font-['Poppins'] pt-[30px]">
            For Developers
          </h1>
          <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
            lobortis justo
          </p>
          <div className="flex justify-center">
            <div className="flex justify-start items-start gap-6  overflow-x-auto mt-14 ">
              <div className="w-[350px] h-[668px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Developer Lite
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="w-[183px] h-[66px] relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] leading-[51.08px]">
                        Rs.19
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[265px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Listing free
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[360px] h-[680px] p-[25px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className=" h-[68px] w-full flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Developer Standard
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] ">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[300px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Pro listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[350px] h-[750px] p-[30px] bg-[#25C55B] text-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-white text-3xl font-bold font-['Poppins']">
                      Developer Business
                    </div>
                    <div className="self-stretch text-white text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-white text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-white text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-white text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[370px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> VIP listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-white text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="white" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
              <div className="w-[350px] h-[970px] p-[30px] bg-white rounded-[10px] border border-zinc-100 flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[30px] flex">
                  <div className="self-stretch h-[68px] flex-col justify-start items-start gap-0.5 flex">
                    <div className="text-zinc-900 text-3xl font-bold font-['Poppins']">
                      Developer Exclusive
                    </div>
                    <div className="self-stretch text-neutral-700 text-sm font-semibold font-['Poppins'] leading-[21px]">
                      Automatically reach potential customers
                    </div>
                  </div>
                  <div className="self-stretch h-[118px] flex-col justify-start items-start gap-2.5 flex">
                    <div className=" relative">
                      <h1 className="text-zinc-900 text-[42.57px] font-bold font-['Poppins'] ">
                        Rs.120
                        <span className="text-neutral-400 text-[28.38px] font-bold font-['Poppins']">
                          / mo
                        </span>
                      </h1>
                    </div>
                    <div className="w-[299px] text-neutral-400 text-sm font-normal font-['Poppins'] leading-[21px]">
                      Per month, per company, charged annually{" "}
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-zinc-100" />
                <div className="self-stretch h-[600px] flex-col justify-start items-start gap-[15px] flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Pro listing
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Support 24/7
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Quick access to customers
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-5 h-5 relative" />
                    <div className="grow shrink basis-0 text-neutral-700 text-md font-normal font-['Mulish'] leading-[21px] flex items-center gap-3">
                      <FaCheckCircle color="green" /> Auto refresh ads
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[54px] px-[18px] py-4 bg-green-100 hover:bg-green-300 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                  <button className="text-center text-zinc-900 text-[15px] font-bold font-['Poppins'] leading-snug">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
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
            <img src="/assets/storyimg.png" className="h-full mt-10 mb-5" />
          </div>
        </section>
      </main>
    </>
  );
}
