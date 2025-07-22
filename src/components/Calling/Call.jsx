import { Link } from "react-router-dom";
import { IoLogoWhatsapp, IoCall } from "react-icons/io5";

function Call() {
  return (
    <div className=" gap-6 fixed right-8 bottom-32 z-50">
      <div className="relative ">
        <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-green-500 opacity-75"></span>
        <Link
          to="https://wa.me/918102303285"
          title="Chat on WhatsApp"
          target="_blank"
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#224c7d] text-[#00ff00] shadow-lg text-xl"
        >
          <IoLogoWhatsapp />
        </Link>
      </div>

      {/* Call Button */}
      <div className="relative mt-5">
        <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-800 opacity-75"></span>
        <Link
          to="tel:+918102303285"
          title="Call Us"
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#224c7d] text-white shadow-lg text-xl"
        >
          <IoCall />
        </Link>
      </div>
    </div>
  );
}

export default Call;
