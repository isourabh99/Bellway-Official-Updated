import { motion } from "framer-motion";
import {
  FaLock,
  FaCodeBranch,
  FaCloud,
  FaTools,
  FaBug,
  FaCogs,
} from "react-icons/fa";

const cards = [
  {
    title: "Secure & Compliant",
    icon: <FaLock size={30} className="text-red-400" />,
    desc: "We implement end-to-end encryption, GDPR/CCPA compliance, and advanced permission systems to secure your SaaS platform.",
    color: "from-red-500 to-zinc-900",
  },
  {
    title: "API Integration Mastery",
    icon: <FaCodeBranch size={30} className="text-yellow-400" />,
    desc: "Seamless integration with third-party tools, CRMs, payment gateways, and internal databases using REST, GraphQL, or Webhooks.",
    color: "from-yellow-500 to-zinc-900",
  },
  {
    title: "Cloud-Native Performance",
    icon: <FaCloud size={30} className="text-blue-400" />,
    desc: "Optimized deployments on AWS, GCP, Azure. Auto-scaling, load balancing, and serverless options included.",
    color: "from-blue-500 to-zinc-900",
  },
  {
    title: "Continuous Optimization",
    icon: <FaTools size={30} className="text-green-400" />,
    desc: "Performance tuning, UX enhancements, feedback loops, and analytics to evolve your SaaS product continuously.",
    color: "from-green-500 to-zinc-900",
  },
  {
    title: "QA & Automated Testing",
    icon: <FaBug size={30} className="text-pink-400" />,
    desc: "CI/CD pipelines integrated with automated unit, integration, and UI testing tools for zero-defect releases.",
    color: "from-pink-500 to-zinc-900",
  },
  {
    title: "Dedicated Support & SLA",
    icon: <FaCogs size={30} className="text-purple-400" />,
    desc: "24/7 proactive monitoring, incident response teams, and priority-based support with defined SLAs.",
    color: "from-purple-500 to-zinc-900",
  },
];

const SaasDev = () => {
  return (
    <section className="bg-zinc-950 text-white py-24 px-6 md:px-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Unlock the Full Power of SaaS Development
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`p-6 rounded-3xl shadow-xl bg-gradient-to-br ${card.color} hover:scale-[1.03] transition-transform duration-300`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-zinc-100 text-sm leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-400 text-lg mb-6 max-w-2xl mx-auto">
          Build, scale, and support your SaaS product with unmatched precision.
          Whether you're launching or scaling, our team delivers.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white font-semibold rounded-full transition duration-300"
        >
          Estimate My SaaS Project
        </a>
      </motion.div>
    </section>
  );
};

export default SaasDev;
