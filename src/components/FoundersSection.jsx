import { motion } from "framer-motion";

const FoundersSection = ({ founders, heading, descriptions }) => {
  return (
    <section className="relative px-4 py-24 md:px-20 bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-zinc-600 blur-[100px] opacity-20 top-20 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-zinc-600 blur-[100px] opacity-20 bottom-20 right-10 animate-pulse" />
      </div>

      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>

      {/* Founders Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Founder Image Stack */}
        <div className="flex flex-col gap-10 items-center">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{founder.name}</h3>
              <p className="text-zinc-400 text-sm">{founder.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Descriptions */}
        <motion.div
          className="space-y-6 max-w-2xl text-lg text-zinc-300 leading-relaxed"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {descriptions.map((text, idx) => (
            <p key={idx} className="border-l-4 pl-4 border-red-500">
              {text}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersSection;
