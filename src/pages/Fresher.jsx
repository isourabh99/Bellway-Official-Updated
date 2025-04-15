import { motion } from 'motion/react';
import React from 'react'
import {
  FaUserTie,
  FaLaptopCode,
  FaRocket,
  FaGlobeAsia,
  FaHandsHelping,
} from "react-icons/fa";
import FresherForm from '../components/FresherForm';
  
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
              Join Our Team as Freshers Level
            </p>

            <span className="text-3xl text-white hover:bg-gradient-to-r from-[#D82C2C] to-white hover:text-transparent hover:bg-clip-text transition-all duration-300">
              "Every great developer was once a beginner.
            </span>
            <span className="text-3xl text-white hover:bg-gradient-to-r from-[#D82C2C] to-white hover:text-transparent hover:bg-clip-text transition-all duration-300">
              {" "}
              Welcome to a journey of endless learning and innovation!"
            </span>
            {/* Description */}
            <motion.p
              className="text-zinc-300 text-lg my-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Whether you're a seasoned expert or just getting started, Bellway
              Infotech offers opportunities to grow, learn, and make an impact.
              We're hiring across multiple domains — apply now and be part of
              something big.
            </motion.p>
            {/* Perks List */}
            <motion.ul
              className="space-y-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              {[
                {
                  icon: <FaUserTie className="text-[#D82C2C] text-xl" />,
                  text: "Leadership roles & career growth",
                },
                {
                  icon: <FaLaptopCode className="text-[#D82C2C] text-xl" />,
                  text: "Work with cutting-edge technology",
                },
                {
                  icon: <FaRocket className="text-[#D82C2C] text-xl" />,
                  text: "Dynamic & supportive culture",
                },
                {
                  icon: <FaGlobeAsia className="text-[#D82C2C] text-xl" />,
                  text: "Global clients and real-world impact",
                },
                {
                  icon: <FaHandsHelping className="text-[#D82C2C] text-xl" />,
                  text: "Team collaboration & mentorship",
                },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-3 text-white text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
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
          <div className="w-full md:w-1/2 py-10">
            <FresherForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fresher