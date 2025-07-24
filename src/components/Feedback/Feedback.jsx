import React, { useState } from "react";
import HoverRating from "./HoverRating";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handlerError, handlerSuccess } from "../../utils.js";

function Feedback() {
  const [feedbackInfo, setFeedbackInfo] = useState({
    name: "",
    email: "",
    subject: "",
    feedback: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyFeedbackInfo = { ...feedbackInfo };
    copyFeedbackInfo[name] = value;
    setFeedbackInfo(copyFeedbackInfo);
  };

  const feedbackFunction = async (e) => {
    e.preventDefault();
    const { name, email, subject, feedback, message } = feedbackInfo;
    if (!name || !email || !subject || !feedback || !message) {
      return handlerError("Please fill all the fields");
    }
    try {
      setLoading(true); // Start loader
      const url = "https://jepairbackend.onrender.com/jepairbazaar/feedback";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackInfo),
      });

      const result = await response.json();
      console.log(result);
      const { success, message, error } = result;
      if (success) {
        handlerSuccess(message || "feedback submitted succesfully");
        setTimeout(() => {
          navigate("/");
        }, 10000);
      } else if (error?.details) {
        const details = error.details[0].message;
        handlerError(details);
      } else {
        handlerError(message || "semething went wrong");
      }
    } catch (error) {
      handlerError("Network error or server unavailable.");
    } finally {
      setLoading(false); // Stop loader
    }
  };
  return (
    <div className="dark:text-[#f2f2f2]">
      <div className="flex justify-center items-center bg-[#f2f2f2] dark:bg-[#343a46]">
        <h1 className=" absolute text-center  text-5xl font-extrabold   animate-bounce md:top-64 top-40 shadow-blue-500  text-[#ff7f00]">
          FeedBack
        </h1>
        <img src="hero-feed.jpg" className="md:h-[350px] w-auto h-[200px]  rounded-xl shadow-2xl shadow-blue-400" />
      </div>
      {/* feedback section */}

      <div className="flex justify-center items-center   bg-[#f2f2f2] dark:bg-[#343a46]">
        <div className="inline bg-white  dark:bg-gray-800 mt-20 py-14  px-5 sm:px-48 shadow-2xl rounded-3xl mb-32 lg:mr-0 lg:ml-0 ml-8 mr-8">
          <form onSubmit={feedbackFunction}>
            <h3 className="font-bold text-4xl">Contact Us</h3>
            <p className="mt-2  text-sm font-sans">
              Feel Free to contact us any time. We will get back to you as soon
              as we can!.
            </p>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                onChange={handleChange}
                name="name"
                value={feedbackInfo.name}
                autoFocus
                className=" focus:outline-none boder border-b-2 w-full focus:border-b-2 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                name="email"
                value={feedbackInfo.email}
                className="focus:outline-none boder dark:border-gray-700 dark:bg-gray-800 border-b-2 w-full focus:border-b-2 focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Subject"
                required
                name="subject"
                onChange={handleChange}
                value={feedbackInfo.subject}
                className=" focus:outline-none boder dark:border-gray-700 dark:bg-gray-800 border-b-2 w-full focus:border-b-2 focus:border-blue-500"
              />
            </div>
            <div className="mt-4">
              <select
                placeholder="Feedback For"
                required
                onChange={handleChange}
                name="feedback"
                value={feedbackInfo.feedback}
                className="w-full focus:border-b-2 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:outline-none"
              >
                <option value="" disabled>
                  FeedBack For
                </option>
                <option value={"website performance"}>
                  Website Performance
                </option>
                <option value={"Electrician"}>Electrician</option>
                <option value={"plumber"}>Plumber</option>
                <option value={"beauty spa"}>Beauty spa</option>
                <option value={"maid"}>Maid</option>
                <option value={"cleaning"}>Cleaning</option>
              </select>
            </div>
            <div className="mt-4">
              <textarea
                rows={"4"}
                className="w-full focus:outline-none dark:border-gray-700 dark:bg-gray-800 focus:border-b-2 border-blue-500"
                placeholder="Message"
                required
                name="message"
                value={feedbackInfo.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="border border-orange-400 mt-4 h-40 p-4">
              <h3>Your Rating with us :</h3>
              <div className=" mt-8 ml-28  ">
                <HoverRating />
              </div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#3a76cb] text-white py-3 px-16 font-semibold rounded-lg hover:bg-[#ff7f00]"
                disabled={loading}
              >
                {loading && (
                  <div className="flex justify-center mt-4">
                    <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
                  </div>
                )}
                Submit
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
