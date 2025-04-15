import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBug,
  FaCode,
  FaTimesCircle,
  FaHeadset,
  FaClock,
  FaSyncAlt,
  FaCogs,
  FaUserShield,
} from "react-icons/fa";

const featuresWithIcons = [
  { label: "Free App Deployment", icon: FaRocket, bg: "#E0F7FA" },
  { label: "Free Bug Support", icon: FaBug, bg: "#FFF3E0" },
  { label: "100% Source Code", icon: FaCode, bg: "#E8F5E9" },
  { label: "Support After App Rejection", icon: FaTimesCircle, bg: "#F3E5F5" },
  { label: "Free Technical Support", icon: FaHeadset, bg: "#FCE4EC" },
  { label: "On-Time Support", icon: FaClock, bg: "#EDE7F6" },
  { label: "Regular Updates", icon: FaSyncAlt, bg: "#E1F5FE" },
  { label: "Easy Customization", icon: FaCogs, bg: "#FFFDE7" },
  { label: "Dedicated Manager", icon: FaUserShield, bg: "#F9FBE7" },
];

const WhyChooseBellway = ({
  heading = "Why Choose Bellway?",
  features = featuresWithIcons,
}) => {
  return (
    <section className="w-full  py-20 px-2 md:px-20 0">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl  font-semibold text-center text-zinc-800 mb-20"
      >
        {heading}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map(({ label, icon: Icon, bg }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            className="p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-zinc-200"
            style={{ backgroundColor: bg }}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-white shadow-sm">
                <Icon className="text-2xl text-zinc-800" />
              </div>
              <p className="text-lg font-medium text-zinc-700">{label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseBellway;
