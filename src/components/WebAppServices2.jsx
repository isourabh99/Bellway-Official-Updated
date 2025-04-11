import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaLock, FaLightbulb, FaTools } from "react-icons/fa";

const offerings = [
  "Unparalleled Website Designing Services",
  "Use of Latest and Sophisticated Technologies",
  "Consolidated Website Design and Development Packages",
  "Cost-Effective Solutions for Emerging Companies",
  "Custom and Highly Personalized Website Solutions",
  "Round-the-Clock Support via Email, Chat, and Phone",
];

const tags = [
  { label: "Design", color: "#D82C2C" },
  { label: "Innovation", color: "#FF9900" },
  { label: "Support", color: "#7F00FF" },
  { label: "Development", color: "#1E90FF" },
  { label: "UI/UX", color: "#00C49A" },
  { label: "Scalability", color: "#FF4081" },
  { label: "Web3 Ready", color: "#FFD700" },
  { label: "Cloud Friendly", color: "#8A2BE2" },
  { label: "SEO Optimized", color: "#1ABC9C" },
  { label: "24/7 Support", color: "#FF6347" },
  { label: "React Expertise", color: "#61DBFB" },
  { label: "Mobile Responsive", color: "#4CAF50" },
  { label: "Next.js Ready", color: "#b0b0b0" },
  { label: "Pixel Perfect", color: "#E91E63" },
  { label: "Framer Motion", color: "#C71585" },
];

const highlights = [
  { icon: <FaStar />, label: "5-Star Satisfaction" },
  { icon: <FaClock />, label: "On-Time Delivery" },
  { icon: <FaLock />, label: "NDA Protection" },
  { icon: <FaLightbulb />, label: "Custom Tech Solutions" },
  { icon: <FaTools />, label: "Post-Launch Support" },
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

const WebAppServices2 = () => {
  return (
    <div className="h-screen relative flex flex-col md:flex-row items-start justify-between w-full px-6 md:px-20 py-20 gap-16 bg-black text-white overflow-hidden ">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-10 text-white leading-tight">
          Offerings at <br />{" "}
          <span className="text-[#D82C2C]">Bellway Infotech</span>
        </h1>
        <ul className="space-y-4 list-disc text-lg md:text-xl text-zinc-200 pl-5">
          {offerings.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 flex flex-col items-center gap-10 relative z-10"
      >
        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-4">
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

        {/* NEW: BOTTOM HIGHLIGHTS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full mt-6"
        >
          <h3 className="text-2xl font-bold text-center mb-4 text-white">
            Why Clients Love Us
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((item, index) => (
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
      <div className="absolute w-72 h-72 bg-[#ae00ff] rounded-full blur-3xl opacity-20 top-10 right-10 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-[#b0b0b0] rounded-full blur-3xl opacity-20 bottom-50 right-1/3 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-[#009ac4] rounded-full blur-3xl opacity-20 bottom-50 left-10 animate-pulse z-0" />
    </div>
  );
};

export default WebAppServices2;
