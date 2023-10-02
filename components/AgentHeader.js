"use client";
import React, { useState } from "react";
import AgentSearchBar from "./AgentSearchBar";
import AgentSearchModal from "./AgentSearchModal";

const AgentHeader = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="min-h-[50vh]  bg-[#E6FFE0] relative p-2 flex justify-center items-center ">
      {showModal && <AgentSearchModal setShowModal={setShowModal} />}
      <div className="flex  flex-col gap-4 items-center">
        {" "}
        <h1 className="text-black text-center md:text-5xl text-3xl font-bold  ">
          Find Top Real Estate Agents in Pakistan
        </h1>
        <p className="md:text-xl text-md text-gray-500 text-center font-bold">
          {" "}
          Search the real estate agents in Pakistan dealing in properties for
          sale and rent.
        </p>
        <div className="flex lg:hidden justify-center items-center gap-4 mt-5">
          <button
            className="bg-white hover:bg-gray-100 rounded-md w-[150px] shadow-md h-[50px] p-2 font-bold"
            onClick={() => setShowModal(true)}
          >
            Search Agent
          </button>{" "}
        </div>
        <AgentSearchBar />
      </div>
    </section>
  );
};

export default AgentHeader;
