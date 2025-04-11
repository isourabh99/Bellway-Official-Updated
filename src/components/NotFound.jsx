import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-center px-4 md:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-5xl font-bold mb-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Case study not found <span className="text-[#d82c2c]">!</span>
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <FaSearch className="text-6xl text-gray-600 mb-4" />
        </motion.div>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Oops! We couldn't find that case study. Maybe try another one or go
          back to the homepage?
        </motion.p>

        <motion.Link
        to="/"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition duration-300"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Return to Home
        </motion.Link>
      </motion.div>
    </div>
  );
}
