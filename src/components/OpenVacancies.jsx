import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const colorPalette = [
  { bg: "bg-violet-200", text: "text-violet-700" },
  { bg: "bg-rose-300", text: "text-rose-800" },
  { bg: "bg-emerald-200", text: "text-emerald-700" },
  { bg: "bg-blue-200", text: "text-blue-700" },
  { bg: "bg-orange-200", text: "text-orange-700" },
  { bg: "bg-yellow-200", text: "text-yellow-700" },
  { bg: "bg-fuchsia-200", text: "text-fuchsia-700" },
  { bg: "bg-orange-400", text: "text-orange-700" },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function OpenVacancies() {
  const [hirings, setHirings] = useState([]);

  const getHiring = async () => {
    try {
      const response = await axios.get(
        "https://admin.bellwayinfotech.com/api/admin/hirings"
      );
      setHirings(response.data);
    } catch (error) {
      if (error.response) {
        alert(
          `Error ${error.response.status}: ${
            error.response.data.message || "Hirings not found"
          }`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    getHiring();
  }, []);

  return (
    <div className="min-h-screen  px-2 md:px-20 py-10 bg-zinc-50">
      <h2 className="text-4xl font-semibold text-center text-zinc-900 mb-20">
        🚀 Open Vacancies
      </h2>

      <motion.div
        className="flex flex-wrap gap-10  mx-auto justify-start"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {hirings.map((job, index) => {
          const color = colorPalette[index % colorPalette.length];

          return (
            <motion.div
              key={job._id || index}
              className="w-full sm:w-[45%] lg:w-[30%] rounded-2xl shadow-xl overflow-hidden border border-zinc-200"
              variants={cardVariants}
            >
              <div
                className={`w-full ${color.bg} h-12 text-center py-3 text-lg font-semibold ${color.text}`}
              >
                🚨 We're hiring!
              </div>

              <div className="px-4 py-6 bg-white">
                <h3 className={`text-2xl font-bold mb-3 ${color.text}`}>
                  {job.positions}
                </h3>

                <p className="text-zinc-700 mb-2">
                  <span className="font-medium">Experience:</span>{" "}
                  <span className="font-semibold text-zinc-900">
                    {job.experience || "N/A"}
                  </span>
                </p>

                <p className="italic text-sm mb-5 text-zinc-600">
                  🚀 Join us as a{" "}
                  <span className="font-semibold text-black">
                    {job.positions}
                  </span>{" "}
                  and bring your{" "}
                  <span className="font-semibold text-black">
                    {job.experience || "fresh perspective"}
                  </span>{" "}
                  to our team!
                </p>

                <Link
                  to="#"
                  className={`rounded-xl ${color.bg} ${color.text} font-semibold hover:scale-105 duration-300 text-center block px-4 py-2 mt-4`}
                >
                  Apply Now →
                </Link>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default OpenVacancies;
