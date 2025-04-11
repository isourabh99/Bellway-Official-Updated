import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    title: "Skilled Tech Experts",
    description:
      "Our talented engineers are experienced in the latest tech stacks, ensuring high-performance solutions tailored to your business needs.",
    image:
      "https://i.pinimg.com/736x/79/90/45/7990454c176c52ecee1d93e11be902e6.jpg",
  },
  {
    title: "Cutting-Edge Innovation",
    description:
      "We implement modern architectures, including microservices and serverless, to deliver scalable and futuristic digital experiences.",
    image:
      "https://i.pinimg.com/736x/9e/f9/9c/9ef99ce2c3f8c8ba229aef68ef00b909.jpg",
  },
  {
    title: "24/7 Client Support",
    description:
      "Our client success team ensures you're supported throughout your project lifecycle with transparent communication and agile updates.",
    image:
      "https://i.pinimg.com/736x/44/96/cc/4496cccf86f269c908403fbb216a6a7b.jpg",
  },
];

const WhyBellway = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = options[activeIndex];

  return (
    <section className="w-full md:min-h-[90vh] bg-white text-white px-2 md:px-20 py-10 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col  space-y-6 text-center md:text-left justify-center items-center md:items-start py-2">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center text-black my-10">
          Why Bellway?
        </h2>

        <div className="space-y-3 w-full max-w-md">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer px-6 py-3 rounded-xl transition-all duration-300 border-2 ${
                activeIndex === index
                  ? "bg-[#d82c2c] border-[#d82c2c] text-white shadow-lg"
                  : "bg-zinc-900 border-zinc-900 text-zinc-100 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              <p className="text-lg font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeItem.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-zinc-700 mt-6 max-w-md px-2"
          >
            {activeItem.description}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center ">
        <motion.img
          key={activeItem.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={activeItem.image}
          alt={activeItem.title}
          className="rounded-xl border-4 border-[#d82c2c] w-full  object-cover"
        />
      </div>
    </section>
  );
};

export default WhyBellway;
