import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const fadeSlide = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
};

export default function ContactCard() {
  return (
    <motion.div
      variants={fadeSlide}
      initial="hidden"
      animate="visible"
      className="relative bg-black text-white h-screen md:min-h-[90vh] px-2 md:px-20 py-20 rounded-3xl overflow-hidden shadow-2xl z-10"
    >
      {/* Glowing Background Overlay */}
      {/* <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#D82C2C] opacity-30 blur-3xl rounded-full z-0 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-gradient-to-tr from-yellow-500 via-[#D82C2C] to-transparent opacity-20 blur-2xl rounded-full z-0 animate-pulse" /> */}

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-14">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Let’s Connect <span className="animate-bounce">🤝</span>
          </h1>
          <p className="text-gray-400 mb-8 text-lg max-w-md">
            Need help or want to grow your team? We’d love to hear from you and
            help your business scale.
          </p>

          <ul className="space-y-4 mb-10">
            {[
              "Boost team productivity",
              "Get personalized pricing",
              "Explore use cases",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-start text-gray-300 text-base"
              >
                <FiCheck className="text-green-500 mt-1 mr-3 text-xl" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 italic">
            For tech queries, visit our Help Centre.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3 text-red-400 uppercase tracking-wide">
              Contact Numbers
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500 text-lg" />
                <div>
                  <p className="text-gray-500 text-sm">Sales</p>
                  <p className="font-medium text-white">+91 9981866409</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-500 text-lg" />
                <div>
                  <p className="text-gray-500 text-sm">HR</p>
                  <p className="font-medium text-white">+91 8827211560</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-red-400 uppercase tracking-wide">
              Email
            </h2>
            <p className="text-gray-300">info@bellwayinfotech.com</p>
            <p className="text-gray-300">hr@bellwayinfotech.com</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-red-400 uppercase tracking-wide">
              Follow us
            </h2>
            <div className="flex gap-4 mt-2">
              {[
                {
                  icon: <FaFacebookF />,
                  color: "hover:text-blue-400",
                  link: "https://www.facebook.com/bellwayinfotechh/",
                },
                {
                  icon: <FaInstagram />,
                  color: "hover:text-pink-400",
                  link: "https://www.instagram.com/bellwayinfotech/",
                },
                {
                  icon: <FaLinkedinIn />,
                  color: "hover:text-sky-400",
                  link: "https://www.linkedin.com/company/bellwayinfotech",
                },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  to={social.link}
                  target="_blank"
                  className={`p-3 bg-neutral-900 rounded-full shadow-md transition-all hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-16 border-t border-gray-700 pt-8">
        <h2 className="text-3xl font-bold mb-4">🚀 Join Us</h2>
        <p className="text-gray-400 mb-6 max-w-2xl">
          Become a part of our growing tech team and let’s build something
          meaningful together.
        </p>
        <Link
          to="/career-with-us"
          className="group inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold"
        >
          Join Now
          <BsArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
