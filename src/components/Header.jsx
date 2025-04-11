import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Header = ({
  title,
  para1,
  para2,
  mediaType = "image",
  mediaSrc,
  demoLink, // 👈 new prop
}) => {
  return (
    <header className="relative w-full bg-black text-white px-2 md:px-20 py-10 md:py-0 min-h-screen flex items-center justify-evenly md:justify-between flex-col md:flex-row gap-10">
      {/* Left Side */}
      <div className="w-full md:w-1/2">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold my-10 md:my-0  md:leading-16 bg-gradient-to-r from-[#D82C2C] to-white bg-clip-text text-transparent">
            {title}
          </h1>
        )}

        {para1 && (
          <p className="text-lg my-4 text-zinc-400 hover:text-zinc-100 transition-all duration-300">
            {para1}
          </p>
        )}
        {para2 && (
          <p className="text-lg my-4 text-zinc-400 hover:text-zinc-100 transition-all duration-300">
            {para2}
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-wrap gap-10 mt-6 items-center">
          <Link
            to="/contact"
            className="relative inline-flex items-center justify-center h-12 md:h-14 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#D82C2C] rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#D82C2C] group-hover:translate-x-0 ease">
              Let's Talk
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#D82C2C] transition-all duration-300 transform group-hover:translate-x-full ease">
              Contact Us
            </span>
            <span className="relative invisible">Contact Us</span>
          </Link>

          {demoLink && (
            <Link
              to={demoLink}
              className=" font-medium  text-lg flex items-center gap-2 animate-pulse text-white"
            >
              View Demo <FaLongArrowAltRight size={20} className="mt-1" />
            </Link>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex md:justify-end items-center mt-6 md:mt-0">
        {mediaType === "video" ? (
          <video
            autoPlay
            loop
            muted
            loading="lazy"
            className="rounded-lg w-full max-w-full"
          >
            <source src={mediaSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={mediaSrc}
            alt="Media"
            loading="lazy"
            className="rounded-lg w-full md:max-w-[80%] object-cover"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
