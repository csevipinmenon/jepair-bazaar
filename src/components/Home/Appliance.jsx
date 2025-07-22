import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Appliance() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();
  const bookProcessFunction = () => {
    if (isAuthenticated) {
      navigate("/bookprocess");
    } else {
      loginWithRedirect();
    }
  };
  return (
    <div className="text-center  p-10 ">
      <h1 className="font-bold text-4xl text-[#3a76cb] ">Appliance Services</h1>
      <div className="flex flex-wrap m-16 gap-8 justify-between  items-center">
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="ac.jpg" className="rounded" />
          <span className="block font-semibold mt-4">AC Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="cctv.jpg" className="rounded" />
          <span className="block font-semibold mt-4">CCTV Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="chimney.jpg" className="rounded" />
          <span className="block font-semibold mt-4">chimney Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="deep-fridge.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Deep Freezer Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appliance;
