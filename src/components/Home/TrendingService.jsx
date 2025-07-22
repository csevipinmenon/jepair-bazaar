import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function TrendingService() {
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
    <div className="text-center mt-16 mb-32">
      <div>
        <h3 className="font-bold text-4xl text-[#3a76cb] ">
          Trending Services
        </h3>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-2 lg:gap-x-4  gap-y-24 mt-16 ml-12 lg:ml-20  items-center mb-16">
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="ac-repair.png" className="rounded-full mb-4" />
              <span className="font-semibold ">Ac Repair</span>
            </Link>
          </div>
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="sofa.png" className="rounded-full mb-4" />
              <span className="font-semibold ">Sofa Repair</span>
            </Link>
          </div>
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="plumber.png" className="rounded-full mb-4" />
              <span className="font-semibold ">Plumber Repair</span>
            </Link>
          </div>
          <div className="inline-flex justify-center items-center w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img
                src="maid services.jpg"
                className="rounded-full h-[160px] w-[160px] "
              />
              <span className="font-semibold mt-4 hidden lg:flex absolute right-60 ">
                Maid
              </span>
            </Link>
          </div>
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="packers-movers.png" className="rounded-full mb-4" />
              <span className="  font-semibold ">Packers and Movers</span>
            </Link>
          </div>
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="fridge.png" className="rounded-full mb-4" />
              <span className="font-semibold ">Refrigerator Repair</span>
            </Link>
          </div>
          <div className="w-40 h-40 bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img src="house-cleaning.png" className="rounded-full mb-4" />
              <span className="font-semibold  ">House Cleaning</span>
            </Link>
          </div>
          <div className="  inline-flex justify-center items-center w-40 h-40 text-center bg-[#ffffff]  rounded-full shadow-2xl hover:shadow-blue-400  shadow-gray-600 ">
            <Link onClick={bookProcessFunction}>
              <img
                src="female-massage.jpg"
                className="rounded-full h-[160px] w-[200px] "
              />
              <span className="font-semibold hidden lg:flex mt-4 absolute right-60 ">
                Massage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingService;
