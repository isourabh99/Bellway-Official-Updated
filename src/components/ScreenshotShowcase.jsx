import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import iphone14 from "../assets/iphone14.png";

const ScreenshotShowcase = ({ screenshots = [] }) => {
  return (
    <section className="w-full bg-zinc-100  px-4 md:px-20 py-20">
      <h2 className="text-4xl font-semibold text-center text-zinc-800 mb-20">
        Product Preview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 justify-items-center">
        {screenshots.map((src, index) => (
          <FrameWithScreenshot key={index} src={src} />
        ))}
      </div>
    </section>
  );
};

const FrameWithScreenshot = ({ src }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {once:true, margin: "0px 0px -50px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-[250px] aspect-[9/18]  "
    >
      {/* iPhone Frame (on top layer) */}
      {/* <img
        src={iphone14}
        alt="iPhone Frame"
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none select-none"
      /> */}

      {/* Screenshot inside frame */}
      <div className="absolute top-[2%] left-[5%] w-[90%] h-[96%] overflow-hidden rounded-[2rem] z-0">
        <img
          src={src}
          alt="Screenshot"
          className="w-full h-full object-cover ]"
        />
      </div>
    </motion.div>
  );
};

export default ScreenshotShowcase;
