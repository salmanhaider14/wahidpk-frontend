"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FaEnvelope, FaPhone, FaSearch, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const ContactAgent = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="md:w-[80%] w-full relative   border flex flex-col gap-5 p-3  bg-neutral-50 rounded-lg">
      <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Contact Agent
      </h1>
      <div className="flex gap-4 items-center flex-wrap">
        <img
          src="/assets/propertyimg.png"
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="flex flex-col ">
          <p className=" text-neutral-700 text-lg font-normal font-['Poppins'] leading-relaxed">
            Ahmad Asif
          </p>
          <h1 className=" text-neutral-700 text-lg font-semibold font-['Poppins'] leading-relaxed">
            (405) 555-0...
          </h1>
          <p className=" text-neutral-700 text-[15.16px] font-normal font-['Poppins'] leading-snug">
            info@ahmadasif.com
          </p>
        </div>
      </div>
      <TextField
        required
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Full name"
      />
      <TextField
        required
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Phone number"
      />
      <TextField
        required
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Email address"
      />
      <TextField
        required
        id="multiline-flexible"
        label="Message"
        multiline
        maxRows={6}
        minRows={4}
      />
      <div className="grid grid-cols-3 gap-3">
        <button className="col-span-2 text-center text-white rounded-md bg-[#25C55B] gap-2 text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
          Send Message <FaEnvelope />
        </button>
        <button className="text-center text-black rounded-md bg-[#E6FFE0] gap-2 text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
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
