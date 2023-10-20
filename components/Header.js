"use client";
import Link from "next/link";
import {
  BsFillHouseFill,
  BsCameraVideoFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SubBar from "./SubBar";
import SearchBarModal from "./SearchBarModal.js";

export default function Header() {
  const [age, setAge] = useState();
  const handleChange = () => {};
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="  bg-[#25C55B] relative ">
      {showModal && <SearchBarModal setShowModal={setShowModal} />}
      <SubBar />
      <hr className="lg:flex hidden" />
      <h1 className=" text-center drop-shadow-md text-white md:text-[61.84px] text-3xl p-2 md:leading-[60px] font-bold font-['Poppins'] pt-[150px] ">
        Search Properties For <br /> Sale, Rent or Buy
      </h1>
      <p className="text-white  md:text-md text-sm text-center pt-4 font-semibold font-['Poppins'] leading-normal">
        Find a variety of properties that suit you, forget all difficulties in
        finding a residence for you
      </p>
      <div className="flex md:hidden justify-center items-center gap-4 mt-5">
        <button
          className="bg-white hover:bg-gray-100 rounded-md w-[100px] h-[40px]  font-bold"
          onClick={() => setShowModal(true)}
        >
          Buy
        </button>{" "}
        <button
          className="bg-white hover:bg-gray-100 rounded-md w-[100px] h-[40px]  font-bold"
          onClick={() => setShowModal(true)}
        >
          Rent
        </button>{" "}
      </div>
      <div className="lg:max-w-[1000px] md:max-w-[700px] md:min-h-[100px] lg:min-h-[170px]  bg-white m-auto mt-10 rounded-md hidden md:flex  md:justify-center flex-col justify-start p-4 gap-2">
        <div className="flex items-center gap-2">
          {" "}
          <FormControl className="lg:w-[200px] md:w-[100px] ">
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
          <button class=" flex items-center gap-2 h-[56px] text-white text-sm font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
            Search Now <FaSearch />
          </button>
        </div>{" "}
        <div className="flex items-center gap-2">
          {" "}
          <input
            type="text"
            placeholder="Property Type"
            id="default-input"
            class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-[200px] md:w-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="lg:w-[300px] h-[60px] ">
            <div className="flex items-center md:justify-center gap-4">
              <FormControl className="lg:w-[120px] md:w-[80px]">
                <InputLabel htmlFor="grouped-native-select">
                  Min Price
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                >
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </optgroup>
                </Select>
              </FormControl>
              <p>To</p>
              <FormControl className="lg:w-[120px] md:w-[80px]">
                <InputLabel htmlFor="grouped-select">Any</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="lg:w-[300px] h-[60px] md:ms-4 ">
            <div className="flex items-center md:justify-start gap-4">
              <FormControl className="lg:w-[120px] md:w-[80px]">
                <InputLabel htmlFor="grouped-native-select">
                  Min Marla
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                >
                  <option aria-label="None" value="" />
                  <optgroup label="Category 1">
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                  </optgroup>
                  <optgroup label="Category 2">
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </optgroup>
                </Select>
              </FormControl>
              To
              <FormControl className="lg:w-[120px] md:w-[80px]">
                <InputLabel htmlFor="grouped-select">Any</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <ListSubheader>Category 1</ListSubheader>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <ListSubheader>Category 2</ListSubheader>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <FormControl className="grow">
            <InputLabel id="demo-simple-select-label">Beds</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <input
          type="text"
          placeholder="Change Area Unit"
          id="default-input"
          class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center items-center gap-3 mt-8 flex-wrap">
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/house.png" /> Houses
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/house.png" /> Bungalow
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/shop.png" /> Shop
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/office.png" /> Office
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/portion.png" /> Portion
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/portion.png" /> Flat
        </p>
        <p className="flex items-center gap-2 text-white">
          <img src="/assets/portion.png" /> Mansion
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-3 mt-[150px]">
        <h1 className="text-center text-white text-base font-semibold font-['Poppins'] leading-normal">
          Scroll
        </h1>
        <img src="/assets/scroll.png" className="animate-bounce" />
      </div>
    </div>
  );
}
