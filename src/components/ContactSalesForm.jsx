import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

const servicesList = [
  "Web Design & Development",
  "UI/UX Design",
  "Mobile App Development",
  "Artificial Intelligence",
  "Custom Software Development",
  "SEO",
];

export default function ContactSalesForm() {
  const [FullName, setFullName] = useState("");
  const [City, setCity] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [requirements, setRequirements] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [capVal, setCapVal] = useState(null);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedServices(
      checked
        ? [...selectedServices, value]
        : selectedServices.filter((s) => s !== value)
    );
  };

  const handelContactsale = async (e) => {
    e.preventDefault();

    const formData = {
      full_name: FullName,
      city: City,
      email: Email,
      phone_no: `${countryCode}${ContactNumber}`,
      service_of_interest: selectedServices,
      message: requirements,
    };

    try {
      await axios.post(
        "https://admin.bellwayinfotech.com/api/admin/contact",
        formData
      );

      Swal.fire("Success", "Form submitted successfully!", "success");

      setFullName("");
      setCity("");
      setEmail("");
      setContactNumber("");
      setRequirements("");
      setSelectedServices([]);
      setCapVal(null);
    } catch (error) {
      Swal.fire("Error", "Failed to submit the form.", "error");
    }
  };

  return (
    <motion.form
      onSubmit={handelContactsale}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" mx-auto p-8 bg-white rounded-2xl shadow-xl space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold text-center text-[#d82c2c]"
      >
        Contact With Our Sales Team
      </motion.h2>

      {/* Name and City */}
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            placeholder="Enter you name"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            name="full_name"
          />
        </motion.div>
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">City *</label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            placeholder="Enter city"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            required
            name="city"
          />
        </motion.div>
      </div>

      {/* Email and Phone */}
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">Email *</label>
          <input
            type="email"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-red-600"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
          />
        </motion.div>
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">Phone *</label>
          <div className="flex mt-2 ">
            <select
              className="bg-gray-100 outline-none rounded-l-xl px-3 py-3"
              onChange={(e) => setCountryCode(e.target.value)}
              value={countryCode}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+69">+69</option>
            </select>
            <input
              type="number"
              className="w-full px-4 py-3 bg-gray-100 rounded-r-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
              value={ContactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
              name="phone_no"
            />
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          Services of Interest *
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {servicesList.map((service, index) => (
            <motion.label
              key={service}
              className="flex items-center gap-2 p-3 bg-gray-100 rounded-xl cursor-pointer"
              whileHover={{ scale: 1.01 }}
              transition={{ delay: index * 0.05 }}
            >
              <input
                type="checkbox"
                value={service}
                onChange={handleCheckboxChange}
                checked={selectedServices.includes(service)}
                className="accent-red-600"
              />
              <span>{service}</span>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Requirements + CAPTCHA and Submit Side-by-Side */}
      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="flex flex-col md:flex-row gap-6 mt-6"
      >
        {/* Left: Textarea */}
        <div className="w-full md:w-1/2">
          <label className="text-sm font-semibold text-gray-700">
            Your Requirements *
          </label>
          <motion.textarea
            rows="5"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c] resize-none"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
            placeholder="Please describe your project or requirement..."
            name="message"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {/* Right: CAPTCHA  */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <ReCAPTCHA
            sitekey="6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D"
            onChange={(val) => setCapVal(val)}
          />
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        type="submit"
        disabled={!capVal}
        className="bg-[#d82c2c] hover:bg-red-600 text-white text-lg font-semibold px-8 py-3 mx-auto block rounded-full shadow-lg transition duration-300"
      >
        Contact Sales
      </motion.button>
    </motion.form>
  );
}
