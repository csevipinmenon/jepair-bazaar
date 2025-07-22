import React from "react";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { RxGithubLogo } from "react-icons/rx";
import { TbBrandLinkedin } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import LoaderManual from "../Loader/LoaderManual.jsx";
import { useState } from "react";
function Footer() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const scrollToTop = () => {
    //scroll page to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [loading, setLoading] = useState(false);
  const payFunction = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/jepairbazaar/payment"
      );
      if (response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer>
      <div className="w-full z-50 bg-[#11294c] text-[#ffffff]">
        <div className="lg:flex p-12  lg:justify-between ml-20 lg:ml-0">
          <div>
            <Link to="/">
              <img src="jepair3.jpg" className="h-16" />
            </Link>
            <pre className="text-sm lg:text-lg overflow-hidden font-sans">
              <span className="text-[#E97100] text-sm lg:text-lg overflow-hidden ">
                Jepair
              </span>{" "}
              Bazar is our commitment to bring<br></br>professionalism, good
              service and trust to the home<br></br>repair service and
              maintenance<br></br>
              business.
            </pre>
          </div>
          <div className="mt-5 lg:mt-0">
            <h3 className="font-bold underline ">CONTACT US</h3>

            <p className="font-semibold mt-6">
              Email:info@<span className="text-[#E97100]">jepair</span>
              bazaar.com
            </p>

            <p className="font-semibold mt-3">Address:Patna,India</p>
          </div>
          <div className="mt-5 lg:mt-0">
            <h3 className="font-bold  underline">FOLLOW US</h3>
            <Link to={"https://github.com/csevipinmenon"}>
              <p className="font-semibold hover:text-[#e97100] mt-6">GitHub</p>
            </Link>
            <Link
              to={"/about"}
              onClick={() => {
                if (window.location.pathname === "/about") scrollToTop();
              }}
            >
              <p className="font-semibold hover:text-[#e97100] mt-3">
                Community
              </p>
            </Link>
          </div>
          <div className="mt-5 lg:mt-0">
            <h3 className="font-bold  underline">LEGAL</h3>
            <Link
              to={"/privacypolicy"}
              onClick={() => {
                if (window.location.pathname === "/privacypolicy")
                  scrollToTop();
              }}
            >
              <p className="font-semibold hover:text-[#e97100] mt-6 ">
                Privacy Policy
              </p>
            </Link>
            <Link
              to={"/termcondition"}
              onClick={() => {
                if (window.location.pathname === "/termcondition")
                  scrollToTop();
              }}
            >
              <p className="font-semibold hover:text-[#e97100] mt-3">
                Term & Condition
              </p>
            </Link>
          </div>
        </div>
        <div className="border-t-2 ml-28 mr-28 p-4 overflow-hidden">
          <div className="lg:flex gap-x-24 overflow-hidden">
            <Link
              to={"/"}
              onClick={() => {
                if (window.location.pathname === "/") scrollToTop();
              }}
            >
              <h3 className="hover:text-[#e97100]">Home</h3>
            </Link>
            <Link
              to={"/about"}
              onClick={() => {
                if (window.location.pathname === "/about") scrollToTop();
              }}
            >
              <h3 className="hover:text-[#e97100] mt-4 lg:mt-0">About Us</h3>
            </Link>
            <button
              onClick={payFunction}
              disabled={loading}
              className="hover:text-[#e97100] bg-[#224c7d] lg:px-2  rounded-sm  inline  "
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-3 h-3 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
                </div>
              ) : (
                "Pay Now"
              )}
            </button>
            <Link
              to={"/enquiry"}
              onClick={() => {
                if (window.location.pathname === "/enquiry") scrollToTop();
              }}
            >
              <h3 className="hover:text-[#e97100] mt-4 lg:mt-0">Contact Us</h3>
            </Link>
            <Link onClick={loginWithRedirect}>
              <h3 className="hover:text-[#e97100] bg-[#224c7d] md:px-2 rounded-sm inline mt-4 lg:mt-0 ">
                Register as a Professional
              </h3>
            </Link>
            <Link
              to={"/enquiry"}
              onClick={() => {
                if (window.location.pathname === "/enquiry") scrollToTop();
              }}
            >
              <h3 className="hover:text-[#e97100] overflow-hidden mt-4 lg:mt-0">
                Enquiry Now
              </h3>
            </Link>
            <Link
              to={"/faq"}
              onClick={() => {
                if (window.location.pathname === "/faq") scrollToTop();
              }}
            >
              <h3 className="hover:text-[#e97100] overflow-hidden mt-4 lg:mt-0">
                FAQ
              </h3>
            </Link>
          </div>
        </div>
        <div className=" w-full bg-[#E97100] text-[#ffffff] lg:flex items-center lg:justify-around py-6 font-bold  ">
          <div className="flex items-center ml-16 lg:ml-0  ">
            <span>
              <FaRegCopyright className="mr-1" />
            </span>
            <p>2025 Jepair Bazzar . All Right Reserved</p>
          </div>
          <div className="flex gap-x-8 text-2xl mt-6 lg:mt-0 ml-16 lg:ml-0">
            <Link to={""}>
              <span>
                <TfiFacebook className="hover:text-[#11294c] " />
              </span>
            </Link>
            <Link to={"https://www.instagram.com/imvipin07/"}>
              <span>
                <GrInstagram className="hover:text-[#11294c] " />
              </span>
            </Link>
            <Link to={""}>
              <span>
                <FaTwitter className="hover:text-[#11294c] " />
              </span>
            </Link>
            <Link to={"https://github.com/csevipinmenon"}>
              <span>
                <RxGithubLogo className="hover:text-[#11294c] " />
              </span>
            </Link>
            <Link to={"https://www.linkedin.com/in/vipin-kumar-04581431a/"}>
              <span>
                <TbBrandLinkedin className="hover:text-[#11294c] " />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
