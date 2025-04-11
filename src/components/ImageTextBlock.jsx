import React from "react";

const ImageTextBlock = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-10 px-2 md:px-20">
      {/* Image Left */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={heading}
          className="md:w-1/2 rounded-xl shadow-lg object-center object-cover"
        />
      </div>

      {/* Text Right */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl md:text-4xl font-semibold  mb-10">
          {heading}
        </h2>
        <p className="text-zinc-500 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ImageTextBlock;
