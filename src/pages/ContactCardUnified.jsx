import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import axios from "axios";
import AnimatedHeading from "../components/AnimatedHeading";
import CaptchaToggle from "../components/CaptchaToggle";

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
};

const servicesList = [
  "Web Design & Development",
  "UI/UX Design",
  "Mobile App Development",
  "Artificial Intelligence",
  "Custom Software Development",
  "SEO",
];

const ContactCardUnified = () => {
  const [showCallForm, setShowCallForm] = useState(false);

  // Shared states
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setbudget] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [selectedServices, setSelectedServices] = useState([]);
  const [captcha, setCaptcha] = useState(null);

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setSelectedServices(
      checked
        ? [...selectedServices, value]
        : selectedServices.filter((s) => s !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = showCallForm
      ? {
          name: fullName,
          city,
          phone_no: `${countryCode}${phone}`,
          date,
          time,
          message,
        }
      : {
          full_name: fullName,
          city,
          email,
          phone_no: `${countryCode}${phone}`,
          service_of_interest: selectedServices,
          budget,
          message,
        };

    const url = showCallForm
      ? "https://admin.bellwayinfotech.com/api/admin/callrequests"
      : "https://admin.bellwayinfotech.com/api/admin/contact";

    try {
      await axios.post(url, data);
      Swal.fire("Success", "Form submitted successfully!", "success");
      setFullName("");
      setCity("");
      setEmail("");
      setPhone("");
      setDate("");
      setTime("");
      setMessage("");
      setbudget("");
      setCountryCode("+91");
      setSelectedServices([]);
      setCaptcha(null);
    } catch (error) {
      Swal.fire("Error", "Failed to submit the form.", "error");
    }
  };

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse min-h-full w-full overflow-hidden shadow-2xl bg-black">
      <motion.div
        variants={fadeSlide}
        initial="hidden"
        animate="visible"
        className="bg-black text-white flex-1 px-2 md:px-20   py-10 md:py-20 min-h-screen"
      >
        <h2 className="text-3xl font-semibold mb-3">🚀 Join Us</h2>
        <p className="text-gray-400 mb-4 max-w-2xl text-sm md:text-base">
          Become a part of our growing tech team and let’s build something
          meaningful together.
        </p>
        <h1 className="text-3xl  font-semibold mb-5 leading-tight tracking-tight">
          Let’s Connect <span className="animate-bounce">🤝</span>
        </h1>
        <p className="text-gray-400 mb-4 text-sm md:text-md ">
          Need help or want to grow your team? We’d love to hear from you and
          help your business scale.
        </p>
        <ul className="space-y-3 mb-6 text-sm md:text-base">
          {[
            "Boost team productivity",
            "Get personalized pricing",
            "Explore use cases",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start text-zinc-200">
              <FiCheck className="text-green-500 mt-1 mr-2 text-" /> {item}
            </li>
          ))}
        </ul>
        <Link
          to="/career-with-us"
          className="group inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-zinc-200 text-zinc-200 hover:bg-zinc-200 hover:text-black transition-all font-semibold mb-4 "
        >
          Join Now{" "}
          <BsArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
        </Link>
        <button
          onClick={() => setShowCallForm(!showCallForm)}
          className="mx-2 md:mx-4 mt-3 inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-zinc-200 text-zinc-200 hover:bg-zinc-200 hover:text-black transition-all font-semibold"
        >
          {showCallForm ? "Back to Contact Sales" : "Get a Call"}
        </button>
        <div className="space-y-8 mt-10 text-sm md:text-base flex flex-wrap justify-between">
          <div>
            <h2 className="text-xl font-bold mb-3 text-[#D82C2C] uppercase tracking-wide">
              Contact Numbers
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#D82C2C] text-lg" />
                <div>
                  <p className="text-zinc-400 text-xs">Sales</p>
                  <p className="font-medium text-zinc-200">+91 9981866409</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-text-zinc-200 text-lg" />
                <div>
                  <p className="text-zinc-400 text-xs">HR</p>
                  <p className="font-medium text-zinc-200">+91 8827211560</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-[#D82C2C] uppercase tracking-wide ">
              Email
            </h2>
            <p className="text-gray-300">info@bellwayinfotech.com</p>
            <p className="text-gray-300">hr@bellwayinfotech.com</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 text-[#D82C2C] uppercase tracking-wide">
              Follow us
            </h2>
            <div className="flex gap-3 mt-2">
              {[
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/bellwayinfotechh/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/bellwayinfotech/",
                  color: "hover:text-pink-400",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/company/bellwayinfotech",
                  color: "hover:text-sky-400",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  className={`p-3 bg-zinc-800 rounded-full shadow-md hover:scale-110 transition-all ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-400 mb-4 max-w-2xl text-sm md:text-base my-4">
          Become a part of our growing tech team and let’s build something
          meaningful together.
        </p>{" "}
        
      </motion.div>

      <div className="flex-2 bg-[#d82c2c] min-h-screen p-2 md:px-20 py-20  md:pr-20">
        <AnimatePresence mode="wait">
          <motion.form
            key={showCallForm ? "call-form" : "sales-form"}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto w-full rounded-2xl space-y-8"
          >
            <AnimatedHeading showCallForm={showCallForm} />

            <div className="w-full space-y-6">
              {/* Top Row: Full Name, City, Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <motion.div
                  className="w-full md:w-1/3"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    required
                    name="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name *"
                    className="w-full p-2 bg-transparent border-b border-black text-black placeholder-black focus:outline-none "
                  />
                </motion.div>
                <motion.div
                  className="w-full md:w-1/3"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    required
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City *"
                    className="w-full p-2 bg-transparent border-b border-black text-black placeholder-black focus:outline-none "
                  />
                </motion.div>
                {/* {showCallForm && ( */}
                  <motion.div
                    className="w-full md:w-1/3"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email *"
                      className="w-full p-2 bg-transparent border-b border-black text-black placeholder-black focus:outline-none "
                    />
                  </motion.div>
                {/* )} */}
              </div>

              {/* Conditional Fields */}
              {showCallForm ? (
                <>
                  {/* Phone Number */}
                  <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
                    <div className="">
                      <div className="w-full" />
                      <div className="flex flex-grow">
                        <select
                          className="flex-shrink-0 bg-transparent border-b border-black text-black focus:outline-none   "
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                        >
                          {/* Comprehensive list of country codes */}
                          <option className="bg-black text-white" value="+1">
                            +1 (USA/Canada)
                          </option>
                          <option className="bg-black text-white" value="+44">
                            +44 (UK)
                          </option>
                          <option className="bg-black text-white" value="+61">
                            +61 (Australia)
                          </option>
                          <option className="bg-black text-white" value="+91">
                            +91 (India)
                          </option>
                          <option className="bg-black text-white" value="+81">
                            +81 (Japan)
                          </option>
                          <option className="bg-black text-white" value="+49">
                            +49 (Germany)
                          </option>
                          <option className="bg-black text-white" value="+33">
                            +33 (France)
                          </option>
                          <option className="bg-black text-white" value="+86">
                            +86 (China)
                          </option>
                          <option className="bg-black text-white" value="+7">
                            +7 (Russia)
                          </option>
                          <option className="bg-black text-white" value="+39">
                            +39 (Italy)
                          </option>
                          <option className="bg-black text-white" value="+34">
                            +34 (Spain)
                          </option>
                          <option className="bg-black text-white" value="+55">
                            +55 (Brazil)
                          </option>
                          <option className="bg-black text-white" value="+27">
                            +27 (South Africa)
                          </option>
                          <option className="bg-black text-white" value="+82">
                            +82 (South Korea)
                          </option>
                          <option className="bg-black text-white" value="+971">
                            +971 (UAE)
                          </option>
                          <option className="bg-black text-white" value="+880">
                            +880 (Bangladesh)
                          </option>
                          <option className="bg-black text-white" value="+92">
                            +92 (Pakistan)
                          </option>
                          <option className="bg-black text-white" value="+94">
                            +94 (Sri Lanka)
                          </option>
                          <option className="bg-black text-white" value="+62">
                            +62 (Indonesia)
                          </option>
                          {/* Add any additional country codes as needed */}
                        </select>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number *"
                          className="flex-grow p-2 bg-transparent border-b border-black text-black placeholder-black focus:outline-none  "
                        />
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      className="w-full md:w-1/2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 bg-transparent border-b border-black text-black focus:outline-none "
                      />
                    </motion.div>
                    <motion.div
                      className="w-full md:w-1/2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-2 bg-transparent border-b border-black text-black focus:outline-none "
                      />
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {/* Sales Form: Budget & Phone */}
                  <div className="flex flex-col md:flex-row gap-6">
                    <motion.div
                      className="w-full md:w-1/2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="text"
                        required
                        value={budget}
                        onChange={(e) => setbudget(e.target.value)}
                        placeholder="Budget *"
                        className="w-full p-2  bg-transparent border-b border-black text-black placeholder-black focus:outline-none "
                      />
                    </motion.div>
                    <motion.div
                      className="w-full md:w-1/2"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <div className="flex">
                        <select
                          className="flex-shrink-0   border-b border-black text-black focus:outline-none "
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                        >
                          <option className="bg-black text-white" value="+1">
                            +1 (USA/Canada)
                          </option>
                          <option className="bg-black text-white" value="+44">
                            +44 (UK)
                          </option>
                          <option className="bg-black text-white" value="+61">
                            +61 (Australia)
                          </option>
                          <option className="bg-black text-white" value="+91">
                            +91 (India)
                          </option>
                          <option className="bg-black text-white" value="+81">
                            +81 (Japan)
                          </option>
                          <option className="bg-black text-white" value="+49">
                            +49 (Germany)
                          </option>
                          <option className="bg-black text-white" value="+33">
                            +33 (France)
                          </option>
                          <option className="bg-black text-white" value="+86">
                            +86 (China)
                          </option>
                          <option className="bg-black text-white" value="+7">
                            +7 (Russia)
                          </option>
                          <option className="bg-black text-white" value="+39">
                            +39 (Italy)
                          </option>
                          <option className="bg-black text-white" value="+34">
                            +34 (Spain)
                          </option>
                          <option className="bg-black text-white" value="+55">
                            +55 (Brazil)
                          </option>
                          <option className="bg-black text-white" value="+27">
                            +27 (South Africa)
                          </option>
                          <option className="bg-black text-white" value="+82">
                            +82 (South Korea)
                          </option>
                          <option className="bg-black text-white" value="+971">
                            +971 (UAE)
                          </option>
                          <option className="bg-black text-white" value="+880">
                            +880 (Bangladesh)
                          </option>
                          <option className="bg-black text-white" value="+92">
                            +92 (Pakistan)
                          </option>
                          <option className="bg-black text-white" value="+94">
                            +94 (Sri Lanka)
                          </option>
                          <option className="bg-black text-white" value="+62">
                            +62 (Indonesia)
                          </option>
                        </select>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone Number *"
                          className="flex-grow p-2 bg-transparent border-b border-black text-black placeholder-black focus:outline-none "
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
              {!showCallForm && (
                <div className="w-full">
                  <input
                    type="text"
                    disabled
                    value="Select Your Areas of Interest"
                    className="w-full text-2xl my-4  bg-transparent  text-black font-semibold focus:outline-none"
                  />
                  <div className="grid  md:grid-cols-3 gap-4 mt-4">
                    {servicesList.map((service, i) => {
                      const isChecked = selectedServices.includes(service);
                      return (
                        <label key={i} className="cursor-pointer select-none ">
                          <input
                            type="checkbox"
                            hidden
                            value={service}
                            checked={isChecked}
                            onChange={handleServiceChange}
                          />
                          <div
                            className={`border-3 rounded-full p-3 text-center transition duration-300 text-xs  min-w-20  ${
                              isChecked
                                ? "bg-black text-[#d82c2c] border-black "
                                : "bg-transparent text-black border-black hover:bg-zinc-900 hover:text-[#d82c2c]"
                            }`}
                          >
                            {service}
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Message */}
              <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
                <input
                  type="text"
                  disabled
                  value="Write your requrements"
                  className="w-full text-2xl my-4  bg-transparent  text-black font-semibold focus:outline-none"
                />
                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message *"
                  className="w-full p-2 bg-transparent border-3 border-black text-black placeholder-black focus:outline-none  rounded-xl"
                />
              </motion.div>

              {/* ReCAPTCHA */}
           <CaptchaToggle/>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              disabled={!captcha}
              type="submit"
              className="bg-black hover:bg-gray-800 text-[#d82c2c] text-lg font-semibold px-8 py-2 mx-auto block rounded-full shadow-lg transition duration-300"
            >
              {showCallForm ? "Request a Call" : "Submit Now"}
            </motion.button>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactCardUnified;
