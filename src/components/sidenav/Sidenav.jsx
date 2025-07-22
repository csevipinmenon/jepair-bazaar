import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";

function Sidenav({ logout, setShowSidenav, user }) {
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    
    setShowSidenav(false);
  };

  return (
    <div className="absolute z-50 bg-gray-800 h-[570px] w-[250px] rounded shadow-2xl transition-all lg:top-28 top-24 ">
      <div className="ml-12 ">
        <abbr title="User" className="no-underline">
          {user ? (
            <img src={user.picture} height={60} width={60} className="rounded-full mt-4 " />
          ) : (
            <FaUserTie className="text-5xl text-orange-500 mt-7" />
          )}
        </abbr>
        <span className="relative top-2 font-bold">Hello, {user.name}</span>
      </div>

      <ul>
        <li className="mt-6 hover:bg-blue-500 py-2 px-3 rounded-lg">
          <Link
            to={"/yourbook"}
            className="font-bold text-2xl text-white ml-10"
            onClick={() => setShowSidenav(false)}
          >
            Book
          </Link>
        </li>
        <li className="mt-4 hover:bg-blue-500 py-2 px-3 rounded-lg" >
          <Link
            to={"/chat"}
            className="font-bold text-2xl text-white ml-10"
            onClick={() => setShowSidenav(false)}
            
          >
            Chat
          </Link>
        </li>
        <li
          className="mt-4 hover:bg-blue-500 py-2 px-3 rounded-lg cursor-pointer"
          onClick={handleLogout}
        >
          <span className="font-bold text-2xl text-white ml-10">Log Out</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
