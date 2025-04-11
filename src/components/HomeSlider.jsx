import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/ShreeJyotish.png";
import image2 from "../assets/Brobo.png";
import image3 from "../assets/oneapp.png";
import image4 from "../assets/HAZE.png";
import image5 from "../assets/Trulymatch.png";
import image6 from "../assets/DCart.png";
import image7 from "../assets/DesiGrow.png";
import image8 from "../assets/OnlineStoreWeb.png";
import image9 from "../assets/CouponCounter.png";
import image10 from "../assets/GoConnect.png";
import image11 from "../assets/LLN.png";
import image12 from "../assets/MazaaMunch.png";
import image13 from "../assets/YMLMART.png";
import image14 from "../assets/cashbackcoupon.png";

const images = [
  { src: image1, name: "Shree Jyotish" },
  { src: image2, name: "Brobo" },
  { src: image3, name: "One App" },
  { src: image4, name: "HAZE" },
  { src: image5, name: "Truly match" },
  { src: image6, name: "DCart" },
  { src: image7, name: "Desi Gro" },
  { src: image8, name: "Online store web" },
  { src: image9, name: "Coupon Counter" },
  { src: image10, name: "Go Connect" },
  { src: image11, name: "LLN" },
  { src: image12, name: "Mazaa Munch" },
  { src: image13, name: "YML MART" },
  { src: image14, name: "cashback coupons" },
];

const HomeSlider = () => {
  const containerRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleMouseDown = (e) => {
    isMouseDownRef.current = true;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isMouseDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDownRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && containerRef.current) {
        containerRef.current.scrollLeft += 1;
        const index = Math.round(
          containerRef.current.scrollLeft /
            (containerRef.current.scrollWidth / images.length)
        );
        setCurrentSlide(index % images.length);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isDragging]);

  const scrollToSlide = (index) => {
    const scrollWidth = containerRef.current.scrollWidth;
    const scrollAmount = (scrollWidth / images.length) * index;
    containerRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    setCurrentSlide(index);
  };

  return (
    <div className="relative z-10 px-2 md:px-20 md:my-20 bg-white select-none py-10">
      <h1 className="text-center text-3xl md:text-5xl font-semibold text-black mb-10">
        See Our Creations
      </h1>
      <div
        ref={containerRef}
        className="relative overflow-x-scroll overflow-y-hidden w-full cursor-grab active:cursor-grabbing no-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "none" }}
      >
        <div
          className="flex gap-3 md:gap-4 px-2 py-4 select-none"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="min-w-[280px] h-[270px] md:min-w-[360px] md:h-[310px] flex-shrink-0 text-center bg-white rounded-xl shadow-xl p-1 hover:scale-[1.05] transition-transform duration-300 select-none"
            >
              <img
                src={image.src}
                alt={image.name}
                draggable={false}
                className="w-full h-full object-cover object-center rounded-lg pointer-events-none select-none"
              />
              <div className="mt-4 text-base text-black font-semibold select-none">
                {image.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2 select-none">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-black scale-110" : "bg-zinc-400"
            }`}
            onClick={() => scrollToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;