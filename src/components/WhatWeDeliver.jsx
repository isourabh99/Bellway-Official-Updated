import React from "react";
import { motion } from "framer-motion";
import { FaTools, FaMobileAlt, FaUserTie, FaStoreAlt } from "react-icons/fa";
import whatwedeliver from "../assets/whatwedeliver.png"; // Your center image

const deliverables = {
  single: [
    { label: "Admin Panel (Web Based)", icon: FaTools },
    { label: "User Application", icon: FaMobileAlt },
    { label: "Driver Application", icon: FaUserTie },
  ],
  multi: [
    { label: "Admin Panel (Web Based)", icon: FaTools },
    { label: "User Application", icon: FaMobileAlt },
    { label: "Driver Application", icon: FaUserTie },
    { label: "Vendor Login (Web Based)", icon: FaStoreAlt },
    { label: "Vendor Application", icon: FaMobileAlt },
  ],
};

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
};

const WhatWeDeliver = () => {
  return (
    <section className="w-full py-20 px-2 md:px-20 bg-zinc-100">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-zinc-800 mb-16"
      >
        What We Deliver
      </motion.h2>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16">
        <AnimatedColumn
          title="Single Vendor"
          items={deliverables.single}
          side="left"
        />

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-[300px] md:w-[500px] lg:w-[600px] z-0 relative"
        >
          <img
            src={whatwedeliver}
            alt="What we deliver"
            className="w-full drop-shadow-2xl rounded-2xl"
          />
        </motion.div>

        <AnimatedColumn
          title="Multi Vendor"
          items={deliverables.multi}
          side="right"
        />
      </div>
    </section>
  );
};

const AnimatedColumn = ({ title, items, side }) => {
  return (
    <div className="flex flex-col gap-6 w-full md:max-w-sm  z-10">
      <h3 className="text-2xl font-semibold text-center text-zinc-700 mb-4">
        {title}
      </h3>
      {items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          className={`flex items-center gap-4 p-4 rounded-2xl shadow-md transition-all ${
            side === "left"
              ? "bg-gradient-to-r from-pink-50 to-white"
              : "bg-gradient-to-l from-blue-50 to-white"
          }`}
        >
          <item.icon className="text-2xl text-indigo-500" />
          <p className="text-zinc-800 font-medium">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default WhatWeDeliver;
