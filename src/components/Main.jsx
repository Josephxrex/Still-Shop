import React from "react";
import bgImage from "../assets/imageburlesque.png";
import line from "../assets/line.png"

const Main = () => {
  return (
    <div className="main  overflow-hidden">
      <img className=" w-screen object-cover" src={bgImage} alt="Woman" />
       <div className='absolute h-full left-[110px] top-[90px] flex flex-col justify-center items-center'>
            <h1 className='my-custom-font text-white text-[12rem]'>STILLS</h1>
            <img src={line} className="mt-1"  />
            <h2 className="sub-title-italic-font mt-5 text-3xl text-white">Explore Limitless Pleasure </h2>
        </div>
    </div>
  );
};

export default Main;
