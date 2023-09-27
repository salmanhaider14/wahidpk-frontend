import FilterForm from "@/components/FilterForm";
import React from "react";
import { FaPhone, FaSearch } from "react-icons/fa";

const PropertyListing = () => {
  const properties = [
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 3000000 (3 Crore)",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 3000000 (3 Crore)",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 3000000 (3 Crore)",
      beds: 4,
      baths: 2,
      area: 1150,
    },
    {
      title: "5 Marla Brand New Luxury House For Sale in DHA Phase 7 Lahore",
      desc: "Street 22nd House 200 Sector 9 DHA Phase 7 Lahore",
      price: "PKR 3000000 (3 Crore)",
      beds: 4,
      baths: 2,
      area: 1150,
    },
  ];
  const stories = [
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
    { img: "/assets/propertyimg.png" },
  ];

  return (
    <div>
      <section className="min-h-screen  ">
        <div className="flex justify-center mt-10">
          <div className="grid lg:grid-cols-3 gap-8 md:w-[80%]  p-4 relative">
            <div className="flex flex-col items-start gap-2  md:col-span-2 ">
              {" "}
              <h1 className=" text-black text-[31.44px] font-bold font-['Poppins']">
                Property Listing
              </h1>
              <p className=" text-neutral-700 text-sm font-normal font-['Poppins'] leading-snug">
                There are currently 164,814 properties.
              </p>
              <div className="flex flex-col justify-start item-start gap-6 ">
                {properties.map((property) => (
                  <div className="max-w-[1070px] min-h-[300px] flex gap-2 relative shadow-md rounded-xl p-2 border">
                    <img
                      src="/assets/supremetag.png"
                      className="absolute top-5 left-0 "
                    />
                    <img
                      src="/assets/saletag2.png"
                      className="absolute top-12 left-0 "
                    />
                    <img src="/assets/propertyimg.png" className="w-[33%] " />

                    <div className="flex flex-col gap-3 flex-wrap max-w-[680px] w-[63%]">
                      <h1 className="text-zinc-900 text-3.5vw font-semibold font-['Poppins']">
                        {property.title}
                      </h1>
                      <p className="text-neutral-700 text-1vw font-normal font-['Poppins'] leading-2.5vw">
                        {property.desc}
                      </p>
                      <h1 className="text-[#25C55B] text-4vw font-extrabold font-['Mulish']">
                        {property.price}
                      </h1>
                      <div className="flex items-start gap-4 md:flex-col">
                        <p className="flex items-center gap-2">
                          <img src="/assets/bed.png" /> Beds: {property.beds}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/bath.png" /> Baths: {property.baths}
                        </p>
                        <p className="flex items-center gap-2">
                          <img src="/assets/area.png" /> Sqft: {property.area}
                        </p>
                      </div>
                      <div className="flex justify-center gap-2 items-center ">
                        <button className="w-[30%] h-[56px] flex justify-center items-center border rounded-md text-[#25C55B] border-[#25C55B] hover:bg-[#25C55B] hover:text-white text-3vw font-semibold font-['Poppins'] leading-6.2vw">
                          Call
                        </button>
                        <button className="w-[34%] h-[56px] flex justify-center items-center border rounded-md text-[#25C55B] border-[#25C55B] hover:bg-[#25C55B] hover:text-white text-3vw font-semibold font-['Poppins'] leading-6.2vw">
                          Message
                        </button>
                        <button className="w-[38%] h-[56px] flex justify-center items-center bg-[#25C55B] hover:bg-green-800 text-white rounded-md text-3vw font-semibold font-['Poppins'] leading-6.2vw">
                          Whatsapp
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="justify-center flex">
                  <div className="flex flex-row items-center  flex-nowrap overflow-x-auto ml-5  gap-2 mt-6 ">
                    {stories.map((story) => (
                      <img
                        src={story.img}
                        className="w-[190px] h-[280px] cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  relative  flex flex-col gap-4  p-3  ">
              <FilterForm />
              <div className="  w-full relative  flex flex-col gap-4 p-3 border rounded ">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                  Featured listings
                </h1>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <img src="/assets/propertyimg.png" className="w-[100px]" />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Gorgeous Apartment Building
                    </h1>
                    <p className=" text-zinc-900 text-base font-semibold font-['Poppins'] leading-normal">
                      $7,500
                    </p>
                  </div>
                </div>
              </div>
              <div className="   flex flex-col gap-2 p-3 border rounded">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins'] pb-2">
                  Real estate near you
                </h1>
                <div className="grid grid-cols-2 gap-2 ">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
                <div className="grid grid-cols-2 gap-2 ">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[160px] h-[90px] rounded-xl"
                  />{" "}
                </div>
              </div>
              <div className="  w-full relative  flex flex-col gap-4 p-3 border rounded">
                <h1 className=" text-zinc-900 text-[18.87px] font-semibold font-['Poppins']">
                  Hot Projects
                </h1>

                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
                <hr />
                <hr />
                <div className="flex items-center gap-3 flex-wrap">
                  <img
                    src="/assets/propertyimg.png"
                    className="w-[68px] h-[68px] rounded-full"
                  />
                  <div className="flex flex-col gap-3">
                    <h1 className=" text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                      Iconic Valley
                    </h1>
                    <p className=" text-neutral-700 text-sm font-semibold font-['Poppins'] leading-snug">
                      Book plots on installments now
                      <br />
                      get extra 10% discount on total
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[60vh] bg-[#E6FFE0] ">
        <div className="grid md:grid-cols-2 gap-3 grid-cols-1 justify-center items-center mt-16 w-full h-full">
          <div className="flex justify-center items-end mt-[150px]">
            <div className="flex flex-col justify-start items-start gap-6 w-[600px]">
              <h1 className=" text-zinc-900 text-[45px] font-bold font-['Poppins'] leading-[54px]">
                Find for your dream home
                <br />
                and increase your investment opportunities
              </h1>
              <p className="pt-3 text-zinc-700 text-sm font-normal font-['Mulish'] leading-[21px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
              <button class="text-white flex items-center gap-3 text-[15px] font-bold font-poppins leading-snug bg-[#25C55B]   hover:bg-green-700 rounded-[10px] px-[18px] py-4">
                <FaPhone /> Contact Seller
              </button>
            </div>
          </div>
          <img src="/assets/storyimg.png" className="h-full mt-10" />
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;
