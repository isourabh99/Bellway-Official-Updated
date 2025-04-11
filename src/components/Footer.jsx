import React from "react";
import Frame from "../assets/logo9.png";
import { Link } from "react-router-dom";
import cybenko from "../assets/Cybenko.png";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white py-8 px-2 md:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-start col-span-1 lg:col-span-1">
            <img
              loading="lazy"
              className="w-52  mt-[-1.7rem]"
              src={Frame}
              alt="Logo"
            />
            <p className="text-sm mb-4 md:ml-5">
              Bellway Infotech combines passion and innovation to bring real to
              customers' business
            </p>
            <div className="md:flex w-ful space-x-9 md:space-x-4 md:ml-5">
              <a
                href="https://www.instagram.com/bellwayinfotech?igsh=bG5yaDhtaDhreWxs"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/share/qaG7fY9nnaiAp7zC/?mibextid=qi2Omg"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://x.com/BellwayInfotech"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/13666114/admin/dashboard/"
                className="text-white hover:text-gray-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="mt-5 md:ml-5 text-lg font-semibold  lg:text-base">
              Co-venture{" "}
              <a
                href="https://cybenkotechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  loading="lazy"
                  src={cybenko}
                  alt="Cybenko Logo"
                  className="w-3/2 h-12 my-3"
                />
              </a>
            </p>
          </div>
          <div className="flex flex-col col-span-1 lg:col-span-1">
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <Link to="/" className="text-white hover:text-gray-400 mb-2">
              <i className="fas fa-home mr-2"></i> Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-400 mb-2">
              <i className="fas fa-info-circle mr-2"></i> About Us
            </Link>
            <Link
              to="/multi-service"
              className="text-white hover:text-gray-400 mb-2"
            >
              <i className="fas fa-cogs mr-2"></i> Services
            </Link>
            <Link
              to="/our-work"
              className="text-white hover:text-gray-400 mb-2"
            >
              <i className="fas fa-blog mr-2"></i> Blogs
            </Link>

            <Link to="/contact" className="text-white hover:text-gray-400 mb-2">
              <i className="fas fa-envelope mr-2"></i> Contact Us
            </Link>
          </div>
          <div className="flex flex-col col-span-1 lg:col-span-1">
            <p className="text-lg font-semibold mb-4">Services</p>
            <Link
              to="/artificial-intelligence"
              className="text-white hover:text-gray-400 mb-2"
            >
              Artificial Intelligence
            </Link>
            <Link
              to="/web-development"
              className="text-white hover:text-gray-400 mb-2"
            >
              Web Application Development
            </Link>
            <Link
              to="/mobile-application-development"
              className="text-white hover:text-gray-400 mb-2"
            >
              Mobile Application Development
            </Link>
            <Link
              to="/ux-ui-design"
              className="text-white hover:text-gray-400 mb-2"
            >
              UI/UX Designing
            </Link>
            <Link
              to="/digital-marketing"
              className="text-white hover:text-gray-400 mb-2"
            >
              Digital Marketing
            </Link>
            <Link
              to="/ERP-Services"
              className="text-white hover:text-gray-400 mb-2"
            >
              ERP Services
            </Link>
            <Link
              to="/mvp-development"
              className="text-white hover:text-gray-400 mb-2"
            >
              MVP Development
            </Link>
            <Link
              to="/saas-development"
              className="text-white hover:text-gray-400 mb-2"
            >
              SaaS Development
            </Link>
            <Link
              to="/wordpress"
              className="text-white hover:text-gray-400 mb-2"
            >
              Wordpress Development
            </Link>
          </div>

          <div className="flex flex-col col-span-1 lg:col-span-1">
            <p className="text-lg font-semibold mb-4">Company Info</p>
            <Link to="/about" className="text-white hover:text-gray-400 mb-2">
              About Us
            </Link>
            <Link
              to="/career-with-us"
              className="text-white hover:text-gray-400 mb-2"
            >
              Careers
            </Link>
            <Link to="/about" className="text-white hover:text-gray-400 mb-2">
              FAQ
            </Link>
            <Link to="/about" className="text-white hover:text-gray-400 mb-2">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-400 mb-2">
              Support
            </Link>
            <Link to="/about" className="text-white hover:text-gray-400 mb-2">
              E-commerce Business
            </Link>
          </div>

          <div className="flex flex-col col-span-1 lg:col-span-1">
            <p className="text-lg font-semibold mb-4">Contact</p>
            <div className="flex items-start mb-4">
              <i className="fas  fa-map-marker-alt mr-2"></i>
              <p>
                B-405 Anmol Space Baikunth Dham,
                <br /> Khajrana Main Road Indore 452018
              </p>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="mr-3 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500">Sales Enquiries</p>
                  <p className="text-sm font-medium text-gray-300">
                    +91 9981866409
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <FaPhoneAlt className="mr-3 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">HR Enquiries</p>
                  <p className="text-sm font-medium text-gray-300">
                    +91 8827211560
                  </p>
                </div>
              </div>
            </div>

            <div className="flex   items-start ">
              <div>
                <i className="fas fa-envelope mr-2"></i>
              </div>

              <div>
                <p>info@bellwayinfotech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>© 2024 All rights reserved by Bellway Infotech</p>
      </div>
    </div>
  );
}

export default Footer;
