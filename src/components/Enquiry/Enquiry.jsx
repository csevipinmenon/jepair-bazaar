import React, { useState } from "react";
import Emailotp from "../msg/Emailotp";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handlerError, handlerSuccess } from "../../utils.js";

function Enquiry() {
  const [showEmailotp, setEmailotp] = useState(false);
  const [loading, setLoading] = useState(false);

  const [enquiryInfo, setEnquiryInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyEnquiryInfo = { ...enquiryInfo };
    copyEnquiryInfo[name] = value;
    setEnquiryInfo(copyEnquiryInfo);
  };

  const enquiryFunction = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = enquiryInfo;
    if (!name || !email || !phone || !message) {
      return handlerError("Please fill all fields");
    }
    try {
      setLoading(true); // Start loader
      const url = "https://jepairbackend.vercel.app/jepairbazaar/enquiry";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        setEmailotp((prev) => !prev);
        enquiryInfo.name = "";
        enquiryInfo.email = "";
        enquiryInfo.phone = "";
        enquiryInfo.message = "";
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
    <div>
      <div>
        {showEmailotp && <Emailotp />}
        <div className="w-full flex justify-center items-center bg-[#f2f2f2]">
          <h1 className=" absolute text-center  text-5xl font-extrabold   animate-bounce md:top-96 md:left-[700px] top-40 shadow-blue-500  text-[#ff7f00]">
          Enquiry
        </h1>
          
          <img src="enquiry.png" className="h-[350px] w-auto rounded-lg shadow-xl shadow-blue-200 mb-10" />
        </div>
        <div className="flex justify-center items-center  rounded-2xl mb-40 shadow-xl">
          <form
            onSubmit={enquiryFunction}
            className="bg-[#f2f2f2] w-full h-full rounded-lg "
          >
            <div className="mt-10 flex gap-x-3 justify-center items-center">
              <h1 className="bg-[#3a76cb] py-6  px-24 lg:px-52 text-center rounded text-white font-bold text-xl">
                Post Your Requirements
              </h1>
            </div>
            <div className="mt-6 flex gap-x-3 justify-center items-center">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                value={enquiryInfo.name}
                autoFocus
                className="py-2.5  px-2 lg:px-16 border border-blue-400 focus:outline-none rounded"
                required
              />
              <input
                type="text"
                placeholder="Enter mobile number"
                name="phone"
                onChange={handleChange}
                value={enquiryInfo.phone}
                className="py-2.5 px-2 lg:px-16 border border-blue-400 focus:outline-none rounded"
                required
              />
            </div>
            <div className="flex justify-center items-center mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                onChange={handleChange}
                value={enquiryInfo.email}
                className="py-2.5 px-28 lg:px-56 border border-blue-400 focus:outline-none rounded"
              />
            </div>
            <div className="flex justify-center items-center mt-4 ">
              <textarea
                placeholder="Message"
                rows={10}
                cols={54}
                className="border border-blue-400  lg:px-28 py-2.5"
                required
                name="message"
                onChange={handleChange}
                value={enquiryInfo.message}
              ></textarea>
            </div>
            <div className="flex justify-center items-center mt-4 mb-10">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#3a76cb] text-white py-3 px-44 lg:px-72 font-bold text-xl rounded hover:bg-orange-400 shadow-2xl"
              >
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
    </div>
  );
}

export default Enquiry;
