import { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWorkOutline, MdOutlineCloudUpload } from "react-icons/md";
import LoadingSpinner from "./LoadingSpinner";

const WorkSummaryForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = {
        name: formRef.current.name.value,
        phone_no: formRef.current.phone_no.value,
        email: formRef.current.email.value,
        service: formRef.current.service.value,
        message: formRef.current.message.value,
        resume_link: formRef.current.resume_link.value,
      };

      await axios.post(
        "https://admin.bellwayinfotech.com/api/admin/open-vacancies",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setSubmit(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <div className="mx-auto max-w-3xl p-6 sm:p-10 bg-zinc-900 rounded-3xl shadow-2xl">
      {!submit ? (
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2
            className="text-4xl font-bold text-center text-white"
            variants={inputVariant}
            custom={0}
          >
            🚀 Send Your Work Summary
          </motion.h2>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            {[
              { label: "Name", name: "name", type: "text", custom: 1 },
              { label: "Phone", name: "phone_no", type: "tel", custom: 2 },
            ].map((item, i) => (
              <motion.div
                className="w-full"
                variants={inputVariant}
                custom={item.custom}
                key={i}
              >
                <div className="relative">
                  <input
                    name={item.name}
                    type={item.type}
                    required
                    className="peer w-full border-b-2 border-gray-600 bg-transparent focus:border-red-500 outline-none pt-6 pb-1 px-2 placeholder-transparent text-gray-200"
                    placeholder={item.label}
                  />
                  <label className="absolute left-2 top-1 text-sm text-gray-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
                    {item.label} *
                  </label>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div className="w-full" variants={inputVariant} custom={3}>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  required
                  className="peer w-full border-b-2 border-gray-600 bg-transparent focus:border-red-500 outline-none pt-6 pb-1 px-2 placeholder-transparent text-gray-200"
                  placeholder="Email"
                />
                <label className="absolute left-2 top-1 text-sm text-gray-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm transition-all">
                  Email *
                </label>
              </div>
            </motion.div>

            {/* Service Select */}
            <motion.div className="w-full" variants={inputVariant} custom={4}>
              <label className="block text-sm text-gray-300 mb-2">
                Service *
              </label>
              <div className="relative">
                <select
                  name="service"
                  required
                  className="w-full appearance-none border-b-2 border-gray-600 bg-transparent focus:border-red-500 outline-none py-2 px-2 text-gray-200"
                >
                  <option value="">Choose Service</option>
                  <option value="Developer">Developer</option>
                  <option value="Tester">Tester</option>
                  <option value="Manager">Manager</option>
                  <option value="Designer">Designer</option>
                  <option value="Other">Other</option>
                </select>
                <MdOutlineWorkOutline className="absolute right-2 top-3 text-gray-400" />
              </div>
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={inputVariant} custom={5}>
            <label className="block text-sm text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full border-b-2 border-gray-600 bg-transparent focus:border-red-500 outline-none px-2 py-2 text-gray-200"
              placeholder="Tell us why you’re a great fit..."
            />
          </motion.div>

          {/* Resume Link */}
          <motion.div variants={inputVariant} custom={6}>
            <label className="block text-sm text-gray-300 mb-2">
              Resume Link *
            </label>
            <div className="relative">
              <input
                type="text"
                name="resume_link"
                required
                className="w-full border-b-2 border-gray-600 bg-transparent focus:border-red-500 outline-none py-2 pl-10 pr-2 text-gray-200"
                placeholder="e.g. Google Drive, Dropbox, etc."
              />
              <MdOutlineCloudUpload className="absolute left-2 top-3 text-gray-400" />
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div
            className="text-center"
            variants={inputVariant}
            custom={7}
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full md:w-1/2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-lg transition"
              disabled={loading}
            >
              {loading ? (
                <LoadingSpinner />
              ) : (
                <>
                  Submit <FaArrowRight />
                </>
              )}
            </button>
          </motion.div>
        </motion.form>
      ) : (
        <motion.div
          className="text-center py-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            🎉 Application Submitted!
          </h2>
          <p className="text-lg text-gray-300">
            Thank you for submitting your work summary. We’ll get back to you
            soon.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default WorkSummaryForm;
