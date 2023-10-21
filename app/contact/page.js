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
    <>
      <section className=" relative">
        <div className="bg-[#D9D9D9] p-4 md:w-[80%] w-full min-h-[550px] pt-[150px] relative m-auto md:mt-[120px]">
          <h1 className="text-neutral-800 md:text-5xl text-3xl text-center pb-16 font-semibold font-['Golos Text'] ">
            We are eager to hear from you.
          </h1>
          <div className="max-w-[1050px] min-h-[400px] bg-white rounded-lg m-auto flex flex-col justify-center items-center p-4 gap-3 ">
            <h1 className="text-center text-neutral-800 md:text-[28px] text-[20px] font-semibold font-['Inter'] leading-[38px]">
              Any Question? Catch Us Up!
            </h1>
            <div className="grid md:grid-cols-2 gap-4 md:w-[80%] w-full">
              <div class="mb-6 w-full">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="default-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="mb-6 w-full">
                <label
                  for="default-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="default-input"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="md:w-[80%] w-full">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="flex justify-start md:w-[80%] w-full mt-4">
              <button className="w-[140px] h-[56px] flex justify-center items-center font-bold text-white rounded-lg bg-main hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen relative grid md:grid-cols-2 gap-4 ">
        <div className="flex justify-center items-center  w-full h-full">
          <h1 className="w-[390px] md:text-start text-center  text-zinc-900 md:text-5xl text-3xl font-semibold font-['Golos Text'] leading-normal">
            Satisfied Dreamwell’s Clients
          </h1>
        </div>
        <div className="relative flex justify-center overflow-x-auto items-center ">
          <div className="w-1/2 h-full absolute overflow-x-hidden right-0 bg-main"></div>
          <div className="flex justify-start items-center gap-6 mt-16 z-10 relative overflow-x-auto overflow-y-hidden">
            <div className="min-w-[250px] h-[350px] max-w-none bg-white rounded-[15px] shadow flex flex-col gap-3 p-6 border">
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="/assets/propertyimg.png"
                  className="w-[50px] h-[50px] rounded-full "
                />
                <div className="flex flex-col">
                  <h1 className="text-neutral-800 text-md font-semibold font-['Inter'] leading-7">
                    Rowan Jacobson
                  </h1>
                  <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
              <p className=" text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                I had quite a hard time selling my house in the city even though
                my family and I had to immediately pay off the money to buy a
                house in the countryside. Luckily, Dreamwell agents helped sell
                our house at a decent price and fast.
              </p>
              <img src="/assets/greenstars.png" className="w-20 " />
            </div>
            <div className="min-w-[250px] h-[350px] max-w-none bg-white rounded-[15px] shadow flex flex-col gap-3 p-6 border">
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="/assets/propertyimg.png"
                  className="w-[50px] h-[50px] rounded-full "
                />
                <div className="flex flex-col">
                  <h1 className="text-neutral-800 text-md font-semibold font-['Inter'] leading-7">
                    Rowan Jacobson
                  </h1>
                  <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
              <p className=" text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                I had quite a hard time selling my house in the city even though
                my family and I had to immediately pay off the money to buy a
                house in the countryside. Luckily, Dreamwell agents helped sell
                our house at a decent price and fast.
              </p>
              <img src="/assets/greenstars.png" className="w-20 " />
            </div>
            <div className="min-w-[250px] h-[350px] max-w-none bg-white rounded-[15px] shadow flex flex-col gap-3 p-6 border">
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="/assets/propertyimg.png"
                  className="w-[50px] h-[50px] rounded-full "
                />
                <div className="flex flex-col">
                  <h1 className="text-neutral-800 text-md font-semibold font-['Inter'] leading-7">
                    Rowan Jacobson
                  </h1>
                  <p className="text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                    Jakarta, Indonesia
                  </p>
                </div>
              </div>
              <p className=" text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed">
                I had quite a hard time selling my house in the city even though
                my family and I had to immediately pay off the money to buy a
                house in the countryside. Luckily, Dreamwell agents helped sell
                our house at a decent price and fast.
              </p>
              <img src="/assets/greenstars.png" className="w-20 " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
