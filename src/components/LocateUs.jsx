import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocateUs() {
  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps?q=@22.728871326865008,75.89592178697158",
      "_blank"
    );
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-[#f0f4ff] to-white md:h-screen flex flex-col items-center justify-center px-2 md:p-20 rounded-2xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h2
        className="text-4xl font-extrabold text-gray-800 mb-4 relative w-fit"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Locate Us
        <span className="absolute left-0 -bottom-1 w-1/3 h-1 bg-red-500 rounded-full" />
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        We're just a click away! Find us on the map below 
      </motion.p>

      <motion.div
        className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl border border-gray-200 shadow-lg"
        initial={{ opacity: 0.5, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.989173554355!2d75.89330397505773!3d22.728643779380917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396317d8dce0a973%3A0xe74ff35946a7c87d!2sBellway%20Infotech%20%7C%20Mobile%20app%20and%20Website%20development%20company!5e0!3m2!1sen!2sin!4v1732099833636!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Bellway Infotech Location"
        ></iframe>

        {/* Hover Overlay - No Blur */}
        <motion.div
          onClick={openGoogleMaps}
          className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/40 transition duration-300 cursor-pointer"
          whileHover={{ scale: 1.01 }}
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-5 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-400 transition"
          >
            <FaMapMarkerAlt className="w-5 h-5" />
            Open in Google Maps
          </motion.button>
        </motion.div>

        {/* Glowing Map Marker */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-10"
          animate={{
            y: [0, -6, 0],
            boxShadow: [
              "0 0 0px #f43f5e",
              "0 0 8px #f43f5e",
              "0 0 0px #f43f5e",
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          {/* <div className="w-5 h-5 bg-red-500 rounded-full border-2 border-white shadow-md" /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
