import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Popular() {
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
      <h1 className="font-bold text-4xl text-[#3a76cb] ">Popular Services</h1>
      <div className="flex flex-wrap m-16 gap-8 justify-between  items-center">
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="wedding planners.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Wedding</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="decoration.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Decoration</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="maid services.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Maid</span>
          <button
            className="bg-orange-500 py-1.5 text-white px-3 font-bold rounded-lg mt-4 transition-all hover:-translate-y-1 hover:bg-orange-600"
            onClick={bookProcessFunction}
          >
            Book Now
          </button>
        </div>
        <div className="w-[200px] h-[300px] bg-white rounded-xl shadow-xl hover:shadow-blue-300">
          <img src="security services.jpg" className="rounded" />
          <span className="block font-semibold mt-4">Security</span>
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

export default Popular;
