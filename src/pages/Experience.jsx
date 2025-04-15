import { motion } from "motion/react";
import React from "react";
import {
  FaLaptopCode,
  FaLightbulb,
  FaChartLine,
  FaUsersCog,
  FaAward,
} from "react-icons/fa";
import ExperienceForm from "./ExperienceForm";

function Fresher() {
  return (
    <>
      <div className="bg-black  px-2 md:px-20 min-h-screen">
        <div className="flex flex-col md:flex-row items-center md:gap-10">
          {/* LEFT ANIMATED CONTENT */}
          <motion.div
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <motion.p
              className="text-sm uppercase tracking-widest text-[#D82C2C] font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Now Hiring
            </motion.p>
            {/* Main Heading */}
            <p className="text-[#D82C2C] text-4xl tracking-wider leading-0">
              Experienced Talent Wanted
            </p>

            <span className="text-3xl text-white hover:bg-gradient-to-r from-[#D82C2C] to-white hover:text-transparent hover:bg-clip-text transition-all duration-300">
              "Your expertise shapes the future of innovation."
            </span>
            <span className="text-3xl text-white hover:bg-gradient-to-r from-[#D82C2C] to-white hover:text-transparent hover:bg-clip-text transition-all duration-300">
              {" "}
              Be the difference. Let’s build brilliance together!"
            </span>

            {/* Description */}
            <motion.p
              className="text-zinc-300 text-lg my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At Bellway Infotech, your experience isn't just valued — it's the
              foundation for innovation. Join a team where your skills shape
              solutions and your insights drive progress. Apply now and lead the
              change.
            </motion.p>

            <motion.ul
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              {[
                {
                  icon: <FaAward className="text-[#D82C2C] text-xl" />,
                  text: "Recognition for expertise & achievements",
                },
                {
                  icon: <FaUsersCog className="text-[#D82C2C] text-xl" />,
                  text: "Lead, mentor & shape project teams",
                },
                {
                  icon: <FaChartLine className="text-[#D82C2C] text-xl" />,
                  text: "Accelerated career path & growth opportunities",
                },
                {
                  icon: <FaLaptopCode className="text-[#D82C2C] text-xl" />,
                  text: "Hands-on with advanced tech stacks",
                },
                {
                  icon: <FaLightbulb className="text-[#D82C2C] text-xl" />,
                  text: "Influence product vision and strategy",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-white text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {item.icon}
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
            {/* Call to Action Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/contact"
                className="inline-block bg-[#D82C2C] hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-semibold text-lg"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full md:w-1/2 py-20">
            <ExperienceForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fresher;
