import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = [
  {
    title: "Skilled Tech Experts",
    description:
      "Our team of highly trained and certified software engineers specializes in leveraging the latest frameworks, languages, and platforms to deliver robust, scalable, and future-proof solutions. Whether it's web development, cloud architecture, or AI-powered systems, our experts are fully equipped to turn your digital vision into a high-performing product tailored for your business growth.",
    image:
      "https://i.pinimg.com/736x/79/90/45/7990454c176c52ecee1d93e11be902e6.jpg",
  },
  {
    title: "Cutting-Edge Innovation",
    description:
      "We drive success through innovation, harnessing modern technologies like microservices, serverless computing, artificial intelligence, and IoT integrations. Our forward-thinking approach ensures your product is designed to evolve with changing market demands, creating a seamless and immersive user experience that outpaces competitors.",
    image:
      "https://i.pinimg.com/736x/9e/f9/9c/9ef99ce2c3f8c8ba229aef68ef00b909.jpg",
  },
  {
    title: "24/7 Client Support & Consultation",
    description:
      "We believe collaboration doesn't end at deployment. Our dedicated client support teams are available 24/7, ensuring smooth project execution, real-time updates, technical consultation, and immediate troubleshooting — giving you peace of mind as your project scales.",
    image:
      "https://i.pinimg.com/736x/44/96/cc/4496cccf86f269c908403fbb216a6a7b.jpg",
  },
  {
    title: "Creative UI/UX Design Excellence",
    description:
      "We craft visually compelling, intuitive, and conversion-focused digital experiences using modern UI/UX design principles. Our designers work closely with you to shape brand-accurate aesthetics, responsive layouts, and pixel-perfect prototypes that guarantee high engagement and customer satisfaction.",
    image:
      "https://i.pinimg.com/736x/0d/dc/bf/0ddcbf1939dd45b4bee1e581bfd16e09.jpg",
  },
  {
    title: "Agile Development & Fast Delivery",
    description:
      "Time-to-market matters. Our agile-driven process ensures every product iteration is streamlined, collaborative, and flexible. From daily standups to sprint-based releases, we keep you involved at every step, offering transparency, flexibility, and timely project deliveries.",
    image:
      "https://i.pinimg.com/736x/f2/10/ea/f210ea7dcc04000fc419b7846d612ff5.jpg",
  },
];


const WhyBellway = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = options[activeIndex];

  return (
    <section
      id="#services"
      className="w-full min-h-screen  text-white px-2 lg:px-20 py-10 flex flex-col  items-center justify-between bg-zinc-50"
    >
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-black mb-10">
        Why Bellway?
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-full  bg-white ">
          <div className="space-y-3 w-full ">
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 border-2  ${
                  activeIndex === index
                    ? "bg-[#d82c2c] border-[#d82c2c] text-white shadow-lg"
                    : "bg-zinc-900 border-zinc-900 text-zinc-100 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                <p className="text-sm lg:text-lg font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center ">
          <motion.img
            key={activeItem.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            src={activeItem.image}
            alt={activeItem.title}
            className="rounded-xl border-4 border-[#d82c2c]  object-cover object-center"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={activeItem.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-lg text-zinc-700 mt-10 text-center"
        >
          {activeItem.description}
        </motion.p>
      </AnimatePresence>
    </section>
  );
};

export default WhyBellway;
