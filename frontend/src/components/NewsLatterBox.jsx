import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const NewsLatterBox = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // '' | 'success' | 'error'
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:4000/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch (error) {
      console.log(message.error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper className="text-center">
      <p className="text-2xl text-gray-800 font-medium">Subscribe now</p>
      <p className="text-gray-400 mt-3">
        Stay updated! Enter your email below to subscribe to our newsletter.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-white text-black hover:bg-gray-300 active:bg-gray-500 text-xs px-10 py-4 cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      {/* {status && (
        <p className={status === "success" ? "text-green-600" : "text-red-600"}>
          {message}
        </p>
      )} */}
    </SectionWrapper>
  );
};

export default NewsLatterBox;
