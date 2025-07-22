import React, { useState } from "react";
import { handlerError, handlerSuccess } from "../../utils.js";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Emailotp() {
  const [showAd, setShowAd] = useState(true);
  const [emailOtpInfo, setEmailOtpInfo] = useState({
    otp: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyEmailOtpInfo = { ...emailOtpInfo };
    copyEmailOtpInfo[name] = value;
    setEmailOtpInfo(copyEmailOtpInfo);
  };

  const handleClose = () => {
    setShowAd(false);
  };

  const verifyotp = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowAd(false);
    }, 5000);

    const { otp } = emailOtpInfo;
    if (!otp) {
      return handlerError("Please fill OTP");
    }
    try {
      setLoading(true); // Start loader
      const url = "https://jepairbackend.onrender.com/jepairbazaar/enquiry/verify";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailOtpInfo),
      });
      const result = await response.json();
      console.log(result);

      const { success, message, error } = result;
      if (success) {
        handlerSuccess(message || "OTP Verification Successfully!");
        alert("Your Enquiry Submitted Sucessfully")
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else if (error?.details) {
        const details = error.details[0].message;
        handlerError(details);
      } else {
        handlerError("Something went wrong in OTP verification");
      }
    } catch (error) {
      handlerError("Network error or Server unavailable");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  if (!showAd) return null;

  return (
    <div className="fixed inset-0  flex justify-center items-start pt-20 z-50 bg-[#415a6e93]">
      <div className="relative animate-slide-down bg-white  py-3 lg:py-6 lg:px-12 px-8 rounded-lg border border-orange-500 shadow-lg w-full max-w-md top-16">
        <h3 className="text-center text-xl text-orange-500  mb-4">
          You're almost there
        </h3>
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            zIndex: 40,
          }}
        >
          <abbr title="cut" className="no-underline">
            ✕
          </abbr>
        </button>
        <form onSubmit={verifyotp}>
          <label
            htmlFor="em"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Enter Email OTP:{" "}
            <span className="text-[#ff4d4d] text-2xl font-bold">*</span>
          </label>
          <input
            type="text"
            id="em"
            required
            name="otp"
            onChange={handleChange}
            value={emailOtpInfo.otp}
            placeholder="Enter your email otp"
            className="w-full py-2 px-4 rounded-xl border border-blue-500 focus:outline-orange-400 mb-4"
          />
          <button
            className="bg-orange-500 py-2 px-8 font-bold text-white rounded-3xl hover:bg-blue-500 block mx-auto"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
              </div>
            ) : (
              "Verify"
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Emailotp;
