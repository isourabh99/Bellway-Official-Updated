import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { FaApple, FaLaptopCode, FaSteamSquare } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";

export default function MobileAppServices2() {
  return (
    <div className="relative px-4 md:px-20 my-20 w-full flex flex-col md:flex-row gap-6">
      {/* Native App Development */}
      <motion.div
        className="bg-zinc-800 md:w-1/2 p-4  rounded-3xl flex flex-col justify-between"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link
          to="/contact"
          className="w-fit bg-white p-4 rounded-full flex items-center justify-center gap-2 hover:scale-110 transition-all duration-300"
        >
          <FiArrowUpRight size={24} />
        </Link>
        <h2 className="text-white text-3xl md:text-5xl font-bold my-8">
          Native App Development
        </h2>
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
          At Bellway Infotech, our Native app developers, including iOS and
          Android experts, have extensive experience creating unique and secure
          applications for specific platforms. We tailor each app to align with
          your objectives and goals, ensuring seamless performance and user
          experience.
        </p>
      </motion.div>

      {/* Cross-Platform + Feature Cards */}
      <div className="md:w-1/2 flex flex-col gap-6">
        {/* Cross-Platform App Dev */}
        <motion.div
          className="bg-zinc-200 p-4 md:p-10 rounded-3xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="absolute top-4 right-4 w-fit bg-black text-white p-3 rounded-full flex items-center justify-center gap-2 hover:scale-110 transition-all duration-300"
          >
            <FiArrowUpRight size={20} />
          </Link>
          <h2 className="text-black text-2xl md:text-3xl font-semibold mb-4">
            Cross-Platform App Development
          </h2>
          <p className="text-zinc-800 text-base md:text-lg leading-relaxed">
            Our cross-platform developers specialize in hybrid apps using
            Flutter and React Native. We provide cost-effective solutions for
            businesses of all sizes across various industries.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-yellow-500 text-white rounded-3xl p-4 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <FaApple size={24} /> Platform Specific
            </div>
            <div className="flex items-center gap-2 mb-4">
              <IoHardwareChip size={24} /> Hardware Integration
            </div>
            <div className="flex items-center gap-2">
              <IoIosPhonePortrait size={24} /> App Optimization
            </div>
          </div>

          <div className="bg-purple-300 text-zinc-900 rounded-3xl p-4 flex-1">
            <div className="flex items-center gap-2 mb-4">
              <FaLaptopCode size={24} /> Reusable Code Base
            </div>
            <div className="flex items-center gap-2 mb-4">
              <IoHardwareChip size={24} /> Hardware Acceleration
            </div>
            <div className="flex items-center gap-2">
              <FaSteamSquare size={24} /> Rapid Development
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
