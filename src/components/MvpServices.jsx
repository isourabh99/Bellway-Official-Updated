import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaLightbulb,
  FaCode,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

const mvpFeatures = [
  "Rapid Prototyping",
  "Idea Validation",
  "Scalable Architecture",
  "User-Centric Design",
  "Agile Development Process",
  "Quick Launch & Market Feedback",
];

const tags = [
  { label: "MVP Launch", color: "#FF5733" },
  { label: "React Native", color: "#4CAF50" },
  { label: "Startup Friendly", color: "#008CBA" },
  { label: "Rapid Delivery", color: "#FFC107" },
  { label: "User-First", color: "#673AB7" },
  { label: "Iterative Build", color: "#E91E63" },
];

const highlights = [
  { icon: <FaRocket />, label: "Fast Go-To-Market" },
  { icon: <FaLightbulb />, label: "Innovative Thinking" },
  { icon: <FaCode />, label: "Clean, Scalable Code" },
  { icon: <FaUsers />, label: "Customer-Centered" },
  { icon: <FaShieldAlt />, label: "Secure & Reliable" },
];

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const MvpServices = () => {
  return (
    <div className="w-full bg-white my-20 px-2 md:px-20 text-gray-900 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#D82C2C] mb-4">
          MVP Development
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Validate your ideas quickly and cost-effectively with Bellway's agile
          MVP solutions tailored for innovation-driven startups and businesses.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {mvpFeatures.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={tagVariant}
            className="bg-[#f9f9f9] border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <p className="text-lg font-medium text-gray-800">{feature}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Tags */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {tags.map((tag, i) => {
          const rotation = (Math.random() * 10 - 5).toFixed(2);
          return (
            <motion.div
              key={i}
              custom={i}
              variants={tagVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full font-semibold text-white text-sm md:text-base cursor-pointer"
              style={{
                backgroundColor: tag.color,
                transform: `rotate(${rotation}deg)`,
                boxShadow: `0 4px 12px ${tag.color}50`,
              }}
            >
              {tag.label}
            </motion.div>
          );
        })}
      </div>

      {/* Highlights Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Choose Bellway for Your MVP?
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-zinc-100 px-4 py-3 rounded-full text-gray-800 shadow hover:scale-105 transition-transform"
            >
              <span className="text-[#D82C2C] text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Background Effects */}
      <div className="absolute w-72 h-72 bg-[#ffb2d0] rounded-full blur-3xl opacity-20 top-10 right-20 z-0" />
      <div className="absolute w-72 h-72 bg-[#d0f0ff] rounded-full blur-3xl opacity-20 bottom-20 left-10 z-0" />
    </div>
  );
};

export default MvpServices;
