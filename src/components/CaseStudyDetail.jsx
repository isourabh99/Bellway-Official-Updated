import React from "react";
import { useParams } from "react-router-dom";
import { ourwork } from "../data/ourwork";
import NotFound from "./NotFound";
import { motion } from "framer-motion";
import Header from "./Header";
import { Helmet } from "react-helmet";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const card = ourwork.find((card) => card.id === parseInt(id));

  if (!card) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Case Study - Innovation In Action</title>
        <meta
          name="description"
          content="Explore our in-depth case studies showcasing our expertise. Discover how we've helped clients achieve their business goals through innovative solutions and strategic insights."
        />
        <meta
          name="keywords"
          content="IT case studies, software development case study, web development success stories, mobile app development case study, enterprise solutions, client success stories, innovation case studies, technology transformation, Bellway Infotech case study, digital transformation projects, ERP implementation case study, AI-driven solutions"
        />
      </Helmet>

      {/* Hero Header */}
      <Header
        title={card.title}
        mediaSrc={card.image}
        demoLink={card.title}
        para1={card.clientGoals}
      />

      {/* Content Section */}
      <motion.div
        className="px-4 md:px-20 py-20"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Image and Text */}
        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div className="flex-1" variants={fadeInUp}>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-auto max-h-[450px] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div className="flex-1" variants={fadeInUp}>
            <h1 className="text-5xl font-semibold text-[#d82c2c] mb-4">
              {card.title}
            </h1>
            <p className="text-sm font-medium text-primary-600 uppercase tracking-widest mb-4">
              {card.category}
            </p>
            <p className="text-lg text-gray-700 leading-loose mb-6">
              {card.description}
            </p>

            {card.duration && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  🕒 Development Time
                </h3>
                <p className="text-gray-600 mt-1">{card.duration}</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div className="mt-12 flex flex-wrap gap-4" variants={fadeInUp}>
          {["Responsive Design", "Performance Optimized", "SEO Friendly"].map(
            (tag, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-100 to-white text-gray-800 px-6 py-2 rounded-full font-medium shadow-sm"
              >
                {tag}
              </motion.div>
            )
          )}
        </motion.div>

        {/* Technologies */}
        {card.technologies && (
          <motion.div className="mt-14" variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🛠 Technologies Used
            </h3>
            <div className="flex flex-wrap gap-4">
              {card.technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-100 px-5 py-2 rounded-full shadow text-sm text-gray-700 font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Client Goals */}
        {card.clientGoals && (
          <motion.div className="mt-14" variants={fadeInUp}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🎯 Client Goals
            </h3>
            <p className="text-gray-700 leading-relaxed">{card.clientGoals}</p>
          </motion.div>
        )}

        {/* More Info */}
        <motion.div className="mt-14 border-t pt-10" variants={fadeInUp}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            📌 More About This Case Study
          </h3>
          <p className="text-lg text-gray-700">
            Dive deeper into the project’s journey: development phases,
            challenges tackled, key outcomes, and the impact it created. This
            section highlights the complete lifecycle and transformation story
            behind the scenes.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CaseStudyDetail;
