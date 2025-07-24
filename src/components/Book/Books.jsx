import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { handlerSuccess, handlerError } from "../../utils.js";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function Books() {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingOrderId, setLoadingOrderId] = useState(null);


  if (!isAuthenticated) {
    loginWithRedirect();
  }
 

  //  Fetch all orders for this user
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://jepairbackend.onrender.com/jepairbazaar/order/user/${user?.email}`
        );
        setOrders(response.data.orders); //  backend should return orders array
      } catch (error) {
        handlerError("Error Fetching Orders!");
       
      }
    };
    if (user?.email) fetchOrders();
  }, [user?.email]);

  // Cancel a specific order
  const orderCancel = async (orderId) => {
    const confirmed = window.confirm("Do You Want To Cancel This Order?");
    if (!confirmed) return;

    try {
      setLoadingOrderId(orderId);
      await axios.delete(
        `https://jepairbackend.onrender.com/jepairbazaar/order/cancel/${orderId}`
      );
      handlerSuccess("Order cancelled successfully!");

      // Remove from UI
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (error) {
      
      handlerError("Failed to Cancel Order!");
      alert("Failed to cancel order.");
    } finally {
      setLoadingOrderId(null);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center dark:bg-[#343a46] py-7  items-center ">
        
        <img src="book2.jpg" className="h-[400px] rounded-lg shadow-lg shadow-blue-400 w-auto" />
      </div>
      <div className="py-20 dark:bg-[#343a46]">
        <div className="flex flex-col items-center space-y-8">
          {orders.length === 0 ? (
            <p className="text-gray-600 text-2xl dark:text-white ">
              No orders found.
              <br></br>
               <br></br>
               <br></br>
              <Link to={"/bookprocess"} className="font-semibold animate-pulse text-white bg-orange-500 py-2 px-2 rounded-lg hover:bg-blue-500">  Book Now</Link>
            </p>
          ) : (
            orders.map((order, index) => (
              <div
                key={order._id}
                className="md:w-[900px] w-full bg-[#f2f2f2] border-2 shadow rounded-xl dark:border-blue-500 dark:bg-gray-800"
              >
                <div className="flex justify-between bg-gray-200 px-3 py-5 rounded-lg  dark:text-white dark:bg-gray-800">
                  <div>
                    <h3 className="font-bold">Book Placed</h3>

                    <span className="text-[#2162a1]  font-semibold">
                      {new Date(order.createdAt).toLocaleDateString()}
                      <span>
                        <br></br>
                        {new Date(order.createdAt).toLocaleTimeString()}
                      </span>
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold">SHIP TO</h3>
                    <span className="text-[#2162a1] font-semibold">
                      {user?.name}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold">Deliverd TO</h3>
                    <span className="text-[#2162a1] font-semibold">
                      {order.date}
                    </span>
                    <br></br>
                    <span className="text-[#2162a1] font-semibold">
                      {order.time}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold">ORDER ID</h3>
                    <span className="text-[#2162a1] font-semibold">
                      {order._id}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-4 px-4">
                  <div>
                    <h3 className="font-bold text-[#349380] text-lg">
                      Service
                    </h3>
                    <span className="text-[#2162a1] font-semibold">
                      {order.service}
                    </span>
                  </div>

                  <div className="lg:ml-0 ml-12">
                    <h3 className="font-bold text-[#349380] text-lg">
                      Address
                    </h3>
                    <span className="text-[#2162a1] font-semibold">
                      {order.location.area}, {order.location.town}
                    </span>
                    <br />
                    <span className="text-[#2162a1] font-semibold">
                      {order.location.pincode}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#349380] text-lg">Status</h3>
                    <span
                      className={`font-bold ${
                        order.status == "Booked"
                          ? " text-blue-500"
                          : order.status === "Pending"
                          ? "text-yellow-500 animate-pulse "
                          : order.status === "Completed"
                          ? "text-green-500 "
                          : "text-red-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="lg:ml-0 ml-8 md:space-x-2 ">
                      <button
                        onClick={() => orderCancel(order._id)}
                        className="mt-4 font-bold bg-[#2162a1] hover:-translate-y-1 transition-all text-white hover:bg-orange-500 px-4  py-1.5 rounded-lg"
                      >
                        {loadingOrderId === order._id ? (
                       <div className="flex justify-center items-center">
                      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-white"></div>
                     </div>
                     ) : (
                         "Cancel Book"
                          )}

                      </button>
                      <button className="mt-4 font-bold px-4 bg-[#2162a1]  hover:translate-y-1 transition-all text-white  hover:bg-orange-500 rounded-xl py-1.5">
                        Update Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Books;
