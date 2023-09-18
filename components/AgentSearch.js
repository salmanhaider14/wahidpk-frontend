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
    <div className="md:w-[80%] w-full relative  border flex flex-col gap-5 p-3 bg-neutral-50 rounded-lg">
      <h1 className="text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Agent Search
      </h1>

      <TextField
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Property type"
      />
      <FormControl>
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
      <TextField
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Locations"
      />
      <TextField
        InputProps={{
          className: "h-[56px] ", // Add Tailwind CSS height class here
        }}
        label="Company Name"
      />

      <button className="text-center gap-3 text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        Search Now <FaSearch size={25} />
      </button>
    </div>
  );
};

export default AgentSearch;
