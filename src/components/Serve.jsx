import React from "react";
import { motion } from "framer-motion";

const Serve = ({ heading, description, industries }) => {
  return (
    <div className="w-full md:min-h-[90vh] bg-white text-white  px-4 md:px-20 overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-semibold text-center text-black my-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {heading}
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        className="text-center max-w-4xl mx-auto mb-10 text-zinc-500 text-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        {description}
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 justify-center items-center">
        {industries?.map((industry, index) => (
          <motion.div
            key={index}
            className="bg-white border border-zinc-200 hover:shadow-2xl rounded-xl p-4 flex flex-col items-center justify-center transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <img
              src={industry.src}
              alt={industry.alt}
              className="w-12 h-12 object-contain mb-3"
            />
            <h3 className="text-md font-semibold text-center text-zinc-800">
              {industry.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Serve;
