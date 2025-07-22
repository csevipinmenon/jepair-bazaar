import React from "react";
import { useState } from "react";
import { handlerError, handlerSuccess } from "../../utils.js";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function UpdateStatus() {
  const [status, setStatus] = useState("");
  const [id, setid] = useState("");
  const [loading, setLoading] = useState(false);

  
  

  const updateStatusOrder = async (e) => {
    e.preventDefault();
    if (!status || !id) {
      console.log(status);
      console.log(id);

      
      return handlerError("ALL fields Are required");
    }
    const value = confirm("Do You Want to update Status?");
    if (!value) {
      return handlerError(" Don't Worry Not Update!");
    }

    try {
      setLoading(true);
      await axios.put(`https://jepairbackend.onrender.com/jepairbazaar/order/status/${id}`, {
        status: status,
      });

      handlerSuccess("Status Update SucessFully!");
      setid("")
      setStatus("")
    } catch (error) {
      handlerError("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-20 mb-20">
      <div className="font-extrabold text-xl border-b-2 py-2.5 text-orange-500">
        <h2>Update User Order</h2>
        <h3 className="mb-5 underline animate-pulse">Admin Pannel</h3>
      </div>
      <form onSubmit={updateStatusOrder} className="">
        <div>
          <h3 className="mt-4 font-bold text-lg ">
            Select order Status to set
          </h3>
          <select
            value={status}
            required
            onChange={(e) => setStatus(e.target.value)}
            className="border px-2 py-2.5 rounded-lg  mt-4 mb-6  border-blue-500 w-96 "
          >
            <option value="" disabled>
              Select Book Status
            </option>
            <option value="Booked">Booked</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <h3 className="font-bold text-lg">Enter Order Id </h3>
          <input
            type="text"
            value={id}
            onChange={(e) => setid(e.target.value)}
            placeholder="Enter order Id "
            name="orderId"
            required
            className="mt-3 w-96 py-2 px-4 border border-blue-500 focus:outline-none focus:border-orange-500 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="mt-10 w-96 bg-blue-500 py-2.5 px-10 text-white font-bold rounded-xl hover:bg-orange-500"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
            </div>
          ) : (
            "Update Status"
          )}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UpdateStatus;
