import { motion } from "framer-motion";

const DynamicAboutGrid = ({ content }) => {
  return (
    <div className="relative px-4 py-20 md:px-20 bg-zinc-100 text-white overflow-hidden">
      {/* Glowing Floating Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-72 h-72 bg-red-500 blur-[100px] opacity-30 animate-pulse top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-blue-500 blur-[100px] opacity-30 animate-pulse bottom-10 right-10"></div>
      </div>

      <h2 className="text-4xl text-black font-bold text-center mb-20 relative z-10">
        Our Journey
      </h2>

      <div className="relative z-10 border-l-4 border-red-600 pl-8 space-y-20">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-6 top-1 w-4 h-4 bg-red-500 rounded-full shadow-md shadow-red-500 animate-ping"></div>

            <div className="bg-zinc-900 rounded-2xl p-4 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full md:w-100 max-h-80 object-cover rounded-lg shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-zinc-300 whitespace-pre-line leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DynamicAboutGrid;
