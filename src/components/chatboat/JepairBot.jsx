import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidSend } from "react-icons/bi";
import { ImAndroid } from "react-icons/im";
const KEY = import.meta.env.GEMINI_KEY;

function JepairBot() {
  const [question, setQuestion] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const chatContainerRef = useRef(null);

  //handlersCustomReply
  function updateBotReply(replyText, delay = 1500) {
    setTimeout(() => {
      setChatLog((prev) => {
        const newLog = [...prev];
        newLog[newLog.length - 1] = { from: "bot", text: replyText };
        return newLog;
      });
    }, delay);
  }

  // Scroll to bottom automatically
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  async function generateAnswer() {
    if (question.trim() === "") return;

    const userMessage = { from: "user", text: question };
    setChatLog((prev) => [
      ...prev,
      userMessage,
      { from: "bot", text: "Thinking..." },
    ]);
    setQuestion("");

    let botReply = "";

    try {
      // Custom simple logic
      if (
        question.includes("price") ||
        question.includes("pricing") ||
        question.includes("prices")
      ) {
        updateBotReply("Pricing depends on service and location.");
        return;
      } else if (question.includes(" what is jepair")) {
        updateBotReply(
          "Jepair Bazaar is India's Largest Home Service Provider!❤️"
        );
        return;
      } else if (question.includes("who are you")) {
        updateBotReply(
          "I'm Jepair Bazaar AI Chat Assistant! How can I help you?"
        );
        return;
      } else if (question.includes("order") || question.includes("book")) {
        updateBotReply(
          "After Login, press Book button and fill the form manually to confirm order.👌"
        );
        return;
      } else if (question.includes("company name")) {
        updateBotReply(
          "Jepair Bazaar - India's Largest Home services Provider!"
        );
        return;
      } else if (question.includes("contact")) {
        updateBotReply(
          "Go to Enquiry Section. After submitting the form, we will contact you as soon as possible!"
        );
        return;
      } else if (question.includes("what is jepair bazaar")) {
        updateBotReply(
          "Jepair Bazaar is India/s Largest Home Services Provider!"
        );
        return;
      } else if (question.includes("thank") || question.includes("thanks")) {
        updateBotReply("Welcome . Feel free to chat with me!😊");
        return;
      } else if (
        question.includes("ceo of jepair ") ||
        question.includes("founder of jepair")
      ) {
        updateBotReply(
          "The CEO of Jepair Bazaar  are Mr.Vipin , Mr.Saurabh and Mr.Vishal.To know more about the Jepair Bazaar vist the about section of website"
        );
        return;
      } else if (
        question.includes("list of services") ||
        question.includes("list of service") ||
        question.includes("service") ||
        question.includes("services")
      ) {
        updateBotReply(
          "List of services are 📃 plumbling🪠,electrician🔌,cleaning🧹 ,Ac repair,Beauty spa💇 and many more . For more service visit select bar"
        );
        return;
      } else if (
        question.includes("can you save data") ||
        question.includes("store data") ||
        question.includes("save data") ||
        question.includes("store conversion")
      ) {
        updateBotReply(
          "No.I don't save any type of your data!.I'm run time JB's Assistant"
        );
        return;
      } else if (
        question.includes("can you provide ac ") ||
        question.includes("can you provide plumber ") ||
        question.includes("can you provide electrician ") ||
        question.includes("can you provide beauty ") ||
        question.includes("can you provide cleaning ") ||
        question.includes("can you provide ")
      ) {
        updateBotReply("Yes!.For more service visit select bar!");
        return;
      } else if (
        question.includes("can i pay online") ||
        question.includes("can i pay offline ") ||
        question.includes("payment mode ")
      ) {
        updateBotReply("Yes!.You can Pay both online or offline mode");
        return;
      } else if (
        question.includes("how can i pay online ") ||
        question.includes("how pay online")
      ) {
        updateBotReply(
          "Go to Pay Now section at footer and click button and pay!"
        );
        return;
      } else if (
        question.includes("how can i pay offline ") ||
        question.includes("how pay offline")
      ) {
        updateBotReply("Pay Our Service Man!");
        return;
      } else if (question.includes("refund")) {
        updateBotReply("Refund not possible!");
        return;
      } else if (
        question.includes("cancel order ") ||
        question.includes("cancel book")
      ) {
        updateBotReply("Yes you  can cancel!");
        return;
      } else if (question.includes("timing")) {
        updateBotReply(
          "Any time you can Book the services or contact the Jepair Bazaar"
        );
        return;
      } else if (question.includes("gender")) {
        updateBotReply("I'm Jepair Bazaar AI ChatBot Assistance !");
        return;
      } else if (question.includes("age")) {
        updateBotReply("I'm Jepair Bazaar AI ChatBot Assistance! ");
        return;
      } else {
        const response = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCU4FtZ3D4nFUh_BDy15QE1vKY5kCuY27M`,
          {
            contents: [{ parts: [{ text: question }] }],
          }
        );
        botReply = response.data.candidates[0].content.parts[0].text;
      }
    } catch (error) {
      console.error("API Error:", error);
      botReply = "Sorry, something went wrong!";
    }

    // Replace last "Thinking..." with actual response
    setChatLog((prev) => {
      const newLog = [...prev];
      newLog[newLog.length - 1] = { from: "bot", text: botReply };
      return newLog;
    });
  }

  return (
    <div className="fixed right-4 top-16 shadow-2xl z-50 w-[430px] h-[510px]">
      <div className="w-full h-full rounded-2xl bg-orange-100 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between bg-blue-900 rounded-t-2xl text-white font-semibold p-3">
          <h3>Jepair Bazaar Assistance</h3>
          <button>
            <TfiMenuAlt className="text-xl" />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          className="bg-orange-100 w-full h-[88%] overflow-y-auto p-4"
          ref={chatContainerRef}
        >
          {chatLog.map((msg, idx) => (
            <div
              key={idx}
              className={`flex mb-2 ${
                msg.from === "user"
                  ? "justify-start font-mono"
                  : "justify-end font-serif"
              }`}
            >
              {msg.from === "user" && (
                <div className="flex items-center space-x-2">
                  <ImAndroid className="bg-blue-900 text-white p-1 h-6 w-6 rounded-full" />
                  <div className="bg-white text-black px-3 py-2 rounded-2xl max-w-xs">
                    {msg.text}
                  </div>
                </div>
              )}

              {msg.from === "bot" && (
                <div className="bg-blue-500 text-white px-3 py-2 rounded-2xl max-w-xs">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="flex p-3 border-t shadow-2xl border-gray-300 items-center bg-white rounded-b-2xl">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Write a message..."
            className="w-full py-2 px-4 rounded-full border border-blue-500  focus:border-orange-500 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && generateAnswer()}
          />
          <button
            onClick={generateAnswer}
            className="ml-2 text-orange-500 text-2xl hover:text-blue-600"
          >
            <BiSolidSend />
          </button>
        </div>
      </div>
    </div>
  );
}

export default JepairBot;
