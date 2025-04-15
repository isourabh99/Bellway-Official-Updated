import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function CaptchaToggle() {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl ">
      {!showCaptcha ? (
        <button
          onClick={() => setShowCaptcha(true)}
          className="px-4 py-2 bg-transparent border-2 border-black text-black cursor-pointer rounded-full hover:bg-red-700 transition"
        >
          Verify You’re Human
        </button>
        
      ) : (
        <div className="p-4 bg-white rounded-xl shadow-inner">
          <ReCAPTCHA
            sitekey="6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D"
            onChange={(val) => setCaptcha(val)}
          />
        </div>
      )}
    </div>
  );
}

export default CaptchaToggle;
