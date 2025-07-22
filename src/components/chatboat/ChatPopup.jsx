import React from "react";
import { Link } from "react-router-dom";
import { ImAndroid } from "react-icons/im";

function ChatPopup() {
  return (
    <div className=" gap-3 fixed right-5 bottom-0 z-50 flex  justify-center items-center">
      <span className=" mt-1 bg-[#ffffff] shadow-2xl shadow-black px-5 text-[#1a3a71] font-semibold py-0.5 text-sm rounded-lg">
        Hello! How can I help? <br></br>{" "}
        <span className="text-[#333333] font-normal">JB's Assistance</span>
      </span>
      <div className="relative ">
        <Link
          title="AI Jepair ChatBoAt"
          className="relative inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#224c7d] hover:bg-orange-500  text-white shadow-lg text-3xl"
        >
          <ImAndroid className=" " />
        </Link>
      </div>
    </div>
  );
}

export default ChatPopup;
