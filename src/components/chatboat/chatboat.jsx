import React from "react";
import { useState } from "react";
import axios from "axios";

function JepairBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function generateAnswer() {
    console.log("loading...");

    try {
      if (question.trim() == "") return;
      setAnswer("loading...");
      if (question.includes("services")) {
        const reply = '"We offer plumbing, electrical, cleaning, and more!"';
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("service")) {
        const reply = '"We offer plumbing, electrical, cleaning, and more!"';
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("price")) {
        const reply = "Pricing depends on service and location.";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);

        return;
      } else if (question.includes("jepair")) {
        const reply = "Jepair Bazaar is India's Largest Home Service Provider!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("who are you")) {
        const reply =
          "I'm Jepair Bazaar  AI Chat  Assistant! How can I Help You!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("order")) {
        const reply =
          "After Login press Book button and Fill Form manually and confirm order!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("book")) {
        const reply =
          "After Login press Book button and Fill Form manually and confirm order!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("company name")) {
        const reply = "Jepair Bazaar -India's Largest Home services Provider!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      } else if (question.includes("contact")) {
        const reply =
          "Go to Enqury Section . After Submit  the Form we will contact as soon as possible!";
        setQuestion("");
        setTimeout(() => {
          setAnswer(reply);
        }, 2000);
        return;
      }

      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCU4FtZ3D4nFUh_BDy15QE1vKY5kCuY27M",
        method: "POST",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });
      setQuestion("");
      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.error("API Error:", error);
    }
  }

  return (
    <div>
      <h1>JepairBot</h1>
      <textarea
        value={question}
        autoFocus
        onChange={(e) => setQuestion(e.target.value)}
        className="border-blue-500 "
      ></textarea>
      <button onClick={generateAnswer}>generate answer</button>
      <p>{answer}</p>
    </div>
  );
}

export default JepairBot;
