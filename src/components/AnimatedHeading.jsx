import { motion } from "framer-motion";

// Container variant that staggers the letters
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Variant for each letter
const letterVariant = {
  hidden: {
    opacity: 0,
    y: -50,
    rotate: -20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function AnimatedHeading({ showCallForm }) {
  // Choose headline based on form type
  const headline = showCallForm
    ? "Schedule Your Call"
    : "Contact Our Sales Team";

  // Using key={headline} ensures that when headline changes, the component re-mounts and the animation runs again
  return (
    <motion.h2
      key={headline}
      className="text-4xl font-semibold text-black  tracking-widest uppercase mb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    //   whileHover={{ scale: 1.05 }}
    >
      {headline.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariant}>
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
}
