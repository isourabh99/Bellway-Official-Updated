import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ContactSalesForm from "./ContactSalesForm";
import ScheduleCallForm from "./ScheduleCallForm";

export default function FormRapper() {
  const [showCallForm, setShowCallForm] = useState(false);

  return (
    <div className="bg-zinc-100 -mt-10 py-20 px-2 md:px-20">
      <h1 className="text-black text-3xl font-bold text-center mt-3">
        <span className="text-[#d82c2c]">"</span>
        {showCallForm
          ? "Let’s talk—on your time."
          : "Ready to serve you first!"}
        <span className="text-[#d82c2c]">"</span>
      </h1>

      <div className="flex justify-center my-6">
        <button
          className="relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
          onClick={() => setShowCallForm(!showCallForm)}
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  showCallForm
                    ? "M14 5l-7 7m0 0l7 7m-7-7H3" // Back
                    : "M14 5l7 7m0 0l-7 7m7-7H3" // Get a call
                }
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">
            {showCallForm ? "Back" : "Get a call"}
          </span>
          <span className="relative invisible">
            {showCallForm ? "Back" : "Get a call"}
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {showCallForm ? (
          <ScheduleCallForm key="call" />
        ) : (
          <ContactSalesForm key="sales" />
        )}
      </AnimatePresence>
    </div>
  );
}
