"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaEnvelope, FaPhone, FaSearch, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const AgentSearch = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="md:w-[80%] w-full relative  border flex flex-col gap-5 p-3  bg-[#E5E5EA] rounded-lg">
      <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Agent Search
      </h1>

      <input
        type="text"
        placeholder="Property Type"
        id="default-input"
        class="h-[56px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <FormControl className="bg-white">
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Lahore</MenuItem>
          <MenuItem value={20}>Sargodha</MenuItem>
          <MenuItem value={30}>Islamabad</MenuItem>
        </Select>
      </FormControl>
      <input
        type="text"
        placeholder="Locations"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <input
        type="text"
        placeholder="Company Name"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <button className="text-center gap-3 text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        Search Now <FaSearch size={25} />
      </button>
    </div>
  );
};

export default AgentSearch;
