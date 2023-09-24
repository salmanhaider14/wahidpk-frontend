"use client";
import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
const AgentSearchBar = () => {
  const [age, setAge] = useState();
  const handleChange = () => {};
  return (
    <div className="max-w-[1100px]  bg-white m-auto  rounded-xl flex flex-wrap p-6 gap-2 border absolute bottom-0">
      <FormControl className="md:w-[200px] w-full ">
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
        placeholder="Location"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <input
        type="text"
        placeholder="Property Type"
        id="default-input"
        class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <FormControl className="md:w-[200px] w-full ">
        <InputLabel id="demo-simple-select-label">Company Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>X</MenuItem>
          <MenuItem value={20}>Y</MenuItem>
          <MenuItem value={30}>Z</MenuItem>
        </Select>
      </FormControl>
      <button class=" flex items-center gap-2 h-[56px] text-white text-[15px] font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
        Search Now <FaSearch />
      </button>
    </div>
  );
};

export default AgentSearchBar;
