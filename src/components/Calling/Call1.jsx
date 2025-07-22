import React from "react";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

function Call1() {
  return (
    <div>
      <span className="animate-ping absolute h-10 w-10  bg-green-500  rounded-full inline-flex"></span>
      <Link to="tel:918102303285" className="inline-flex h-10 w-10 rounded-full bg-blue-800 text-green-800 justify-center items-center shadow-lg text-3xl">
        <IoCall />
      </Link>
    </div>
  );
}

export default Call1;
