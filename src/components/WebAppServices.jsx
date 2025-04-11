import React from "react";
import { motion } from "framer-motion";
import web from "../assets/web.jpg";
const WebAppServices = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="containerx px-2 md:px-20 py-10 md:py-20 flex flex-col md:flex-row justify-between bg-zinc-100 items-center rounded overflow-hidden mb-10"
    >
      {/* Text Section */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2"
      >
        <h1 className="text-zinc-900 text-3xl md:text-5xl font-semibold leading-tight mb-8">
          Web Application Development Services
        </h1>
        <p className="text-zinc-800 text-lg leading-relaxed">
          A well-designed website can significantly boost your traffic and
          conversions. In the digital age, customers are constantly seeking
          top-notch products and services. If you own a website offering these,
          but haven't been seeing the expected number of customers or
          conversions, your website design might be the issue.
          <br />
          <br />
          It's time to carefully evaluate your website and make bold changes to
          its design. An attractive, user-friendly website can drive exponential
          growth for your business. At <strong>Bellway Infotech</strong>, we
          specialize in creating user-friendly, quick-responsive websites and
          web applications tailored to your business needs.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="md:w-1/2 mt-10 md:mt-0 flex justify-end"
      >
        <img
          src={web}
          alt="Web Development"
          className="md:w-[80%]  rounded-xl shadow-md "
        />
      </motion.div>
    </motion.div>
  );
};

export default WebAppServices;
