import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Handyman() {
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
    <div className="text-center bg-[#f2f2f2] p-10 ">
      <h1 className="font-bold text-4xl text-[#3a76cb] ">Handyman Services</h1>
      <div className="flex flex-wrap m-16 gap-8 justify-between  items-center">
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="plumber.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Plumber Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="electrician.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Electrician Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="chair repair service.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Chair Repair</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="carpentary.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Carpentary Repair</span>
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

export default Handyman;
