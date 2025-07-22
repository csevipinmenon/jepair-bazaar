import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchHome() {
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const bookSearchFunction = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate("/bookprocess");
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className=" hidden sm:block  absolute z-20  left-3.5 lg:left-16 lg:top-80 top-56 shadow-2xl bg-[#415a6e93] py-3 lg:py-7 rounded-2xl border border-orange-500 overflow-hidden">
      <form onSubmit={bookSearchFunction}>
        <div className="flex lg:px-16  px-2 lg:gap-x-14 gap-x-4 justify-evenly items-center ">
          <div>
            <select
              className="rounded-lg py-2 lg:px-10 border border-orange-500 focus:border-blue-500 focus:outline-none "
              required
            >
              <option value="" disabled>Select your city</option>
              <option value={"patna"}>Patna</option>
              <option value={"banglore"}>Banglore</option>
              <option value={"mumbai"}>Mumbai</option>
              <option value={"amritsar"}>Amritsar</option>
              <option value={"delhi"}>Delhi</option>
            </select>
          </div>
          <div>
            <select
              className="rounded-lg py-2 lg:px-10  border border-orange-500 focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>Select your service</option>
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
          <div>
            <button
              type="submit"
              className="py-2 lg:px-12 px-8 bg-orange-500 font-semibold text-white text-lg rounded-3xl hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchHome;
