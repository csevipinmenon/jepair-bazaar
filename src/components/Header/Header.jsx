import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Location from "../Location/Location";
import ThemeMode from "../ThemeMode/ThemeMode";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { TbLogin2 } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import Sidenav from "../sidenav/Sidenav";

function Header() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  //save user data

  //save user data


  const [showSidenav, setShowSidenav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    //scroll page to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.getElementById("mobile-menu").classList.toggle("hidden");
  };
  const handleUser = () => {
    setShowSidenav((prev) => !prev);
  };

  return (
    <header className="shadow-lg z-50  sticky top-0 lg:m-4 dark:m-0 dark:bg-[#343a46]">
      <nav className="bg-white border-gray-300 px-4 lg:px-6 py-2.5  dark:bg-[#343a46] dark:text-white">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link
            to="/"
            onClick={() => {
              if (window.location.pathname === "/") scrollToTop();
            }}
            className="flex items-center"
          >
            <img
              src="jepair2.jpg"
              alt="Jepair Bazaar Logo"
              className="block dark:hidden mr-3 md:h-20 h-16 "
            />
            {/* dark mode baad image */}
            <img
              src="jepairblacklogo.jpg"
              alt="Jepair Bazaar Logo"
              className=" hidden dark:block mr-3 md:h-20 h-16 "
            />
            <span className=" lg:ml-5  hover:cursor-default">
              <Location />
            </span>
          </Link>

          <div className="flex items-center lg:order-2  ">
            <div className="bg-orange-500 flex items-center text-white p-2 rounded-md hover:bg-blue-500">
              <span className="font-semibold">
                <TbLogin2 />
              </span>
              {isAuthenticated ? (
                <button className="font-semibold" onClick={handleUser}>
                  User
                </button>
              ) : (
                <button className="font-semibold" onClick={loginWithRedirect}>
                  Log In
                </button>
              )}

              {showSidenav && (
                <Sidenav
                  logout={logout}
                  setShowSidenav={setShowSidenav}
                  user={user}
                />
              )}
            </div>
            <span className="lg:ml-8 ml-5 flex items-center mt-2  ">
              <ThemeMode />
            </span>
          </div>
          <div
            className=" hidden  w-full items-center lg:flex justify-between lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            <ul className=" flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  onClick={() => {
                    if (window.location.pathname === "/") scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-orange-400" : "text-black"
                    } hover:bg-[#3a76cb] hover:p-2 hover:rounded-md hover:text-white dark:text-white`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/visit"}
                  onClick={() => {
                    if (window.location.pathname === "/visit") scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-orange-400" : "text-black"
                    } hover:bg-[#3a76cb] hover:p-2 hover:rounded-md hover:text-white dark:text-white`
                  }
                >
                  Visit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  onClick={() => {
                    if (window.location.pathname === "/about") scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-orange-400" : "text-black"
                    } hover:bg-[#3a76cb] hover:p-2 dark:text-white hover:rounded-md hover:text-white`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/enquiry"}
                  onClick={() => {
                    if (window.location.pathname === "/enquiry") scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-orange-400" : "text-black"
                    } hover:bg-[#3a76cb] hover:p-2 dark:text-white hover:rounded-md hover:text-white`
                  }
                >
                  Enquiry
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/feedback"}
                  onClick={() => {
                    if (window.location.pathname === "/feedback") scrollToTop();
                  }}
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive ? "text-orange-400" : "text-black"
                    } hover:bg-[#3a76cb] hover:p-2 dark:text-white hover:rounded-md hover:text-white`
                  }
                >
                  FeedBack
                </NavLink>
              </li>
            </ul>
          </div>
          <button className="text-3xl  lg:hidden" onClick={showMobileMenu}>
            {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <div
          className=" hidden  w-full items-center lg:hidden bg-[#f2f2f2]  "
          id="mobile-menu"
        >
          <ul className=" flex flex-col mt-6 font-medium gap-6 p-4">
            <li className=" p-2 dark:text-white hover:rounded-md  rounded-md">
              <NavLink
                to={"/"}
                onClick={() => {
                  if (window.location.pathname === "/") scrollToTop();
                  showMobileMenu();
                }}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-orange-400" : "text-black"
                  }  text-white font-bold bg-orange-400 hover:bg-[#3a76cb] rounded-xl  px-28 sm:px-44 py-2.5`
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" p-2 dark:text-white hover:rounded-md  rounded-md">
              <NavLink
                to={"/visit"}
                onClick={() => {
                  if (window.location.pathname === "/visit") scrollToTop();
                  showMobileMenu();
                }}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-orange-400" : "text-black"
                  }  text-white font-bold bg-orange-400 hover:bg-[#3a76cb] rounded-xl  px-28 sm:px-44 py-2.5 `
                }
              >
                <span className="px-2"> Visit</span>
              </NavLink>
            </li>
            <li className=" p-2 dark:text-white hover:rounded-md  rounded-md">
              <NavLink
                to={"/about"}
                onClick={() => {
                  if (window.location.pathname === "/about") scrollToTop();
                  showMobileMenu();
                }}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-orange-400" : "text-black"
                  } text-white  font-bold bg-orange-400 hover:bg-[#3a76cb] rounded-xl  px-28 sm:px-44 py-2.5`
                }
              >
                About
              </NavLink>
            </li>
            <li className=" p-2 dark:text-white hover:rounded-md  rounded-md">
              <NavLink
                to={"/enquiry"}
                onClick={() => {
                  if (window.location.pathname === "/enquiry") scrollToTop();
                  showMobileMenu();
                }}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-orange-400" : "text-black"
                  }  text-white font-bold bg-orange-400 hover:bg-[#3a76cb] rounded-xl  px-24 sm:px-40 py-2.5`
                }
              >
                <span className="px-3"> Enquiry</span>
              </NavLink>
            </li>
            <li className=" p-2 dark:text-white hover:rounded-md  rounded-md">
              <NavLink
                to={"/feedback"}
                onClick={() => {
                  if (window.location.pathname === "/feedback") scrollToTop();
                  showMobileMenu();
                }}
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "text-orange-400" : "text-black"
                  }  text-white font-bold bg-orange-400 hover:bg-[#3a76cb] rounded-xl  px-24 sm:px-40 py-2.5`
                }
              >
                <span className="px-2"> Feedback</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
