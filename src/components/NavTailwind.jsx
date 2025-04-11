import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo9.png";
import DropDownMenu from "./DropDownMenu";
import MobileMenu from "./MobileMenu";

const dropdowns = {
  services: [
    {
      id: 1,
      title: "Artificial Intelligence",
      path: "/artificial-intelligence",
    },
    {
      id: 2,
      title: "Mobile Application Development",
      path: "/mobile-application-development",
    },
    { id: 3, title: "Web Development", path: "/web-development" },
    { id: 4, title: "UX/UI Design", path: "/ui-ux-design" },
    { id: 5, title: "Digital Marketing", path: "/digital-marketing" },
    { id: 6, title: "ERP Services", path: "/ERP-Services" },
    { id: 7, title: "MVP Development", path: "/mvp-development" },
    { id: 8, title: "SaaS Development", path: "/saas-development" },
    { id: 9, title: "Wordpress Development", path: "/wordpress" },
  ],
  about: [
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Career With Us", path: "/career-with-us" },
  ],
};

const products = [
  {
    id: 1,
    title: "On Demand Apps",
    subItems: [
      { id: 11, title: "Bellway Grocery", path: "/bellway-grocery" },
      { id: 12, title: "Foodo", path: "/foodo" },
      {
        id: 13,
        title: "Fresh n Red",
        path: "/fresh-n-red",
      },
    ],
  },
  {
    id: 2,
    title: "Service Apps",
    subItems: [
      { id: 14, title: "Make Your Trip", path: "/make-your-trip" },
      { id: 15, title: "Go Hotel", path: "/go-hotel" },
      { id: 16, title: "Multi Service", path: "/multi-service" },
    ],
  },
  { id: 3, title: "Bell Store", path: "/bell-store" },
  { id: 4, title: "UrFine", path: "/urfine" },
  { id: 5, title: "Team-11", path: "/team11" },
  { id: 6, title: "Movikat", path: "/movikat" },
  {
    id: 7,
    title: "Delicious Meals ",
    path: "/delicious-meals",
  },
  { id: 8, title: "Home-C", path: "/home-c" },
  { id: 9, title: "Daily Bills", path: "/daily-bills" },
];

export default function NavTailwind() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    let lastScrollY = window.scrollY;

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setShowNav(currentScrollY < lastScrollY || currentScrollY < 10);
        lastScrollY = currentScrollY;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 bg-black shadow-md"
    >
      <div className="w-full px-4 md:px-20 py-3 flex justify-between items-center">
        <Link to="/" className="text-white font-bold no-underline">
          <img src={logo} alt="Johri CPA Logo" className="w-40 ml-1" />
        </Link>

        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/"
            className={`text-white no-underline ${
              isActive("/") ? "text-[#D82C2C]" : ""
            }`}
          >
            Home
          </Link>
          <DropDownMenu
            label="About Us"
            items={dropdowns.about}
            dropdownKey="about"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
          />
          <DropDownMenu
            label="Services"
            items={dropdowns.services}
            dropdownKey="services"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
          />

          <DropDownMenu
            label="Products"
            items={products}
            dropdownKey="products"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
          />

          <Link
            to="/our-work"
            className={`text-white no-underline ${
              isActive("/our-work") ? "text-[#D82C2C]" : ""
            }`}
          >
            Our Work
          </Link>

          <Link
            to="/contact"
            className={`text-white no-underline ${
              isActive("/contact") ? "text-[#D82C2C]" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* === Mobile Menu Icon === */}
        <div className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* === Mobile Menu Component === */}
      {isMobileMenuOpen && (
        <MobileMenu
          dropdowns={dropdowns}
          products={products}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </motion.nav>
  );
}
