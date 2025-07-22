import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import io from "socket.io-client";
import { useRef } from "react";

const socket = io("http://localhost:3000"); // Connect to backend

function UserChat() {
  const { user } = useAuth0(); // get logged-in user's email
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatLog]);

  useEffect(() => {
    if (user?.email) {
      socket.emit("joinRoom", { email: user.email }); // join user-specific room
    }

    socket.on("receiveMessage", ({ from, message }) => {
      setChatLog((prev) => [...prev, { from, message }]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [user]);

  const handleSend = () => {
    if (!message) return;

    //  You place this here — when user clicks "Send"
    socket.emit("sendMessage", {
      to: "jepair@admin.com",
      from: user.email,
      message: message,
    });

    setChatLog((prev) => [...prev, { from: "You", message }]);
    setMessage("");
  };

  return (
    <>
      <div className="w-full flex justify-center items-center shadow-lg">
        <h1 className="absolute text-3xl text-[#3a76cb]   font-extrabold ">
          Welcome To Chat!
        </h1>
        <img src="jepairBanner.jpg" className="h-[200px] w-full" />
      </div>
      <div className="p-4 ">
        <h2 className="text-3xl shadow-lg border-b-2 border-dashed py-4    text-blue-500 border-orange-500 font-extrabold mb-2 text-center">
          <span className="  rounded-md">
            {" "}
            Jepair <span className="text-orange-500  bg-white">Bazaar </span>
          </span>
          <span class="relative flex h-5 w-5  left-1/2 bottom-14">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
          </span>
        </h2>

        <div
          ref={chatRef}
          className="h-80 shadow-lg overflow-y-auto border mt-8 rounded-md bg-[#f2f2f2] p-2 mb-3"
        >
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.from === "jepair@admin.com"
                  ? "justify-end"
                  : "justify-start"
              } mb-2 lg:ml-16 lg:mr-16 mr-8 ml-8`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                  msg.from === "jepair@admin.com"
                    ? "bg-green-200 text-black"
                    : "bg-pink-200 text-black"
                }`}
              >
                <strong className="block text-xs mb-1">
                  {msg.from === "jepair@admin.com" ? "Jepair Bazaar" : "You"}
                </strong>
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-36 mt-12">
          <input
            type="text"
            className="border p-2 w-full focus:outline-none  border-blue-500  rounded-lg focus:border-orange-500"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="bg-orange-500  font-bold text-white px-10 py-2  hover:bg-blue-500 rounded-md"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default UserChat;
