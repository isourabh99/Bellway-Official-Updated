import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";

export default function ScheduleCallForm() {
  const [fullName, setFullNamee] = useState("");
  const [citycall, setCityCall] = useState("");
  const [call, setCall] = useState("");
  const [callDate, setCallDate] = useState("");
  const [callTime, setCallTime] = useState("");
  const [callMessage, setCallMessage] = useState("");
  const [capVal2, setCapVal2] = useState(null);
  const [countryCode2, setCountryCode2] = useState("+91");

  const handleCallSubmit = async (e) => {
    e.preventDefault();

    const formData2 = {
      name: fullName,
      city: citycall,
      phone_no: `${countryCode2}${call}`,
      date: callDate,
      time: callTime,
      message: callMessage,
    };

    try {
      await axios.post(
        "https://admin.bellwayinfotech.com/api/admin/callrequests",
        formData2
      );

      Swal.fire("Success", "Request submitted!", "success");

      setFullNamee("");
      setCityCall("");
      setCall("");
      setCallDate("");
      setCallTime("");
      setCallMessage("");
      setCapVal2(false);
      setCountryCode2("+91");
    } catch (error) {
      Swal.fire("Error", "Failed to submit request.", "error");
    }
  };

  return (
    <motion.form
      key="call-form"
      onSubmit={handleCallSubmit}
      method="post"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto p-8 bg-white rounded-2xl shadow-xl space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold text-center text-[#d82c2c]"
      >
        Schedule Your call
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Name and City */}
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            placeholder="Enter you name"
            value={fullName}
            onChange={(e) => setFullNamee(e.target.value)}
            required
            name="name"
          />
        </motion.div>

        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">City *</label>
          <input
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            placeholder="Enter city"
            type="text"
            value={citycall}
            onChange={(e) => setCityCall(e.target.value)}
            required
            name="city"
          />
        </motion.div>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col md:flex-row gap-6">
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">
            Phone Number *
          </label>
          <div className="flex mt-2 ">
            <select
              className="bg-gray-100 outline-none rounded-l-xl px-3 py-3"
              value={countryCode2}
              onChange={(e) => setCountryCode2(e.target.value)}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+98">+98 (Iran)</option>
            </select>
            <input
              type="number"
              className="w-full px-4 py-3 bg-gray-100 rounded-r-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
              value={call}
              onChange={(e) => setCall(e.target.value)}
              required
            />
          </div>
        </motion.div>
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">Date *</label>
          <input
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            type="date"
            value={callDate}
            onChange={(e) => setCallDate(e.target.value)}
            required
            name="date"
          />
        </motion.div>
        <motion.div className="w-full" whileFocus={{ scale: 1.02 }}>
          <label className="text-sm font-semibold text-gray-700">Time *</label>
          <input
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c]"
            type="time"
            value={callTime}
            onChange={(e) => setCallTime(e.target.value)}
            required
            name="time"
          />
        </motion.div>
      </div>

      <motion.div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Message */}
        <div className="w-full md:w-1/2">
          <label className="text-sm font-semibold text-gray-700">
            Message *
          </label>
          <motion.textarea
            rows="5"
            className="w-full mt-2 px-4 py-3 bg-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#d82c2c] resize-none"
            value={callMessage}
            onChange={(e) => setCallMessage(e.target.value)}
            required
            name="message"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        {/* Right: CAPTCHA and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
          {/* Right: CAPTCHA and Button */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <ReCAPTCHA
              sitekey="6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D"
              onChange={(val) => setCapVal2(val)}
            />
          </div>
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        disabled={!capVal2}
        className="bg-[#d82c2c] hover:bg-red-600 text-white text-lg font-semibold px-8 py-3 mx-auto block rounded-full shadow-lg transition duration-300"
        type="submit"
      >
        Request a Call
      </motion.button>
    </motion.form>
  );
}
