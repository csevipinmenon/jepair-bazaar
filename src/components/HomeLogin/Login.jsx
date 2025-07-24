import React, { useState } from "react";
import Emailotp from "../msg/Emailotp";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handlerError, handlerSuccess } from "../../utils.js";
import ReCAPTCHA from "react-google-recaptcha";
import { TbRuler } from "react-icons/tb";

function Login() {
  const [reCaptchaVerified, setRecaptchaVerified] = useState(false); //for recaptcha
  function recaptchFunction(value) {
    console.log("Captcha value:", value);
    setRecaptchaVerified(true);
  }

  const [showEmailotp, setshowEmailotp] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const loginHomeFunction = async (e) => {
    e.preventDefault();

    const { name, phone, email, message } = loginInfo;
    if (!name || !phone || !email || !message) {
      return handlerError("Please fill all fields");
    }
    try {
      setLoading(true); // Start loader
      const url = "https://jepairbackend.onrender.com/jepairbazaar/enquiry";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      console.log(result);

      const { message, success, error } = result;
      if (success) {
        setshowEmailotp((prev) => !prev);
        loginInfo.name = "";
        loginInfo.phone = "";
        loginInfo.email = "";
        loginInfo.message = "";
      } else if (error?.details) {
        const details = error.details[0].message;
        handlerError(details);
      } else {
        handlerError(message || "something went wrong");
      }
    } catch (error) {
      handlerError("Network error or server unavailable");
    } finally {
      setLoading(false); // Stop loader
    }
  };
  return (
    <>
      {showEmailotp && <Emailotp />}
      <div className="absolute sm:right-3 top-80 lg:right-20 lg:top-36 z-20 bg-white shadow-2xl rounded-2xl overflow-hidden ">
        <div className="mt-3">
          <form className="py-5 px-2  sm:px-5" onSubmit={loginHomeFunction}>
            <div className=" ">
              <label htmlFor="name" className="block font-bold  ">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                name="name"
                value={loginInfo.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-orange-400  px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="phn" className="block font-bold">
                Phone Number
              </label>
              <input
                type="text"
                id="phn"
                required
                name="phone"
                value={loginInfo.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-orange-400 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <input
                type="emailr"
                id="email"
                required
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-orange-400 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="mt-3 ">
              <label htmlFor="msg" className="block font-bold">
                Message
              </label>
              <textarea
                id="msg"
                required
                name="message"
                value={loginInfo.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="w-full border border-orange-400 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              ></textarea>
            </div>
            <ReCAPTCHA className="mt-2 "
              sitekey="6Lc5DY4rAAAAAKIGK9ge6-jwQyJ_oZDr0IlyTp3N"
              onChange={recaptchFunction}
            />
            <div>
              <button
                type="submit"
                disabled={loading || !reCaptchaVerified}
                className=" mt-3 bg-orange-500 inline  py-2 px-40 rounded-xl text-white font-semibold text-lg disabled:cursor-not-allowed hover:bg-blue-500"
              >
                {" "}
                {loading ? (
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Login;
