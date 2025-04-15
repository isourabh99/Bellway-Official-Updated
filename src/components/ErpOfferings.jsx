import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaChartBar,
  FaSync,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";

const erpOfferings = [
  "End-to-End ERP Implementation Services",
  "Custom Module Development & Integration",
  "Business Process Automation & Streamlining",
  "Real-Time Reporting & Analytics",
  "Cloud-Based ERP Deployment",
  "Ongoing Maintenance & Support",
];

const erpTags = [
  { label: "Scalable ERP", color: "#D82C2C" },
  { label: "Automation", color: "#00C49A" },
  { label: "Data-Driven", color: "#FF9900" },
  { label: "Secure", color: "#8A2BE2" },
  { label: "Integrated", color: "#1E90FF" },
  { label: "Cloud ERP", color: "#4CAF50" },
  { label: "User-Friendly", color: "#FFD700" },
  { label: "Real-Time", color: "#FF4081" },
  { label: "Custom Workflows", color: "#7F00FF" },
  { label: "Modular Design", color: "#1ABC9C" },
];

const erpHighlights = [
  { icon: <FaCogs />, label: "Tailored ERP Solutions" },
  { icon: <FaChartBar />, label: "Data-Driven Decisions" },
  { icon: <FaSync />, label: "Seamless Integration" },
  { icon: <FaShieldAlt />, label: "Enterprise Security" },
  { icon: <FaDatabase />, label: "Robust Infrastructure" },
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
      stiffness: 120,
    },
  }),
};

const ErpOfferings = () => {
  return (
    <div className=" relative flex flex-col md:flex-row items-start justify-between w-full px-2 md:px-20 py-20 gap-16 bg-black text-white overflow-hidden">
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-semibold mb-10 leading-tight">
          ERP Services by <br />
          <span className="text-[#D82C2C]">Bellway Infotech</span>
        </h1>
        <ul className="space-y-4 list-disc text-lg md:text-xl text-zinc-200 pl-5">
          {erpOfferings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex flex-col items-center gap-10 relative z-10"
      >
        {/* TAG CLOUD */}
        <div className="flex flex-wrap justify-center gap-4">
          {erpTags.map((tag, i) => {
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
                className="px-5 py-2 rounded-full font-semibold text-black text-sm md:text-base cursor-pointer"
                style={{
                  backgroundColor: tag.color,
                  boxShadow: `0 4px 12px ${tag.color}70`,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                {tag.label}
              </motion.div>
            );
          })}
        </div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full mt-6"
        >
          <h3 className="text-2xl font-bold text-center mb-4">
            Why Choose Our ERP?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {erpHighlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full text-white text-sm md:text-base shadow-md hover:scale-105 transition-transform"
              >
                <span className="text-[#D82C2C]">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* BACKGROUND BLOBS */}
      <div className="absolute w-72 h-72 bg-[#7F00FF] rounded-full blur-3xl opacity-20 top-10 right-10 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-[#FF9900] rounded-full blur-3xl opacity-20 bottom-40 left-1/4 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-[#00C49A] rounded-full blur-3xl opacity-20 bottom-40 right-1/4 animate-pulse z-0" />
    </div>
  );
};

export default ErpOfferings;
