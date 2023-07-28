import React from "react";
import backAdd from "../assets/Group 10.png";
import textAdd from "../assets/Group 2.svg";
import img1 from "../assets/img1.png";

const Additional = () => {
  return (
    <div className="main first-letter:overflow-hidden">
      <div className="relative h-screen">
        <img className="w-full absolute" src={backAdd} alt="Background" />
        
        {/* Div encima de la imagen */}
        <div className="absolute w-full flex justify-center items-center">
          {/* Contenido del div */}
          <div className="flex justify-center items-center">
            {/* Imagen de texto */}
            <img className="mt-40 z-10 absolute" src={textAdd} alt="Text" />

            {/* Contenedor de la imagen y el texto */}
            <div className="relative">
              <img className="w-[500px] h-[700px] relative left-80 top-60" src={img1} alt="Image" />
             
             
             
            </div>
            <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
              <div>Hola!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
