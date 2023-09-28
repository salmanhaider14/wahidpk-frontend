import { TextField } from "@mui/material";
import React, { useState } from "react";

const ReviewForm = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-3 border">
      {" "}
      <h1 className=" text-zinc-900 md:text-[22.74px] text-[18px] font-semibold font-['Poppins']">
        Leave a review
      </h1>
      <p className=" text-neutral-400 md:text-md text-sm font-normal font-['Poppins'] leading-[36.81px]">
        Your email address will not be published. Required fields are marked *
      </p>
      <hr />
      <div className="w-full">
        <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
          Your Name
        </h1>{" "}
        <input
          type="text"
          placeholder="Your Name"
          id="default-input"
          class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>{" "}
      <div className="grid md:grid-cols-2 gap-5 items-center ">
        <div>
          <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
            Email Address
          </h1>
          <input
            type="text"
            placeholder="Email Address"
            id="default-input"
            class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
            Phone Number
          </h1>
          <input
            type="text"
            placeholder="Phone Number"
            id="default-input"
            class="h-[56px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <div>
        <h1 className=" text-zinc-900 md:text-[18.63px] text-[15px] font-semibold font-['Poppins'] leading-[42.95px]">
          Your review
        </h1>
        <TextField
          required
          id="multiline-flexible"
          label="Message"
          multiline
          maxRows={8}
          minRows={6}
          fullWidth
        />
      </div>
      <button className="bg-main flex justify-center items-center text-white h-[60px] font-bold rounded-xl text-lg">
        Send review
      </button>
    </div>
  );
};

export default ReviewForm;
