import React from "react";

const LoadingOverlay = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center bg-white/20 p-6 rounded-xl shadow-lg border border-white/30">
        {/* Spinner */}
        <svg
          className="animate-spin h-12 w-12 text-emerald-400 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth="10"
          ></circle>
          <path
            className="opacity-70"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>

        <p className="text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
