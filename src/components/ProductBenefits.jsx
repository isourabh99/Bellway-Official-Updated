import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ProductBenefits = ({ benefits, title = `Our Product Benefits` }) => {
  return (
    <section className="w-full  bg-zinc-100 px-4 md:px-20 py-20 flex flex-col justify-center items-center">
      {/* Gradient Title */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl  font-semibold text-center     mb-20"
      >
        {title}
      </motion.h2>

      {/* Benefit Grid */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
      >
        {benefits.map((itemData, idx) => (
          <motion.li
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "bounce", stiffness: 300 }}
            className="group relative p-6 rounded-3xl shadow-xl border border-zinc-200 bg-white/100 backdrop-blur-md transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:bg-[#D82C2C]/10"
          >
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#D82C2C] rounded-full group-hover:animate-ping " />
            <h3 className="text-xl font-semibold text-zinc-800 group-hover:text-[#D82C2C] transition">
              {itemData.heading}
            </h3>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProductBenefits;
