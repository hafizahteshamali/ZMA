import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen bg-[#cbe1ff] flex flex-col items-center justify-center px-4 text-center">
      <div className="mt-10">
        <img
          src="/assets/images/error/error.png"
          alt="404 Illustration"
          className="w-full max-w-md mx-auto"
        />
      </div>

      <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Oops! Lagta hai jis page ko aap dhoondh rahe hain, wo exist nahi karta
        ya phir move ho gaya hai.
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
