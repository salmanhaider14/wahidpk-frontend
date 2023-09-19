import React from "react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-3 ">
      <img src="/assets/logo.png" className="w-[300px] animate-pulse" />
      <img src="/assets/spinner.gif" className="w-[30px]  animate-spin" />
    </div>
  );
};

export default Loading;
