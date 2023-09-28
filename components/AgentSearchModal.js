"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaCross, FaFacebook, FaSearch } from "react-icons/fa";
import {
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  NativeSelect,
} from "@mui/material";
const AgentSearchModal = ({ setShowModal }) => {
  const [age, setAge] = useState();
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
        <div className="relative w-auto min-w-[300px] my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">Find Property</h3>
              <button
                className="p-1 ml-auto border bg-transparent  text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                }}
              ></button>
            </div>
            <div
              className="p-4"
              aria-hidden="true"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <span
                  className="text-xl absolute top-0 right-0 pt-8 pr-6 cursor-pointer"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  x
                </span>
                <TextField
                  required
                  id="standard-required"
                  label="City"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Location"
                  variant="standard"
                />
                <TextField
                  required
                  id="standard-required"
                  label="Property Type"
                  variant="standard"
                />

                <TextField
                  required
                  id="standard-required"
                  label="Company Name"
                  variant="standard"
                />
                <button class=" flex items-center justify-center gap-2 h-[56px] text-white text-[15px] font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
                  Search Now <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AgentSearchModal;
