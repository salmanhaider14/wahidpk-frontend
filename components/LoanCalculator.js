import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const LoanCalculator = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-3 border">
      {" "}
      <h1 className=" text-zinc-900 md:text-[22.74px] text-[18px] font-semibold font-['Poppins']">
        Mortgage Calculator
      </h1>
      <hr />
      <div className="w-full">
        <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
          Total price (PKR)
        </h1>{" "}
        <input
          type="text"
          placeholder="560 PKR"
          id="default-input"
          class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-full">
        <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
          Down Payment($)
        </h1>{" "}
        <input
          type="text"
          placeholder="560 PKR"
          id="default-input"
          class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-full">
        <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
          Terms
        </h1>{" "}
        <input
          type="text"
          placeholder="56$"
          id="default-input"
          class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
        Interest Rate (%)
      </h1>{" "}
      <div className="grid md:grid-cols-2 gap-5 items-center ">
        <div>
          <input
            type="text"
            placeholder="56$"
            id="default-input"
            class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-between flex-wrap items-center">
        <h1 className=" text-zinc-900 md:text-[25.63px] text-[20px] font-semibold font-['Poppins'] leading-[42.95px]">
          Monthly payment
        </h1>
        <h1 className="text-main md:text-[30.81px] text-[20px] font-semibold font-['Poppins']">
          PKR 125,0000
        </h1>
      </div>
      <button className="bg-main flex justify-center items-center text-white h-[60px] font-bold rounded-xl text-lg">
        Calculate Your Loan
      </button>
    </div>
  );
};

export default LoanCalculator;
