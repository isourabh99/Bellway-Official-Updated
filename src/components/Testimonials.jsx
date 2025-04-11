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
    text: `"Exceptional service delivery, coupled with their forward-thinking and innovative digital solutions, has truly propelled our business forward. Their team’s dedication to understanding our goals and executing with precision is unmatched. Highly recommended for their professionalism and consistent delivery of high-quality results!"`,
    image: couponcounter,
    name: "Abhilash D",
    position: "( Founder, E-CouponCounter )",
  },
  {
    id: 2,
    text: `"Bellway Infotech has been instrumental in taking our operations to the next level. I highly recommend tapping into their unparalleled expertise and cutting-edge technological solutions for any business striving to stay competitive and grow sustainably in today’s digital-first environment."`,
    image: goconnect,
    name: "Senthil Nathan",
    position: "( Founder, Go Connect )",
  },
  {
    id: 3,
    text: `"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success. They go above and beyond to ensure every detail is perfect, and that has made all the difference in our business transformation."`,
    image: lln,
    name: "Archit Yajnik",
    position: "( Founder, LLN )",
  },
  {
    id: 4,
    text: `"From day one, Bellway Infotech demonstrated an in-depth understanding of our project requirements. Their strategic approach, creative thinking, and technical prowess have helped us execute our vision flawlessly. Their exceptional service delivery and innovative mindset make them an invaluable technology partner."`,
    image: mazamunch,
    name: "Anish",
    position: "( Founder, Maaza Munch )",
  },
  {
    id: 5,
    text: `"What stood out the most was their exceptional customer support. They resolved my technical concerns within minutes, and the entire process was smooth and hassle-free. I felt truly valued as a customer, and that’s a rare experience in today’s digital service world. I’ll definitely be a returning customer!"`,
    image: truelymatch,
    name: "Vipul Singh",
    position: "( Owner, Truely Match )",
  },
  {
    id: 6,
    text: `"If you are looking to advance your business with cutting-edge digital solutions, this is the team to trust. Bellway Infotech helped us expand into new markets by building scalable digital platforms that serve clients in India, USA, and Australia. Their commitment to excellence is evident in every step of their process."`,
    image: oneappplus,
    name: "Gnanaprakash A",
    position: "( Founder, OneAppPlus )",
  },
  {
    id: 7,
    text: `"The organizational tools and workflow enhancements they provided have made a tangible difference in how we manage operations. Bellway Infotech came highly recommended for our website and app development needs, and they absolutely delivered. We’re already seeing increased user engagement and smoother internal coordination."`,
    image: brobo,
    name: "Mohammed Wasee",
    position: "( Founder, Brobo )",
  },
  {
    id: 8,
    text: `"Their technical support is nothing short of world-class. Any time we faced a challenge or question, their team was available with quick, clear, and effective solutions. Bellway Infotech is more than just a vendor—they are a reliable partner who genuinely cares about our success."`,
    image: desigro,
    name: "Viren Patil",
    position: "( Founder, DesiGro )",
  },
  {
    id: 9,
    text: `"The Bellway support team is incredible—responsive, knowledgeable, and committed to solving issues efficiently. With their help, we’ve streamlined operations and significantly improved our overall productivity. I recommend them without hesitation to any company seeking operational excellence."`,
    image: shreejyotish,
    name: "Ashish Sharma",
    position: "( Founder, Shri Jyotish )",
  },
  {
    id: 10,
    text: `"Their seamless integration, exceptional features, and user-friendly interface have completely transformed the way we manage our digital workflows. On top of that, their customer service is outstanding. We’ve experienced enhanced performance and reliability ever since partnering with Bellway Infotech."`,
    image: dcart,
    name: "Afsal PY",
    position: "( Founder, Dcart )",
  },
  {
    id: 11,
    text: `"The software solutions provided by Bellway Infotech have helped us maintain better control over our time and projects. From day one, their team understood our unique challenges and delivered tailored solutions that drive real results. Their insights have been crucial to our digital growth."`,
    image: yml,
    name: "Yashua Group of Companies",
    position: "( Founder, YML )",
  },
  {
    id: 12,
    text: `"I’m thoroughly impressed by their mobile app development skills. They took our ideas, polished them, and delivered a final product that is not only visually stunning but also incredibly functional. Their team maintained clear and effective communication throughout the development process."`,
    image: onlinestoreweb,
    name: "Vageesh Kumar BC",
    position: "( Founder, OnlineStoreWeb )",
  },
  {
    id: 13,
    text: `"Managing our mechanic operations has never been easier thanks to the Instant Car Fix Mechanic app developed by Bellway. The app enables real-time job assignments, smart inventory pickup, and seamless communication. It’s revolutionized the way our business functions on a day-to-day basis."`,
    image: Instantcarfixlogo,
    name: "Rajeev Gupta",
    position: "( Founder, InstantCar Fix )",
  },
  {
    id: 14,
    text: `"Our journey with the CashbackCoupon platform has been remarkable. The backend tools are intuitive, the interface is user-friendly, and our customer engagement metrics have improved dramatically. Bellway Infotech built a robust system that helps us stay ahead in the competitive e-commerce landscape."`,
    image: cashbackcouponlogo,
    name: "Mr. Ajay Singh",
    position: "( Founder, cashbackcoupon.in )",
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
    <div className="w-full px-2 md:px-20  h-[90vh] bg-zinc-100 py-10">
      <motion.div
        className="text-left "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-center mb-20">
          {heading}
        </h1>
      </motion.div>

      {data.length > 0 ? (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 ">
          {/* Left - Testimonial (75%) */}
          <div className="w-full md:w-3/4 flex justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-white rounded-lg p-6  shadow-md hover:shadow-xl w-full max-w-3xl flex flex-col items-center md:items-start "
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
          <div className="w-full md:w-1/4 flex md:flex-col flex-row gap-4 justify-center items-center md:items-center mt-8 md:mt-0">
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