import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const services = [
  {
    title: "Artificial Intelligence",
    description:
      "Our AI specialists harness the power of cutting-edge technologies like machine learning, natural language processing, and computer vision to build intelligent systems. These solutions automate workflows, uncover insights from big data, and provide highly personalized user experiences — revolutionizing industries ranging from healthcare and finance to retail and logistics.",
    image:
      "https://i.pinimg.com/736x/8d/e9/ce/8de9ceb839c818ff1bffd03c4d3439f7.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "We create user-first mobile applications tailored for iOS, Android, and cross-platform ecosystems using the latest technologies like Flutter and React Native. From sleek UI designs to backend API integrations, our apps are designed to scale, perform seamlessly, and deliver impactful experiences that align with your business goals.",
    image:
      "https://i.pinimg.com/736x/84/a1/65/84a16506795a06dee7df4bb618e126e2.jpg",
  },
  {
    title: "Web App Development",
    description:
      "Our web development experts specialize in building scalable, high-performance applications using modern frameworks like React, Next.js, and Node.js. Whether it's a customer portal, SaaS platform, or enterprise dashboard, we ensure your web app is robust, secure, and optimized for speed, SEO, and user engagement.",
    image:
      "https://i.pinimg.com/736x/15/0b/52/150b52326f8c15a8641656f541e20a79.jpg",
  },
  {
    title: "UI / UX Design",
    description:
      "We blend creativity with usability to craft interfaces that not only look stunning but also guide users effortlessly through every interaction. From wireframing and prototyping to motion design and design systems, our UI/UX solutions are human-centric, adaptive, and engineered for engagement across all devices.",
    image:
      "https://i.pinimg.com/736x/92/f4/8a/92f48afa4df07bb5284f8db08017e7b9.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing team drives growth through tailored campaigns spanning SEO, SEM, content strategy, email automation, and performance analytics. We help you build a strong digital footprint, attract high-quality leads, and convert traffic into loyal customers using data-driven tactics and creative storytelling.",
    image:
      "https://i.pinimg.com/736x/d9/c7/98/d9c798c0bb47e6140a6db45b27ecaf0c.jpg",
  },
];


const BellwayServices = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <section className="w-full h-screen  bg-zinc-100 text-white flex flex-col lg:flex-row overflow-hidden px-2 lg:px-20 min-h-screen">
      {/* Left Vertical Heading */}
      <div className="w-full lg:w-[150px] flex justify-center items-center my-10 lg:my-0">
        <div className="flex flex-col items-center justify-center transform lg:-rotate-90 ">
          <h1 className="text-black text-6xl lg:text-9xl font-bold leading-none">
            BELLWAY
          </h1>
          <h1 className="text-black text-4xl lg:text-7xl font-bold leading-none">
            SERVICES
          </h1>
        </div>
      </div>

      {/* Right Cards */}
      <div className="flex-1 flex items-center flex-col lg:flex-row justify-end gap-4  overflow-x-auto mb-10 lg:my-0">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`group relative w-full  lg:w-[140px] 
                ${
                isMobile
                  ? isActive
                    ? "h-[70vh] "
                    : "h-[30vh] "
                  : " lg:h-[550px] hover:w-[400px]"
              } 
              transition-all duration-500 bg-cover bg-center rounded-xl overflow-hidden cursor-pointer shadow-lg`}
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Title */}
              <div className="absolute bottom-0 w-full text-center p-4 bg-black opacity-80">
                <h2 className="text-sm font-bold text-white">
                  {service.title}
                </h2>
              </div>

              {/* Description (shown on hover or on mobile tap) */}
              <div
                className={`absolute inset-0 bg-black/70 p-6 flex items-center justify-center transition-opacity duration-500 ${
                  isMobile
                    ? isActive
                      ? "opacity-100"
                      : "opacity-0"
                    : "group-hover:opacity-100 opacity-0"
                }`}
              >
                <p className="text-sm lg:text-lg text-white text-center ">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


export default BellwayServices;
