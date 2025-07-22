import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function Success() {
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  const homeFunction = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-center items-center ">
        <img src="jepairBanner.jpg" className="h-[200px] w-full" />
      </div>

      <div className="mt-10">
        <h1 className="  text-center text-3xl font-extrabold animate-bounce text-[#3a76cb] hover:text-[#ff7f00]">
          Payment Success!
        </h1>
        <div className="text-center text-2xl">
          <br></br>{" "}
          <p className="mt-2 animate-pulse"> Thank You For Payment!</p>
          <button
            onClick={homeFunction}
            className="mt-6 mb-10 hover:bg-[#3a76cb] hover:-translate-y-2 hover:rounded-full transition-all bg-orange-500 px-2 py-2 rounded-md text-white"
          >
            Redirect To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
