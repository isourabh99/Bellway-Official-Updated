import React from 'react'
import  sdlc  from "../assets/sdlc.png";
function SDLC() {
  return (
    <div className="md:h-[90vh]  px-2 md:px-6">
      <p className="text-3xl md:text-5xl font-semibold text-center text-black ">
        Our Process
      </p>
      <img src={sdlc} alt="" className="w-full mx-auto" />
    </div>
  );
}

export default SDLC