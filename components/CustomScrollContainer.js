"use client";
import React, { useEffect } from "react";

const CustomScrollContainer = ({
  children,
  containerId,
  leftButtonId,
  rightButtonId,
}) => {
  const scrollContainer = (scrollOffset) => {
    const container = document.getElementById(containerId);
    container.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById(containerId);
      const leftButton = document.getElementById(leftButtonId);
      const rightButton = document.getElementById(rightButtonId);

      if (container.scrollLeft > 0) {
        leftButton.style.display = "block";
      } else {
        leftButton.style.display = "none";
      }

      if (
        container.scrollWidth - container.clientWidth >
        container.scrollLeft
      ) {
        rightButton.style.display = "block";
      } else {
        rightButton.style.display = "none";
      }
    };

    document
      .getElementById(containerId)
      .addEventListener("scroll", handleScroll);

    return () => {
      document.getElementById(containerId);
      // .removeEventListener("scroll", handleScroll);
    };
  }, [containerId, leftButtonId, rightButtonId]);

  return (
    <div className="flex justify-center relative">
      <div
        className="container"
        style={{ overflowX: "hidden", position: "relative" }}
      >
        <div
          id={containerId}
          className="scroll-container flex cursor-grab hover:cursor-grabbing ml-5 items-start gap-4 overflow-x-auto  mt-4 py-6 container"
        >
          {children}
        </div>
      </div>
      <button
        id={leftButtonId}
        onClick={() => scrollContainer(-300)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 px-2 py-1 "
        style={{ display: "none" }}
      >
        {"<"}
      </button>
      <button
        id={rightButtonId}
        onClick={() => scrollContainer(300)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 px-2 py-1 "
      >
        {">"}
      </button>
    </div>
  );
};

export default CustomScrollContainer;
