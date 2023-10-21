"use client";
import React from "react";
import { Accordion } from "flowbite-react";

const Floors = () => {
  return (
    <div className="max-w-[1070px] min-h-[300px] flex-col  flex flex-wrap gap-4 relative shadow-md rounded-xl p-2 border">
      <h1 className=" text-zinc-900 text-[22.74px] font-semibold font-['Poppins']">
        Floor Plans
      </h1>
      <hr />

      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>First floor</Accordion.Title>
          <Accordion.Content>
            <div className="flex justify-start items-center gap-6 md:gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/price.png" className="w-5" />{" "}
                <span className="hidden md:block"> Price :</span>{" "}
                <span className="font-bold"> 400$</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/area.png" />{" "}
                <span className="hidden md:block"> Size: :</span>{" "}
                <span className="font-bold"> 4</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bed.png" />{" "}
                <span className="hidden md:block"> Beds :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bath.png" />{" "}
                <span className="hidden md:block"> Baths :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 md:text-[20.63px] text-[18px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400 md:text-md text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Second floor</Accordion.Title>
          <Accordion.Content>
            <div className="flex justify-start items-center gap-6 md:gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/price.png" className="w-5" />{" "}
                <span className="hidden md:block"> Price :</span>{" "}
                <span className="font-bold"> 400$</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/area.png" />{" "}
                <span className="hidden md:block"> Size: :</span>{" "}
                <span className="font-bold"> 4</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bed.png" />{" "}
                <span className="hidden md:block"> Beds :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bath.png" />{" "}
                <span className="hidden md:block"> Baths :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 md:text-[20.63px] text-[18px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400 md:text-md text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>Third floor</Accordion.Title>
          <Accordion.Content>
            <div className="flex justify-start items-center gap-6 md:gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/price.png" className="w-5" />{" "}
                <span className="hidden md:block"> Price :</span>{" "}
                <span className="font-bold"> 400$</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/area.png" />{" "}
                <span className="hidden md:block"> Size: :</span>{" "}
                <span className="font-bold"> 4</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bed.png" />{" "}
                <span className="hidden md:block"> Beds :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
              <p className="flex justify-center items-center gap-2 md:text-md text-sm">
                <img src="/assets/bath.png" />{" "}
                <span className="hidden md:block"> Baths :</span>{" "}
                <span className="font-bold"> 2</span>
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 md:text-[20.63px] text-[18px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400 md:text-md text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Floors;
