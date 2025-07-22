import React from "react";
import Counterup from "../CounterUp/Counterup";

function Worlwide() {
  return (
    <div className="bg-[#f2f2f2] grid grid-cols-12 gap-6 px-6 py-16 ">
      <div className="col-span-4 mt-12">
        <img src="worldMap.jpg" />
      </div>
      <div className="col-span-8 mt-12">
        <h1 className="font-extrabold text-5xl text-blue-500 text-center">
          Worldwide movement
        </h1>
        <p className="mt-7 text-lg ">
          Besides the India, there are Jepair Bazaar in Germany, France, the
          United Kingdom, the United States and in dozens of other countries
          around the world. Jepair Bazaar has even made its way to Nepal and
          Japan!
        </p>
        <div className=" lg:flex justify-evenly  mt-16 items-center">
          <div>
            <Counterup end="3678" duration={"4"} />
            <h3 className="mt-4 font-semibold text-lg text-blue-700">
              Jepair Bazaar
            </h3>
          </div>

          <div className="mt-6">
            <Counterup end="54795" duration={"4"} />
            <h3 className="mt-4 font-semibold text-lg text-blue-700">
              Estimated number of<br></br> volunteers involved
            </h3>
          </div>
          <div className="mt-6">
            <Counterup end="65754" duration={"4"} />
            <h3 className="mt-3 font-semibold text-lg text-blue-700">
              Estimated number of<br></br> items repaired per month
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worlwide;
