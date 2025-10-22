import React from "react";

const Footer = () => {
  console.log("footer");
  return (
    <div
      className="text-emerald-400 p-5 text-center border border-emerald-50 mb-3 
                bg-white/10 backdrop-blur-md w-max mx-auto rounded-lg shadow-lg"
    >
      Made with <span className="text-red-400">&hearts;</span> by Farhan - 2025
    </div>
  );
};

export default Footer;
