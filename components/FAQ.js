"use client";
import React from "react";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <section className="min-h-[60vh]">
      <h1 className="text-zinc-900 text-[45px] text-center font-bold font-['Poppins'] pt-[30px]">
        Frequently asked questions
      </h1>
      <p className="text-neutral-400 text-sm text-center font-normal pt-2 font-['Poppins'] leading-[21px]">
        Quick answers to questions you may have. Can't find what you're looking
        for? Check out our full documentation
      </p>
      <div className="grid md:grid-cols-2 gap-2 justify-center items-center mt-7 w-[80%] m-auto">
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Vivamus at orci ut neque tincidunt convallis.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Nam nec justo congue, gravida velit et, viverra nibh.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Nam nec justo congue, gravida velit et, viverra nibh.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Nam nec justo congue, gravida velit et, viverra nibh.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Nam nec justo congue, gravida velit et, viverra nibh.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>
              Nam nec justo congue, gravida velit et, viverra nibh.
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                sed tristique metus proin id lorem odio
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
