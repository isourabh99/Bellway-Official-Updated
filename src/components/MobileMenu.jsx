import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MobileDropDown from "./MobileDropDown";

const menuVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
};

export default function MobileMenu({ onClose, dropdowns, products }) {
  return (
    <motion.div
      className="lg:hidden absolute   w-full bg-black text-white z-40 shadow-md min-h-screen "
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col overflow-y-scroll">
        <Link
          to="/"
          className="px-4 py-4 border-b border-zinc-700 no-underline text-white text-xl"
          onClick={onClose}
        >
          Home
        </Link>

        <MobileDropDown
          label="Services"
          items={dropdowns.services}
          onClose={onClose}
        />
        <MobileDropDown
          label="About Us"
          items={dropdowns.about}
          onClose={onClose}
        />
        <MobileDropDown label="Products" items={products} onClose={onClose} />

        <Link
          to="/our-work"
          className="px-5 py-4 border-b border-zinc-700 no-underline text-white text-xl"
          onClick={onClose}
        >
          Our Work
        </Link>

        <Link
          to="/contact"
          className="px-5 py-4 no-underline text-white text-xl"
          onClick={onClose}
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
