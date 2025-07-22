import React from "react";
import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";

function Location() {
  const [getIp, setIp] = useState("");
  const [location, setLoction] = useState("");

  useEffect(() => {
    getipfunction();
  }, []);

  const getipfunction = async () => {
    try {
      const response = await fetch("https://api.ipify.org");
      const data = await response.text();
      setIp(data);
      fetchLocation();
    } catch (error) {
      console.log("error during fetching location", error);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch(`https://ipapi.co/${getIp}/json/`);
      const data = await response.json();
      setLoction(data);
      console.log(data);
    } catch (error) {
      console.log("something wrong during fetching the location", error);
    }
  };
  return (
    <>
      <div>
        <h4 className="text-orange-500 font-medium text-sm">
          Current <span className="text-blue-400">Location</span>
        </h4>
        <CiLocationOn className="lg:text-2xl inline animate-pulse text-sm" />
        {location && (
          <span className="font-medium  text-sm">{location.region}</span>
        )}
      </div>
    </>
  );
}

export default Location;
