import React from 'react'
import  sdlc  from "../assets/sdlc.png";
function SDLC() {
  return (
    <div className="lg:min-h-screen  px-2 lg:px-20 bg-black py-10 ">
      <p className="text-3xl md:text-4xl font-semibold text-center text-white  mb-10">
        Our Process
      </p>
      <img src={sdlc} alt="" className="w-full mx-auto invert " />
    </div>
  );
}

export default SDLC