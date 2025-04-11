// components/LoadingSpinner.jsx
import { motion } from "framer-motion";

const LoadingSpinner = ({ text = "Submitting..." }) => {
  return (
    <div className="flex items-center justify-center gap-3 text-white">
      <motion.div
        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 0.8 }}
      />
      <span className="tracking-wide">{text}</span>
    </div>
  );
};

export default LoadingSpinner;
