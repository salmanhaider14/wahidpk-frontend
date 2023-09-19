import { TextField } from "@mui/material";
import React, { useState } from "react";

const ReviewForm = () => {
  const handleChange = () => {};
  const [age, setAge] = useState();
  return (
    <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-3">
      {" "}
      <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Leave a review
      </h1>
      <p className=" text-neutral-400 text-md font-normal font-['Poppins'] leading-[36.81px]">
        Your email address will not be published. Required fields are marked *
      </p>
      <hr />
      <div className="w-full">
        <h1 className=" text-zinc-900 text-[18.63px] font-semibold font-['Poppins'] leading-[42.95px]">
          Your Name
        </h1>{" "}
        <TextField
          InputProps={{
            className: "h-[56px] ", // Add Tailwind CSS height class here
          }}
          label="Your Name"
          fullWidth
          required
        />
      </div>{" "}
      <div className="grid md:grid-cols-2 gap-5 items-center ">
        <div>
          <h1 className=" text-zinc-900 text-[18.63px] font-semibold font-['Poppins'] leading-[42.95px]">
            Email Address
          </h1>
          <TextField
            InputProps={{
              className: "h-[56px] ", // Add Tailwind CSS height class here
            }}
            label="Your email"
            fullWidth
          />
        </div>
        <div>
          <h1 className=" text-zinc-900 text-[18.63px] font-semibold font-['Poppins'] leading-[42.95px]">
            Phone Number
          </h1>
          <TextField
            InputProps={{
              className: "h-[56px] ", // Add Tailwind CSS height class here
            }}
            label="Your phone"
            fullWidth
          />
        </div>
      </div>
      <div>
        <h1 className=" text-zinc-900 text-[18.63px] font-semibold font-['Poppins'] leading-[42.95px]">
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
