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
const LoginModal = ({ setShowModal }) => {
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
                <div className="w-[330px] h-[60px] ">
                  <div className="flex items-center md:justify-center gap-4">
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Min Price
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={20}>1000$</option>
                        <option value={30}>5000$</option>
                      </NativeSelect>
                    </FormControl>
                    To
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Any
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={20}>7000$</option>
                        <option value={30}>100000$</option>
                      </NativeSelect>
                    </FormControl>
                  </div>
                </div>
                <div className="w-[330px] h-[60px] ">
                  <div className="flex items-center md:justify-center gap-4">
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Min Marla
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={20}>100</option>
                        <option value={30}>500</option>
                      </NativeSelect>
                    </FormControl>
                    To
                    <FormControl fullWidth>
                      <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                      >
                        Any
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "age",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option value={20}>7000</option>
                        <option value={30}>100000</option>
                      </NativeSelect>
                    </FormControl>
                  </div>
                </div>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Beds
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={20}>2</option>
                    <option value={30}>5</option>
                  </NativeSelect>
                </FormControl>
                <TextField
                  required
                  id="standard-required"
                  label="Change Area Unit"
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

export default LoginModal;
