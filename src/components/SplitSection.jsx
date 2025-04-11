import { motion } from "framer-motion";

const SplitSection = ({ imageSrc, heading, content, imageOnLeft = true }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-center py-20 px-2 md:px-20 gap-10">
      {/* PART 1 */}
      {imageOnLeft && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={imageSrc}
            alt="Section visual"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px]"
          />
        </motion.div>
      )}

      {/* PART 2 */}
      <motion.div
        initial={{ x: imageOnLeft ? 100 : -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 "
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-800 ">
          {heading}
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          {content}
        </p>
      </motion.div>

      {/* IMAGE ON RIGHT */}
      {!imageOnLeft && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={imageSrc}
            alt="Section visual"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[400px]"
          />
        </motion.div>
      )}
    </div>
  );
};

export default SplitSection;
