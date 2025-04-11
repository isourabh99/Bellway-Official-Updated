import React from "react";
import Header from "../components/Header";
import ERP from "../assets/ERP-services.png";
import { motion } from "framer-motion";
import {
  FaUsersCog,
  FaPeopleArrows,
  FaCogs,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";
import ErpOfferings from "../components/ErpOfferings";
import Faq from "../components/Faq";
import erpfaq from "../data/erpfaq";
import { Helmet } from "react-helmet";


const erpData = [
  {
    title: "Customer Relationship Management (CRM)",
    desc: "CRM is a strategic approach that focuses on managing and optimizing a company's interactions with current and potential customers. It streamlines sales, marketing, and customer service, enhancing customer satisfaction and business growth.",
    icon: <FaPeopleArrows size={50} className="text-cyan-400 animate-pulse" />,
    color: "bg-cyan-100",
    fact: "Companies that use CRM see sales increase by up to 29%.",
    image: ERP,
  },
  {
    title: "Human Resources Management (HRM)",
    desc: "HRM focuses on recruiting, managing, and nurturing the workforce. It includes talent acquisition, performance evaluation, payroll, and compliance to boost productivity and foster a positive work environment.",
    icon: <FaUsersCog size={50} className="text-pink-400 animate-wiggle" />,
    color: "bg-pink-100",
    fact: "HR automation can reduce HR processing time by over 40%.",
    image: ERP,
  },
  {
    title: "Supply Chain Management (SCM)",
    desc: "SCM oversees the movement of goods, services, and information from raw materials to end consumers. It boosts efficiency and customer satisfaction by optimizing procurement, logistics, and inventory control.",
    icon: <FaCogs size={50} className="text-lime-400 animate-spin-slow" />,
    color: "bg-lime-100",
    fact: "Efficient SCM can reduce company costs by 20%.",
    image: ERP,
  },
  {
    title: "Mobile ERP Solutions",
    desc: "Mobile ERP enables real-time access to ERP systems from mobile devices. It supports functions like inventory management, financial reporting, and HR on-the-go, enhancing decision-making and productivity.",
    icon: <FaMobileAlt size={50} className="text-yellow-400 animate-bounce" />,
    color: "bg-yellow-100",
    fact: "Mobile ERP adoption leads to 23% faster decision-making.",
    image: ERP,
  },
  {
    title: "Financial Management",
    desc: "Financial Management involves planning, directing, and controlling financial activities. It includes budgeting, forecasting, managing ledgers, assets, and generating accurate financial reports for better decision-making.",
    icon: <FaChartLine size={50} className="text-teal-400 animate-pulse" />,
    color: "bg-teal-100",
    fact: "Integrated financial systems improve reporting accuracy by 30%.",
    image: ERP,
  },
];

const ErpServices = () => {
  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH - ERP Services | Service</title>
        <meta
          name="description"
          content="At Bellway Infotech, an ERP services strategy is essential for modern businesses to innovate, streamline operations, and enhance customer experiences effectively."
        />
        <meta
          name="keywords"
          content="ERP services, Bellway Infotech ERP, enterprise resource planning, modern ERP solutions, business solutions, streamline operations, ERP for business, customer experience enhancement, ERP software development, cloud-based ERP, ERP system integration, ERP implementation, ERP solutions provider, ERP consulting, ERP deployment, ERP software for business, customized ERP systems, ERP software companies, enterprise software solutions, supply chain management ERP, HR management ERP, financial management ERP, inventory management ERP, ERP for manufacturing, ERP for retail, cloud ERP solutions, ERP automation, enterprise resource planning software, ERP systems for small business, business management ERP"
        />
      </Helmet>

      <Header
        title="ERP Service"
        para1="At Bellway Infotech, our ERP services are designed to streamline your business operations, enhance productivity, and drive data-driven decision-making. We provide comprehensive ERP solutions that centralize your data and integrate key business processes, including finance, human resources, inventory, and customer relationship management. Our team analyzes your unique business needs to deliver a tailored ERP system that scales with your growth."
        mediaSrc={ERP}
      />

      <div className="w-full min-h-screen bg-zinc-100 py-16 px-4 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold mb-12 text-center "
        >
          Optimize Your Manufacturing Processes with Our Advanced ERP Solutions
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {erpData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.color} rounded-3xl p-6 transition-transform hover:scale-105 duration-300 shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  {item.title}
                </h3>
              </div>
              <p className="text-black/90 text-sm md:text-base leading-relaxed mb-4">
                {item.desc}
              </p>
              <motion.div
                className="text-black bg-white/10 rounded-lg px-4 py-2 text-sm italic"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.3 }}
              >
                💡 <span className="font-medium">Did you know?</span>{" "}
                {item.fact}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Creative ERP Time line Section */}
        <div className="mt-20 ">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold  text-center mb-12"
          >
            ERP Implementation Journey
          </motion.h3>

          <div className="relative border-l-4 border-black/20 pl-8 space-y-14">
            {[
              "Business Needs Assessment",
              "ERP System Selection",
              "Customization & Integration",
              "User Training & Change Management",
              "Deployment & Testing",
              "Post-Go-Live Support",
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg relative"
              >
                <div className="absolute left-[-2.3rem] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-pink-500 border-4 border-black"></div>
                <h4 className="font-semibold text-lg mb-2">{step}</h4>
                <p className="text-black/70 text-sm">
                  {`This phase ensures successful handling of: ${step.toLowerCase()}. We work closely with your teams to align strategies and tools.`}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ErpOfferings />
      <Faq
        data={erpfaq}
        title="Frequently Asked Questions"
        accentColor="#D82C2C"
      />
    </>
  );
};

export default ErpServices;
