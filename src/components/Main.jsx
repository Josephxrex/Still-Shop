import React from "react";
import bgImage from "../assets/imageburlesque.png";
import line from "../assets/line.png";

const Main = () => {
  return (
    <div className="main first-letter:overflow-hidden">
      <div className=" h-screen">
        <img
          className="w-full h-screen object-cover "
          src={bgImage}
          alt="Woman"
        />
        <div className="flex flex-col absolute top-[20rem]  left-20 ">
          <h1 className="my-custom-font text-white text-7xl  lg:text-9xl 2xl:text-[200px]">
            STILLS
          </h1>
          <img src={line} className="w-28 ml-16 lg:w-80 2xl:w-96 2xl:ml-36" alt="Line" />
          <h2 className="sub-title-italic-font text-lg ml-2 lg:ml-28 2xl:ml-[12rem]  2xl:text-2xl mt-2 text-white">
            "Explore Limitless Pleasure"
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
