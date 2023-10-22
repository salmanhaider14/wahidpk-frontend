import React from "react";
import { FaEnvelope, FaHome, FaPhone, FaUser } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="w-full h-full min-h-[700px] ">
      <form className="lg:max-w-[550px] bg-white shadow-md flex-col items-center gap-2 rounded-lg min-h-[500px] p-6 md:mt-4 border md:ms-6 ">
        <h1 className=" text-zinc-900 text-3xl font-bold font-['Poppins']">
          Contact us
        </h1>
        <p className=" text-neutral-400 text-sm font-normal  pb-4 font-['Poppins'] leading-[21px]">
          We will respond as soon as we receive your message.
        </p>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaUser color="#25C55B" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div class="md:mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaEnvelope color="#25C55B" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <FaPhone color="#25C55B" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Phone"
              />
            </div>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >
            Property type
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <FaHome color="#25C55B" />
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Choose"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="text-white mt-4 flex items-center gap-2 bg-[#25C55B] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <img src="/assets/sendico.png" /> Send Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
