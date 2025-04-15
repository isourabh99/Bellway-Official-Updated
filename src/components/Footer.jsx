import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import cybenko from "../assets/Cybenko.png";
import Frame from "../assets/logo9.png";
import { motion } from "framer-motion";

const Footer = () => {
  const hoverEffect = "hover:text-red-500 transition duration-300";

  return (
    <motion.footer
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white px-4 md:px-20 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social Links */}
        <div className="flex flex-col space-y-4">
          <motion.img
            src={Frame}
            alt="Logo"
            className="w-32"
            whileHover={{ scale: 1.05 }}
          />
          <p className="text-sm">
            Bellway Infotech combines passion and innovation to bring real value
            to your business.
          </p>
          <div className="flex space-x-4 text-lg">
            {[
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/bellwayinfotech",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/share/qaG7fY9nnaiAp7zC",
              },
              { icon: <FaTwitter />, link: "https://x.com/BellwayInfotech" },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/company/13666114/admin/dashboard/",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="https://cybenkotechnologies.in/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <img src={cybenko} alt="Cybenko" className="w-32 mt-4" />
          </motion.a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
          <div className="flex flex-col space-y-2 text-sm">
            {["/", "/about", "/multi-service", "/our-work", "/contact"].map(
              (path, i) => (
                <Link
                  key={i}
                  to={path}
                  className={`${hoverEffect} relative group`}
                >
                  {["Home", "About Us", "Services", "Blogs", "Contact Us"][i]}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Services</h4>
          <div className="flex flex-col space-y-2 text-sm">
            {[
              "Artificial Intelligence",
              "Web Application Development",
              "Mobile App Development",
              "UI/UX Designing",
              "Digital Marketing",
              "ERP Services",
              "MVP Development",
              "SaaS Development",
              "WordPress Development",
            ].map((service, i) => (
              <Link
                key={i}
                to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                className={`${hoverEffect} relative group`}
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Company Info</h4>
          <div className="flex flex-col space-y-2 text-sm">
            {[
              { text: "About Us", to: "/about" },
              { text: "Careers", to: "/career-with-us" },
              { text: "FAQ", to: "/about" },
              { text: "Privacy Policy", to: "/about" },
              { text: "Support", to: "/contact" },
              { text: "E-commerce Business", to: "/about" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`${hoverEffect} relative group`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-3 text-lg">Contact</h4>
          <div className="text-sm space-y-3">
            <div className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2" />
              <span>
                B-405 Anmol Space, Baikunth Dham,
                <br />
                Khajrana Main Road, Indore 452018
              </span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-red-500 mr-2" />
              <span>+91 9981866409 (Sales)</span>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <span>+91 8827211560 (HR)</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@bellwayinfotech.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        © 2025 All rights reserved by Bellway Infotech
      </div>
    </motion.footer>
  );
};

export default Footer;
