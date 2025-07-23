import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Faq from "../Faq/Faq";
import Mobileotp from "../msg/Mobileotp";
import { handlerError, handlerSuccess } from "../../utils.js";
import { ToastContainer } from "react-toastify";


function BookProcess() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  const [formData, setFormData] = useState({
    phone: "",
    town: "",
    state: "",
    pincode: "",
    area: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); //for loction
 

  const [loading1, setLoading1] = useState(false); //for api book

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAutoFill = async () => {
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const address = data.address;
          

          setFormData({
            town: address.city || address.town || address.village || "",
            state: address.state || "",
            pincode: address.postcode || "",
            area: `${address.county}   ${address.state_district}` || "".trim(),
          });
        } catch (error) {
          alert("Failed to auto-fill address.");
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        alert("Permission denied or error fetching location.");
        console.error(error);
        setLoading(false);
      }
    );
  };

  //booking fuction
  const [showMobileotp, setMobileotp] = useState(false);
  const bookServicFunction = async (e) => {
    e.preventDefault();

    const { phone, area, state, service, town, time, date, pincode, message } =
      formData;

    if (
      !phone ||
      !area ||
      !state ||
      !service ||
      !town ||
      !time ||
      !date ||
      !pincode ||
      !message
    ) {
      return handlerError("Please Fill all the fields!");
    }

    const regex = /^[6-9]\d{9}$/;
    if (!regex.test(phone)) {
      return handlerError("Invalid phone Number");
    }
    const regex1 = /^[1-9][0-9]{5}$/;
    if (!regex1.test(pincode)) {
      return handlerError("Invalid Pincode!");
    }

    try {
      setLoading1(true);
      const url = "https://jepairbackend.onrender.com/jepairbazaar/mobileotp";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: `+91${formData.phone}` }),
      });
      const result = await response.json();
     
      const { success, message, error } = result;
      if (success) {
        setMobileotp(true);
      } else if (error?.details) {
        const details = error.details[0].message;
        handlerError(details);
      } else {
        handlerError("something went wrong");
      }
    } catch (error) {
      handlerError("Network error or server unavailable");
    } finally {
      setLoading1(false);
    }
  };
  return (
    <div>
      {showMobileotp && (
        <Mobileotp formData={formData} setMobileotp={setMobileotp} />
      )}
      
      <div className="flex justify-center bg-[#f2f2f2] dark:bg-[#343a46] items-center ">
        
        <img src="book.jpg" className="h-[350px] bg-cover bg-white w-auto  shadow-xl shadow-blue-400 rounded-2xl" />
      </div>
      <div className="bg-[#f2f2f2] dark:bg-[#343a46]  flex items-end justify-center p-10 lg:p-0 ">
        <div className=" bg-white dark:bg-gray-800 dark:text-white border border-blue-500 shadow-2xl  py-16 lg:px-32 rounded-3xl mt-10 mb-16 ">
          <h2 className="text-center font-bold text-4xl text-orange-500 animate-pulse ">
            Book <span className="text-blue-500">Now </span>
          </h2>
          <form className="py-5 px-10" onSubmit={bookServicFunction}>
            <div className=" ">
              <label htmlFor="name" className="block font-bold  ">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                readOnly
                name="name"
                value={user?.name}
                placeholder="Enter your name"
                className="w-full border border-orange-400  dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="phn" className="block font-bold">
                Phone Number
              </label>
              <input
                type="text"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="Enter your phone number"
                className="w-full border border-orange-400 dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                name="email"
                readOnly
                value={user?.email}
                placeholder="Enter your email"
                className="w-full border border-orange-400  dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="max-w-md mx-auto border p-4 rounded shadow border-blue-500 mt-6">
              <span className="font-semibold">
                Save time. Autofill your current location.
              </span>
              <button
                type="button"
                className="bg-orange-500 hover:bg-blue-500  text-white px-3  ml-7 py-1.5 rounded text-sm mb-4 animate-pulse"
                onClick={handleAutoFill}
                disabled={loading}
              >
                {loading ? "Fetching location..." : "Auto-Fill"}
              </button>

              <div className="mt-4">
                <label className="block font-bold">Town/City</label>
                <select
                  name="town"
                  value={formData.town}
                  onChange={handleChange}
                  className="w-full border border-orange-400 dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
                  required
                >
                  <option value="" disabled>
                    select your city
                  </option>
                  <option value="Patna">Patna</option>
                  <option value="Banglore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block font-bold">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full border border-orange-400 dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
                  required
                >
                  <option value="" disabled>
                    select your state
                  </option>
                  <option value="Bihar">Bihar</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>

              <div className="mt-4">
                <label htmlFor="pin" className="block font-bold">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pin"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength={6}
                  required
                  placeholder="Enter your pincode"
                  className="w-full border border-orange-400  dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
                />
              </div>

              <div className="mt-4">
                <label htmlFor="area" className="block font-bold">
                  Area, Street, Sector, Village
                </label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  placeholder="Chiraiyatand Main Road, Prithvipur, Chiraiyatand"
                  className="w-full border border-orange-400 dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
                />
              </div>

              <div className="mt-6">
                <button className="bg-orange-500 hover:bg-blue-500 text-white ml-36 px-4 py-2 rounded text-sm">
                  Save Address
                </button>
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-bold">Services</label>
              <select
                className="w-full border border-orange-400 px-2 dark:bg-gray-800 py-1.5 focus:outline-1 focus:outline-blue-500"
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your service
                </option>
                <option value={"plumber"}>Plumber</option>
                <option value={"electrician"}>Electrician</option>
                <option value={"washing"}>Washing</option>
                <option value={"cleaning"}>Cleaning</option>
                <option value={"maid"}>Maid</option>
                <option value={"beauty spa"}>Beauty spa</option>
                <option value={"contractor"}>Contractor</option>
                <option value={"decoration"}>Decoration</option>
                <option value={"massage"}>Massage</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="date" className="block font-bold">
                Date of Services
              </label>
              <input
                type="date"
                id="date"
                required
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border dark:bg-gray-800 border-orange-400 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="time" className="block font-bold">
                Time of Services
              </label>
              <input
                type="time"
                id="email"
                required
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border dark:bg-gray-800 dark:text-white border-orange-400 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
              />
            </div>
            <div className="mt-4 ">
              <label htmlFor="msg" className="block font-bold">
                Message
              </label>
              <textarea
                id="msg"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-orange-400  dark:bg-gray-800 px-2 py-1.5 focus:outline-1 focus:outline-blue-500"
                placeholder="Enter your message: eg-Please come early."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={loading1}
                className=" mt-7 bg-orange-500 inline  py-2 px-40 rounded-xl text-white font-bold text-lg hover:bg-blue-500 transition-all hover:-translate-y-1"
              >
                {loading1 ? (
                  <div className="flex justify-center items-center">
                    <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
                  </div>
                ) : (
                  "Book Now"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Faq />
    </div>
  );
}

export default BookProcess;
