// components/Loader.jsx
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottieloader.json"; // Your downloaded Lottie JSON

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default Loader;
