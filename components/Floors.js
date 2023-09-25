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
            <div className="flex justify-start items-center gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/price.png" className="w-5" /> Price : 400$
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/area.png" /> Size : 4
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bed.png" /> Beds : 2
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bath.png" /> Baths: 2
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
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
            <div className="flex justify-start items-center gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/price.png" className="w-5" /> Price : 400$
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/area.png" /> Size : 4
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bed.png" /> Beds : 2
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bath.png" /> Baths: 2
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
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
            <div className="flex justify-start items-center gap-4 mt-3 mb-3">
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/price.png" className="w-5" /> Price : 400$
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/area.png" /> Size : 4
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bed.png" /> Beds : 2
              </p>
              <p className="flex justify-center items-center gap-2">
                <img src="/assets/bath.png" /> Baths: 2
              </p>
            </div>
            {/* <img src="/assets/propertyimg.png" className="h-[500px] w-full" /> */}
            <h1 className=" text-zinc-900 text-[20.63px] font-semibold font-['Poppins'] leading-[42.95px]">
              Description:
            </h1>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
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
