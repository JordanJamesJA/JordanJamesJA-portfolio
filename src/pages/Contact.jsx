import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialSidebar from "../components/SocialSidebar";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xanjborl");
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3); // 3-second countdown

  useEffect(() => {
    if (state.succeeded) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        navigate("/");
      }, countdown * 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [state.succeeded, countdown, navigate]);

  if (state.succeeded) {
    return (
      <section className="font-[Montserrat] relative min-h-screen bg-gradient-to-br from-[#182C3A] to-[#1A4674] text-white px-6 py-20 flex items-center justify-center">
        <div className="bg-[#D9D9D9]/5 backdrop-blur-sm rounded-md p-10 py-16 max-w-4xl w-full flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-white text-lg font-semibold mb-2">
              Thanks for reaching out!
            </p>
            <p className="text-white text-sm">
              You will be redirected to the homepage in{" "}
              <span className="font-bold">{countdown}</span> second
              {countdown !== 1 ? "s" : ""}.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Your existing form JSX goes here unchanged
  return (
    <section className="font-[Montserrat] relative min-h-screen bg-gradient-to-br from-[#182C3A] to-[#1A4674] text-white px-6 py-20 flex items-center justify-center">
      {/* Mobile SocialSidebar */}
      <div className="absolute bottom-4 w-full flex justify-center md:hidden">
        <SocialSidebar />
      </div>

      {/* Desktop SocialSidebar */}
      <div className="hidden md:block absolute left-6 top-1/4">
        <SocialSidebar />
      </div>

      {/* Contact Form Box */}
      <div className="bg-[#D9D9D9]/5 backdrop-blur-sm rounded-md p-10 py-16 max-w-4xl w-full flex flex-col md:flex-row gap-10 ">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Let’s Connect
          </h2>
          <p className="text-md text-gray-300 max-w-xs">
            Whether it's a project idea, job opportunity, or tech talk
            <br /> — I’m all ears.
          </p>
        </div>

        {/* Right Section - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4"
          noValidate
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-gray-400 outline-none text-sm placeholder:text-gray-400"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="johndoe@email.com"
                className="w-full bg-transparent border-b border-gray-400 outline-none text-sm placeholder:text-gray-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Hi there..."
              className="w-full bg-transparent border-b border-gray-400 outline-none text-sm placeholder:text-gray-400 resize-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="self-start mt-2 bg-white text-[#1A4674] px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all text-sm flex items-center gap-2"
          >
            SEND <span className="ml-1">➤</span>
          </button>
        </form>
      </div>
    </section>
  );
};
