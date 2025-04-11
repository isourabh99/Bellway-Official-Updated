import React from "react";
import { motion } from "framer-motion";
import {
  FaWordpress,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaPuzzlePiece,
} from "react-icons/fa";

const features = [
  {
    title: "Fully Customizable",
    icon: <FaPaintBrush className="text-4xl text-white" />,
    desc: "Adapt the layout, theme, and plugins to match your brand and business goals perfectly.",
    tag: "Theme Freedom",
    color: "#6D28D9",
  },
  {
    title: "SEO-Optimized",
    icon: <FaSearch className="text-4xl text-white" />,
    desc: "WordPress is designed to be SEO-friendly out of the box, helping your content rank higher.",
    tag: "Search Visibility",
    color: "#059669",
  },
  {
    title: "Plugin Ecosystem",
    icon: <FaPuzzlePiece className="text-4xl text-white" />,
    desc: "Extend your website's functionality with thousands of plugins — from eCommerce to analytics.",
    tag: "Scalability",
    color: "#D97706",
  },
  {
    title: "Mobile Responsive",
    icon: <FaMobileAlt className="text-4xl text-white" />,
    desc: "Ensure seamless user experience on every device with responsive designs.",
    tag: "Accessibility",
    color: "#2563EB",
  },
];

const WordpressFeatures2 = () => {
  return (
    <section className="bg-[#1B1B1B] py-20 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose WordPress for Your Website?
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg border border-zinc-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: feat.color }}
                >
                  {feat.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {feat.title}
                </h3>
              </div>
              <p className="text-zinc-400 text-md leading-relaxed">
                {feat.desc}
              </p>
              <span
                className="inline-block mt-4 px-3 py-1 text-sm font-medium rounded-full"
                style={{
                  backgroundColor: feat.color + "20",
                  color: feat.color,
                }}
              >
                {feat.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordpressFeatures2;
