import React from "react";
import { useState } from "react";
import MapComponent from "../Map/MapComponent";

function Visit() {
  const [city, SetCity] = useState("");

  const searchJepair = (e) => {
    e.preventDefault();
    SetCity(e.target.value);
    console.log(city);
  };
  return (
    <div className="w-full ">
      <div className="w-full">
        <div className="w-full flex justify-center items-center ">
          
          <img src="visit.png" className="w-auto h-[300px]" />
        </div>
        <div className="overflow-hidden mt-4 border border-t-2">
          <MapComponent />
        </div>
        <div className="w-full shadow flex justify-center bg-[#11294c] p-6">
          <div className=" text-white">
            <h3 className="font-bold text-xl">
              Visit one of our 5 Jepair Bazaar
            </h3>
          </div>
        </div>
        <div className="w-full bg-[#f2f2f2] p-10 flex justify-center ">
          <form onSubmit={searchJepair}>
            <label
              htmlFor="city"
              className="block font-bold text-blue-500 mb-3 text-xl"
            >
              Enter the name of your hometown
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="lg:px-60 py-2.5 mr-8 bg-[#f2f2ff] rounded focus:outline-orange-400 border border-blue-300 px-20 "
            />
            <button
              type="submit"
              className="bg-[#ff7f00] px-20 py-2.5 font-bold text-xl text-white rounded-md lg:mt-0 mt-6 hover:bg-[#3a76cb]"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Visit;
