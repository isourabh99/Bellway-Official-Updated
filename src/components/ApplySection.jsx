import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaBriefcase } from "react-icons/fa";

function ApplySection() {
  return (
    <div className="pb-20 flex items-center justify-center bg-black px-2 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Freshers Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl shadow-2xl p-8 bg-zinc-900 backdrop-blur-sm border border-zinc-800 transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaUserGraduate className="text-[#D82C2C] text-3xl" />
            <h2 className="text-3xl font-bold text-white">Apply as Fresher</h2>
          </div>
          <p className="text-zinc-400 mb-6">
            Kickstart your career with us! Get the right platform to grow and
            learn.
          </p>
          <Link
            to={"/fresher"}
            className="px-6 py-3 bg-gradient-to-r from-[#D82C2C] to-red-600 text-white rounded-full shadow-lg hover:shadow-red-700/50 transition-all font-semibold tracking-wide"
          >
            Apply Now
          </Link>
        </motion.div>

        {/* Experienced Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-2xl shadow-2xl p-8 bg-zinc-900 backdrop-blur-sm border border-zinc-800 transition-all hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaBriefcase className="text-[#D82C2C] text-3xl" />
            <h2 className="text-3xl font-bold text-white">
              Apply as Experienced
            </h2>
          </div>
          <p className="text-zinc-400 mb-6">
            Looking for new challenges? Bring your experience and grow with us.
          </p>
          <Link
            to={"/experience"}
            className="px-6 py-3 bg-gradient-to-r from-[#D82C2C] to-red-600 text-white rounded-full shadow-lg hover:shadow-red-700/50 transition-all font-semibold tracking-wide"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default ApplySection;
