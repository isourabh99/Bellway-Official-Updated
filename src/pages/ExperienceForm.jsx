import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaMoneyCheckAlt,
  FaClock,
  FaBriefcase,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaStickyNote,
} from "react-icons/fa";
import axios from "axios";

const ExperienceForm = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    current_location: "",
    current_ctc: "",
    notice_period: "",
    total_experience: "",
    resume_link: "",
    selected_role: "",
    cover_letter: "",
  });

  const scriptUrl = "https://admin.bellwayinfotech.com/api/admin/experiences";
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(scriptUrl, formData);
      setSubmit(true);
    } catch (error) {
      console.error("Error submitting the form:", error);
      if (error.response) {
        alert(`Error: ${error.response.data.message || "Server Error"}`);
      } else if (error.request) {
        alert("No response from server. Please try again later.");
      } else {
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-end items-center w-full bg-black">
      <div className="w-full bg-zinc-950 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-zinc-800 text-white">
        <h2 className="text-3xl font-semibold mb-6 text-white text-center">
          Apply as an Experienced
        </h2>

        {submit ? (
          <div className="bg-white/90 backdrop-blur-md rounded-md p-8 text-black text-center space-y-4">
            <iframe
              src="https://lottie.host/embed/044ba384-905c-4b75-8596-54c113df19f1/pYuAhzDInA.json"
              title="Success Animation"
              className="w-40 h-40 mx-auto"
            ></iframe>
            <h3 className="text-2xl font-semibold">Thank You!</h3>
            <p>Your Details Have Been Successfully Submitted.</p>
            <Link to="/">
              <button className="bg-gradient-to-r from-[#D82C2C] to-red-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-red-700/50 transition-all">
                Home
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit2} ref={formRef} className="space-y-5 ">
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaUser className="text-[#D82C2C]" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaEnvelope className="text-[#D82C2C]" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
            </div>

            {/* Phone & Location */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaPhone className="text-[#D82C2C]" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaLocationArrow className="text-[#D82C2C]" /> Current
                  Location
                </label>
                <input
                  type="text"
                  name="current_location"
                  value={formData.current_location}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
            </div>

            {/* CTC & Notice */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaMoneyCheckAlt className="text-[#D82C2C]" /> Current CTC
                </label>
                <input
                  type="text"
                  name="current_ctc"
                  value={formData.current_ctc}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaClock className="text-[#D82C2C]" /> Notice Period
                </label>
                <input
                  type="text"
                  name="notice_period"
                  value={formData.notice_period}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
            </div>

            {/* Experience & Resume */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaBriefcase className="text-[#D82C2C]" /> Total Experience
                </label>
                <input
                  type="text"
                  name="total_experience"
                  value={formData.total_experience}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <FaFileAlt className="text-[#D82C2C]" /> Resume Link
                </label>
                <input
                  type="text"
                  name="resume_link"
                  value={formData.resume_link}
                  onChange={handleChange}
                  required
                  className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
                />
              </div>
            </div>

            {/* Cover Letter */}
            <div className="flex flex-col">
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <FaStickyNote className="text-[#D82C2C]" /> Cover Letter
              </label>
              <textarea
                name="cover_letter"
                value={formData.cover_letter}
                onChange={handleChange}
                rows="2"
                required
                className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-[#D82C2C] text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-[#D82C2C] text-white font-semibold tracking-wide shadow-lg hover:bg-red-700 transition-all"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        )}  
      </div>
    </div>
  );
};

export default ExperienceForm;
