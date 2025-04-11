import React from "react";
import { motion } from "framer-motion";
import {
  FaPlug,
  FaMobileAlt,
  FaLock,
  FaPaintBrush,
  FaRocket,
  FaCloudUploadAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPaintBrush className="text-4xl text-white" />,
    title: "Limitless Customization",
    desc: "Modify every element from theme colors to layout structures using powerful customizers and builders.",
    bg: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    icon: <FaPlug className="text-4xl text-white" />,
    title: "50,000+ Plugins Support",
    desc: "Extend functionalities effortlessly with thousands of plugins for SEO, eCommerce, booking systems, and more.",
    bg: "from-purple-600 via-indigo-600 to-blue-600",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-white" />,
    title: "Fully Responsive Design",
    desc: "Delivers seamless experiences across all devices, ensuring your site looks stunning everywhere.",
    bg: "from-blue-500 via-cyan-500 to-teal-400",
  },
  {
    icon: <FaRocket className="text-4xl text-white" />,
    title: "Lightning-Fast Performance",
    desc: "Optimized themes and performance plugins ensure fast load times and smooth navigation.",
    bg: "from-green-500 via-lime-500 to-yellow-300",
  },
  {
    icon: <FaLock className="text-4xl text-white" />,
    title: "Robust Security Features",
    desc: "Built-in security updates, backup plugins, and SSL compatibility protect your site 24/7.",
    bg: "from-red-600 via-rose-600 to-pink-400",
  },
  {
    icon: <FaCloudUploadAlt className="text-4xl text-white" />,
    title: "One-Click Deploy & Migrate",
    desc: "Deploy or migrate sites with one click using plugins like Duplicator, WP Engine, or Flywheel.",
    bg: "from-amber-500 via-orange-500 to-red-500",
  },
];

const WordPressFeatures = () => {
  return (
    <div className="bg-zinc-100 py-20 px-2 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Powerful WordPress Features
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${feature.bg} rounded-2xl p-6 shadow-lg min-h-[280px] flex flex-col justify-between`}
          >
            <div>{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4 mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-white/90 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WordPressFeatures;
