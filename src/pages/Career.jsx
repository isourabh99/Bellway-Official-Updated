import React from "react";
import Header from "../components/Header";
import career from "../assets/foundation11.png";
import OpenVacancies from "../components/OpenVacancies";
import WorkSummaryForm from "../components/WorkSummaryForm";
import FaqAi from "../data/faqAi";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLaptopCode,
  FaRocket,
  FaGlobeAsia,
  FaHandsHelping,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

function Career() {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - Career With Us</title>
        <meta
          name="description"
          content="At Bellway Infotech, we offer great career opportunities in UI/UX design, software development, cloud computing, app development, and more. Build your career with us!"
        />
        <meta
          name="keywords"
          content="career opportunities, jobs at Bellway Infotech, software development jobs, cloud computing jobs, app development careers, UI/UX design careers, IT jobs, tech careers, job openings, work with Bellway Infotech, join Bellway Infotech, careers in technology, IT professionals, software engineers, UX/UI designers"
        />
      </Helmet>

      <Header
        title="Career With Us"
        para1="At Bellway Infotech, we’re not just a company; we’re a community of forward-thinkers, innovators, and problem-solvers. We believe in nurturing talent and providing our team members with an environment where they can thrive, grow, and make an impact. If you're passionate about technology and eager to work on exciting projects that drive real business value, Bellway Infotech could be the perfect place for you."
        mediaSrc={career}
      />
      <OpenVacancies />
      <div className="bg-black py-20 px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
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
              className="text-sm uppercase tracking-widest text-red-500 font-semibold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Now Hiring
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Join Our Team <br />
              <span className="text-red-600">Create Your Future</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-zinc-300 text-lg"
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
                  icon: <FaUserTie className="text-red-600 text-xl" />,
                  text: "Leadership roles & career growth",
                },
                {
                  icon: <FaLaptopCode className="text-red-600 text-xl" />,
                  text: "Work with cutting-edge technology",
                },
                {
                  icon: <FaRocket className="text-red-600 text-xl" />,
                  text: "Dynamic & supportive culture",
                },
                {
                  icon: <FaGlobeAsia className="text-red-600 text-xl" />,
                  text: "Global clients and real-world impact",
                },
                {
                  icon: <FaHandsHelping className="text-red-600 text-xl" />,
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
                href="#apply"
                className="inline-block bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-white font-semibold text-lg"
              >
                Apply Now
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <div className="w-full md:w-1/2">
            <WorkSummaryForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Career;
