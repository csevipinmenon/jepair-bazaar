import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "1. Does Jepair Bazaar Company Repair Ac?",
    answer:
      "Yes, as we tell you before that our company provides all types of repair services. We also offer AC repair services. If you have any queries, please contact Jepair Bazaar.",
  },
  {
    question:
      "2. What are the benefits of using Jepair Bazaar for repair services?",
    answer:
      "Jepair Bazaar efficiently repairs things at low cost. It’s one of India's largest and most trusted home services providers.",
  },
  {
    question: "3. How to place an order on Jepair Bazaar?",
    answer:
      "It’s very easy: just login, select the service, date, time, location, make payment, and you’re done.",
  },
  {
    question: "4. What are the modes of payment?",
    answer:
      "You can pay using online options like credit/debit cards and net banking. Cash on Delivery (COD) is also available.",
  },
  {
    question: "5. Can I pay by cash?",
    answer:
      "Yes, you can use Cash on Delivery (COD) and pay the technician after the service.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="w-full  flex justify-center items-center py-8 dark:bg-[#343a46]">
        <div className="border w-full max-w-5xl p-5 dark:border-blue-800">
          <h1 className="text-center text-5xl font-bold text-orange-400 hover:underline border-b dark:border-blue-800 py-4">
            FAQ'S
          </h1>

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="mt-6 border-b dark:border-blue-800 pb-4 transition-all duration-300"
            >
              <div
                className="flex items-center justify-between cursor-pointer text-[#31708f] hover:text-blue-300 px-4"
                onClick={() => toggleFaq(index)}
              >
                <h2 className="text-xl font-bold">{faq.question}</h2>
                <span className="text-2xl">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 px-4 ${
                  openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 dark:text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full dark:bg-[#343a46] py-5 flex justify-center items-center">
        <div className="w-full max-w-5xl border p-4 bg-[#f68020] rounded">
          <h2 className="text-center text-white font-bold text-2xl">
            Other Services for You
          </h2>
          <div className="text-center mt-3 bg-white   rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="ac1.jpg" height={200} width={100} className="" />
            </Link>
            <p className="text-black text-lg">AC Repair</p>
          </div>
          <div className="text-center mt-3 bg-white rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="washing.jpg" height={200} width={100} className="ml-8" />
            </Link>
            <p className="text-black text-lg">Washing Machine Repair</p>
          </div>
          <div className="text-center mt-3 bg-white rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="sofa.jpg" height={200} width={100} className="" />
            </Link>
            <p className="text-black text-lg">Sofa Repair</p>
          </div>
          <div className="text-center mt-3 bg-white rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="beauty-care (1).jpg" height={200} width={100} className="" />
            </Link>
            <p className="text-black text-lg">Beauty Care</p>
          </div>
          <div className="text-center mt-3 bg-white rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="four wheeler.jpg" height={200} width={100} className="" />
            </Link>
            <p className="text-black text-lg">Four Wheeler Repair</p>
          </div>
          <div className="text-center mt-3 bg-white rounded flex justify-around items-center ">
            <Link to={"/"} className="">
              <img src="android.jpg" height={200} width={100} className="" />
            </Link>
            <p className="text-black text-lg">Mobile Repair</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
