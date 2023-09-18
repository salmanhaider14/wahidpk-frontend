"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };
  return (
    <div className="min-h-screen">
      <div className="bg-[#D9D9D9] p-4 w-[80%] min-h-[550px] pt-[150px] relative m-auto mt-[120px]">
        <h1 className="text-neutral-800 text-5xl text-center pb-16 font-semibold font-['Golos Text'] ">
          We are eager to hear from you.
        </h1>
      </div>
    </div>
  );
};

export default Contact;
