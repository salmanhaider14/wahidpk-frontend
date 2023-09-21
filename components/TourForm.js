"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

const TourForm = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className=" w-full relative  border flex flex-col gap-5 p-3  bg-white rounded-lg">
      <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Schedule a Tour
      </h1>
      <p className=" text-neutral-700 text-[17px] font-normal font-['Poppins'] leading-relaxed">
        Choose the most suitable day
      </p>
      <div className=" justify-between items-start gap-[12.14px] inline-flex flex-wrap">
        <div className=" p-[19.43px] rounded-xl border-2 border-gray-400 flex-col justify-center items-center gap-[7.29px] inline-flex">
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Mon
          </div>
          <div className="self-stretch text-center text-black text-[21.86px] font-semibold font-['Poppins']">
            17
          </div>
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Apr
          </div>
        </div>
        <div className=" p-[19.43px] rounded-xl border-2 border-green-500 flex-col justify-center items-center gap-[7.29px] inline-flex">
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Mon
          </div>
          <div className="self-stretch text-center text-green-500 text-[21.86px] font-semibold font-['Poppins']">
            18
          </div>
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Apr
          </div>
        </div>
        <div className=" p-[19.43px] rounded-xl border-2 border-gray-400 flex-col justify-center items-center gap-[7.29px] inline-flex">
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Mon
          </div>
          <div className="self-stretch text-center text-black text-[21.86px] font-semibold font-['Poppins']">
            19
          </div>
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Apr
          </div>
        </div>
        <div className=" p-[19.43px] rounded-xl border-2 border-gray-400 flex-col justify-center items-center gap-[7.29px] inline-flex">
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Mon
          </div>
          <div className="self-stretch text-center text-black text-[21.86px] font-semibold font-['Poppins']">
            20
          </div>
          <div className="self-stretch text-center text-neutral-400 text-[17px] font-normal font-['Poppins'] leading-relaxed">
            Apr
          </div>
        </div>
      </div>
      <p className="text-black text-[17px] font-semibold font-['Poppins'] leading-relaxed">
        Tour Type
      </p>
      <button className="text-center gap-3 text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        In Person <AiOutlineCheckCircle size={25} />
      </button>
      <FormControl className="bg-white ">
        <InputLabel id="demo-simple-select-label">Choose Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Choose Time"
          onChange={handleChange}
        >
          <MenuItem value={10}>Lahore</MenuItem>
          <MenuItem value={20}>Sargodha</MenuItem>
          <MenuItem value={30}>Islamabad</MenuItem>
        </Select>
      </FormControl>
      <input
        type="text"
        placeholder="Your Name"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Phone Number"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Email Address"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

      <button className="text-center gap-3 text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        Submit a Tour Request <FaArrowRight size={25} />
      </button>
    </div>
  );
};

export default TourForm;
