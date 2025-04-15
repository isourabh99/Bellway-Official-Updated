import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMobileAlt } from "react-icons/fa";

const tabVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const ServicesTab = ({
  tabsData = [],
  icon: Icon = FaMobileAlt,
  heading = "",
}) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabsData.length) return null;

  return (
    <div className="w-full px-2 md:px-20 bg-zinc-100 pt-20">
      {heading && (
        <h2 className="text-center text-4xl md:text-4xl font-semibold mb-10 ">
          {heading}
        </h2>
      )}

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabsData.map((item, index) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={index}
            onClick={() => setActiveTab(index)}
            className={`text-sm md:text-base font-medium px-5 py-2 rounded-full transition-all duration-300 border-2 ${
              activeTab === index
                ? "bg-[#d82c2c] text-white border-white"
                : "bg-transparent  border-zinc-900 "
            }`}
          >
            {item.name}
          </motion.button>
        ))}
      </div>

      <div className="mx-auto min-h-[200px] md:min-h-[250px] bg-zinc-900 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-sm md:text-lg tracking-wide text-zinc-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon size={24} />
              <h3 className="text-xl md:text-2xl font-semibold">
                {tabsData[activeTab].name}
              </h3>
            </div>
            <p>{tabsData[activeTab].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesTab;
