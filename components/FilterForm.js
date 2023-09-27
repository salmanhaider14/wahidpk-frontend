"use client";
import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FaPhone, FaSearch } from "react-icons/fa";

const FilterForm = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="w-full relative  border flex flex-col gap-3 p-3 bg-white rounded-lg">
      <div className="flex justify-center  items-center gap-2 md:flex-nowrap flex-wrap">
        <button className="bg-main hover:bg-green-700 flex justify-center items-center text-white font-bold w-[130px] h-[56px] rounded-xl">
          Rent
        </button>
        <button className="bg-[#E6FFE0] hover:bg-green-700 flex justify-center items-center text-black font-bold w-[130px] h-[56px] rounded-xl">
          Buy
        </button>
        <button className="bg-[#E6FFE0] hover:bg-green-700 flex justify-center items-center text-black font-bold w-[130px] h-[56px] rounded-xl">
          Projects
        </button>
      </div>
      <form className="w-[100%] ">
        <div>
          <label
            for="search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch />{" "}
            </div>
            <input
              type="search"
              id="search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </form>
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Property Type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-label">Baths</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Baths"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-label">Beds</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Beds"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-label">Select Area Unit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Area Unit"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <h1 className="text-zinc-900 text-base font-semibold font-['Poppins'] leading-[25.16px]">
        Price
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <FormControl className="bg-white">
          <InputLabel id="demo-simple-select-label">Min</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Min"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="bg-white">
          <InputLabel id="demo-simple-select-label">Max</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Max"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <h1 className="text-zinc-900 text-base font-semibold font-['Poppins'] leading-[25.16px]">
        Area
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <FormControl className="bg-white">
          <InputLabel id="demo-simple-select-label">Min</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Min"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="bg-white">
          <InputLabel id="demo-simple-select-label">Max</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Max"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>

      <button className="text-center text-white rounded-md bg-[#25C55B] text-base font-bold font-['Poppins'] leading-normal h-[56px] flex justify-center items-center">
        Search Now
      </button>
    </div>
  );
};

export default FilterForm;
