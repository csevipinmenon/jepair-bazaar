import React, { useState } from "react";
import { handlerError, handlerSuccess } from "../../utils.js";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Mobileotp({ formData, setMobileotp }) {
  const { user } = useAuth0();
  const [showAd, setShowAd] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showBookLoader, setBookLoader] = useState(false); //for bookin loader
  const [mobileOtpInfo, setMobileOtpInfo] = useState({ otp: "" });
  const navigate = useNavigate();

  console.log(formData.phone);
  console.log(formData);

  const handleClose = () => {
    setMobileotp(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyMobileOtpInfo = { ...mobileOtpInfo };
    copyMobileOtpInfo[name] = value;
    setMobileOtpInfo(copyMobileOtpInfo);
  };

  const verifyotp = async (e) => {
    e.preventDefault();

    const { otp } = mobileOtpInfo;
    if (!otp) {
      return handlerError("Please fill OTP");
    }
    try {
      setLoading(true);
      const url = "https://jepairbackend.onrender.com/jepairbazaar/mobileotp/verify";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...mobileOtpInfo,
          phone: `+91${formData.phone}`,
          email: user?.email,
          name: user?.name,
          service: formData.service,
          date: formData.date,
          address: formData.pincode,
        }),
      });
      setMobileotp(false);
      alert(
        "It may Take time.Don't do anything! Please  stay for Confirm message!"
      );
      const result = await response.json();
      const { success, message, error } = result;
      console.log(result);

      if (success) {
        alert(
          "Your Service is Book! Check  Your email or vist Book section of User.Thank You "
        );

        try {
          const url = "http://localhost:3000/jepairbazaar/order/book";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: formData.phone,
              town: formData.town,
              state: formData.state,
              area: formData.area,
              pincode: formData.pincode,
              service: formData.service,
              date: formData.date,
              time: formData.time,
              message: formData.message,
              name: user?.name,
              email: user?.email,
            }),
          });

          const result = await response.json();
          console.log(result);

          

          setTimeout(() => {
            navigate("/yourbook");
          }, 1000);
        } catch (error) {
          console.log("error", error);
          alert("Network error or Server unavailable");
        }
      } else if (error?.details) {
        const details = error?.details[0].message;
        alert(details);
      } else {
        alert("OTP not verified");
      }
    } catch (error) {
      alert("Network error or Server unavailable");
    } finally {
      setLoading(false);
    }
  };

  if (!setMobileotp) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-start pt-20 z-30 bg-[#415a6e93]">
      <div className="animate-slide-down  relative bg-white py-3 lg:py-6 lg:px-12 px-8 rounded-lg border border-orange-500 shadow-lg w-full max-w-md top-16">
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
            htmlFor="mob"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Enter Mobile OTP:{" "}
            <span className="text-[#ff4d4d] text-2xl font-bold">*</span>
          </label>
          <input
            type="text"
            id="mob"
            placeholder="Enter your mobile otp"
            name="otp"
            onChange={handleChange}
            value={mobileOtpInfo.otp}
            className="w-full py-2 px-4 rounded-xl border border-blue-500 focus:outline-orange-400 mb-4"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-500 py-2 px-8 font-bold text-white rounded-3xl hover:bg-blue-500 block mx-auto"
            onClick={verifyotp}
          >
            {loading ? (
              <div className="flex justify-center ">
                <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
              </div>
            ) : (
              " Verify"
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Mobileotp;
