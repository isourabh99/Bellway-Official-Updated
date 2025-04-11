import { motion } from "framer-motion";
import mobileservice from "../assets/mobileservice.jpg";

export default function MobileAppServices() {
 
  return (
    <div className="bg-zinc-100 py-16 px-4 md:px-20 rounded mb-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-zinc-900 text-3xl md:text-5xl font-bold leading-tight">
            Mobile Application Development Services
          </h1>
          <p className="text-zinc-800 text-lg leading-relaxed">
            Bellway Infotech boasts a team of seasoned mobile app developers
            skilled in crafting feature-rich, high-performing applications for
            diverse platforms. To ensure your business remains at the forefront
            in a competitive landscape, we employ cutting-edge techniques and
            technologies.
          </p>
          <ul className="list-disc pl-6 text-zinc-700 text-base space-y-2">
            <li>Custom iOS and Android app development</li>
            <li>Cross-platform mobile app solutions</li>
            <li>User-centric UI/UX design</li>
            <li>Mobile app testing and QA</li>
            <li>App maintenance and optimization</li>
            <li>Integration with APIs & third-party tools</li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={mobileservice}
            alt="Mobile Development Illustration"
            className="md:w-[60%] w-full mx-auto drop-shadow-2xl rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
