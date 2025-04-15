import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

// Your testimonials data
import couponcounter from "../assets/Testimonials/couponcounter.png";
import goconnect from "../assets/Testimonials/goconnect.png";
import lln from "../assets/Testimonials/lln.png";
import mazamunch from "../assets/Testimonials/mazamunch.png";
import truelymatch from "../assets/Testimonials/truelymatch.png";
import oneappplus from "../assets/Testimonials/oneappplus.png";
import brobo from "../assets/Testimonials/brobo.png";
import desigro from "../assets/Testimonials/desigro.png";
import shreejyotish from "../assets/Testimonials/shreejyotish.png";
import dcart from "../assets/Testimonials/dcart.png";
import yml from "../assets/Testimonials/yml.png";
import onlinestoreweb from "../assets/Testimonials/onlinestoreweb.png";
import Instantcarfixlogo from "../assets/Testimonials/Instantcarfixlogo.png";
import cashbackcouponlogo from "../assets/Testimonials/cashbackcouponlogo.png";


const boxes = [
  {
    id: 1,
    text: `"Choosing Bellway Infotech was the best decision we made for our digital transformation journey. Their team didn’t just act as a service provider, but as strategic partners who deeply understood the essence of our business. Every feature they suggested and every solution they implemented was designed with both precision and future scalability in mind. Their proactive communication, attention to detail, and commitment to deadlines ensured that our project stayed on track without any compromise on quality. Beyond development, their continuous post-launch support has been nothing short of exceptional. I am beyond impressed by their professionalism and innovative mindset, and would gladly recommend them to any forward-thinking business."`,
    image: couponcounter,
    name: "Abhilash D",
    position: "( Founder, E-CouponCounter )",
  },
  {
    id: 2,
    text: `"Collaborating with Bellway Infotech has been an eye-opening experience that has transformed the way we perceive digital solutions. Their ability to translate complex challenges into intuitive, scalable, and efficient systems left us genuinely impressed. They were deeply involved in every stage of the process — from ideation to deployment — and their technical recommendations always aligned perfectly with our long-term business objectives. Our entire project journey felt seamless due to their proactive approach and structured communication. The team is always available to tackle queries and resolve technical roadblocks in record time. Their delivery exceeded expectations and has set a new benchmark for us."`,
    image: goconnect,
    name: "Senthil Nathan",
    position: "( Founder, Go Connect )",
  },
  {
    id: 3,
    text: `"The level of service, dedication, and innovation Bellway Infotech delivered during our collaboration was nothing short of outstanding. From the very beginning, they invested time in understanding the intricacies of our business model and worked tirelessly to build a custom solution that addressed both present and future challenges. Their technical knowledge, creative problem-solving, and commitment to user experience helped us achieve new heights in customer engagement. The team always maintained a solution-first attitude, and their transparent communication allowed us to remain confident and informed throughout the development journey. I consider them more of a long-term tech partner than just a vendor."`,
    image: lln,
    name: "Archit Yajnik",
    position: "( Founder, LLN )",
  },
  {
    id: 4,
    text: `"Working with Bellway Infotech was one of the smoothest and most professional experiences we’ve had in the tech industry. From the first meeting, their strategic thinking and deep market knowledge were evident. The team provided us with actionable insights, creative concepts, and robust technical solutions that brought clarity to even the most complex development phases. Their design and development teams collaborated closely with us and treated our project as if it were their own. Every deliverable was on time, well-documented, and aligned perfectly with our expectations. They’re not just service providers; they are committed growth enablers for any business."`,
    image: mazamunch,
    name: "Anish",
    position: "( Founder, Maaza Munch )",
  },
  {
    id: 5,
    text: `"Customer support has become the defining factor for us when choosing digital partners, and Bellway Infotech raised the bar to a level I never imagined possible. Right from onboarding to resolving even the smallest technical issues, their team treated us with respect, urgency, and genuine care. Every concern we raised was addressed in minutes, and their well-structured communication made the entire process efficient and stress-free. It’s rare to find a company that values its customers beyond the initial contract. Their post-delivery support was equally impressive and made us feel like more than just clients; we felt like true collaborators."`,
    image: truelymatch,
    name: "Vipul Singh",
    position: "( Owner, Truely Match )",
  },
  {
    id: 6,
    text: `"Our experience with Bellway Infotech was more than just a development project; it was a full-fledged business evolution. Their team not only helped us conceptualize and launch a scalable digital ecosystem but also provided us with a strategic roadmap that ensured our seamless expansion across global markets. Their focus on quality, performance optimization, and user experience allowed us to confidently deploy our product in India, the USA, and Australia. Their post-launch support team continues to impress us with rapid problem-solving and an honest commitment to our growth. Bellway isn’t just a tech firm, they’re a reliable growth engine."`,
    image: oneappplus,
    name: "Gnanaprakash A",
    position: "( Founder, OneAppPlus )",
  },
  {
    id: 7,
    text: `"Partnering with Bellway Infotech allowed us to reimagine the way we operate internally and externally. Their approach to identifying operational gaps and recommending precise, efficient workflows was eye-opening. The solutions they designed were both practical and future-proof, leading to measurable gains in productivity and smoother collaboration between departments. Their technical competence, combined with a deep understanding of modern business challenges, made them the perfect technology partner. Working with them felt like working with a dedicated in-house tech team, not an external agency. Their value goes far beyond coding — it’s strategic thinking, empathy, and sharp execution."`,
    image: brobo,
    name: "Mohammed Wasee",
    position: "( Founder, Brobo )",
  },
  {
    id: 8,
    text: `"We had heard high praise for Bellway Infotech’s technical support services, and the experience lived up to every word. Their team was always available when we needed guidance or troubleshooting, often solving our concerns before they even escalated. Their well-structured support system ensured zero downtime, keeping our business running smoothly and efficiently. They take ownership of your problems as if they were their own and always provide solutions backed by deep technical insight. Their dedication to client satisfaction is the primary reason we look forward to a long-term partnership with Bellway Infotech."`,
    image: desigro,
    name: "Viren Patil",
    position: "( Founder, DesiGro )",
  },
  {
    id: 9,
    text: `"Bellway Infotech played a crucial role in enhancing the efficiency of our operational workflows. Their solutions helped us eliminate redundant steps, automate repetitive tasks, and unlock new levels of productivity. What stood out to us the most was their genuine interest in solving our core business problems, not just selling services. Their team was highly professional, accessible, and transparent at every stage of the project. The partnership has been incredibly rewarding, and we look forward to collaborating with them on future digital initiatives that continue to drive meaningful business results."`,
    image: shreejyotish,
    name: "Ashish Sharma",
    position: "( Founder, Shri Jyotish )",
  },
  {
    id: 10,
    text: `"Bellway Infotech completely reshaped the way we manage and monitor our business operations. Their seamless integrations and user-friendly dashboards offered immediate clarity and measurable impact. Their team was involved in every phase of development, from refining our initial concepts to rigorous testing and smooth rollout. Their ability to handle feedback and deliver revisions quickly reflects their commitment to perfection and client satisfaction. Our partnership has grown into a trusted relationship built on reliability, innovation, and mutual success. We confidently recommend Bellway to businesses that expect nothing but the best."`,
    image: dcart,
    name: "Afsal PY",
    position: "( Founder, Dcart )",
  },
];




const Testimonials = ({
  heading = "Stories From Our Clients",
  data = boxes,
}) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + data.length) % data.length);

  const slideVariants = {
    initial: { opacity: 0, x: 100, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -100, scale: 0.95, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full px-2 lg:px-20  min-h-screen flex flex-col items-center justify-center bg-zinc-100 py-10">
      <motion.div
        className="text-left "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl lg:text-4xl font-semibold text-center mb-20">
          {heading}
        </h1>
      </motion.div>

      {data.length > 0 ? (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8  h-full">
          {/* Left - Testimonial (75%) */}
          <div className="w-full lg:w-3/4 flex justify-start items-center  h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white rounded-lg p-6 h-3/4   shadow-md hover:shadow-xl w-full  flex flex-col items-center lg:items-start "
              >
                <img
                  src={data[current]?.image}
                  alt={data[current]?.name}
                  className="w-40 h-40 object-contain object-center "
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {data[current]?.name}
                </h3>
                <p className="text-md text-gray-600 font-semibold">
                  {data[current]?.position}
                </p>
                <p className="text-md text-gray-500 mt-6">
                  {data[current]?.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right - Buttons (25%) */}
          <div className="w-full lg:w-1/4 flex lg:flex-col flex-row gap-4 justify-center items-center lg:items-center ">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 rounded-full bg-[#D82C2C] text-zinc-100 flex items-center justify-center shadow hover:bg-red-700 transition-all duration-500"
            >
              <HiArrowNarrowLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 rounded-full bg-[#D82C2C] text-zinc-100 flex items-center justify-center shadow hover:bg-red-700 transition-all duration-500"
            >
              <HiArrowNarrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      ) : (
        <p className="text-left text-gray-500 py-10">
          No testimonials available at the moment.
        </p>
      )}
    </div>
  );
};

export default Testimonials;