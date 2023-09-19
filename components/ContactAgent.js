"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FaEnvelope, FaPhone, FaSearch, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const ContactAgent = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className=" w-full relative   border flex flex-col gap-5 p-3  bg-[#E5E5EA] rounded-lg">
      <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Contact Agent
      </h1>
      <div className="flex gap-4 items-center flex-wrap">
        <img
          src="/assets/propertyimg.png"
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col flex-wrap ">
          <p className=" text-neutral-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Ahmad Asif
          </p>
          <h1 className=" text-neutral-700 text-lg font-semibold font-['Poppins'] leading-relaxed">
            (405) 555-0...
          </h1>
          <p className=" text-neutral-700 text-[12.16px] font-normal font-['Poppins'] leading-snug">
            info@ahmadasif.com
          </p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Full Name"
        id="default-input"
        class="h-[56px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Phone Number"
        id="default-input"
        class="h-[56px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Email Address"
        id="default-input"
        class="h-[56px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <TextField
        required
        id="multiline-flexible"
        label="Message"
        multiline
        maxRows={6}
        minRows={4}
        className="bg-white"
      />
      <div className="grid grid-cols-3 gap-3">
        <button className="col-span-2 flex-wrap text-center text-white rounded-md bg-[#25C55B] gap-2 text-base font-bold font-['Poppins'] leading-normal min-h-[56px] flex justify-center items-center">
          Send Message <FaEnvelope />
        </button>
        <button className="text-center flex-wrap  text-black rounded-md bg-[#E6FFE0] gap-2 text-base font-bold font-['Poppins'] leading-normal min-h-[56px] flex justify-center items-center">
          Call <BsFillTelephoneInboundFill />
        </button>
      </div>
      <button className="text-center gap-3 text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        Whatsapp <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default ContactAgent;
