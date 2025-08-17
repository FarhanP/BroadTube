import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex items-center justify-center pt-20">
        <form className="border border-gray-700 bg-gray-800 px-8 py-4 rounded-lg shadow-lg">
          <div className="flex min-w-sm flex-col gap-8 mx-4 my-8">
            <h2 className="text-white text-3xl text-center">
              {isSignedIn ? " Sign In" : "Sign Up"}
            </h2>
            {!isSignedIn && (
              <input
                className="bg-white px-3 py-3"
                name="fullName"
                type="text"
                autoComplete="true"
                placeholder="Full Name"
                maxLength={50}
              />
            )}
            <input
              className="bg-white px-3 py-3"
              name="email"
              type="email"
              autoComplete="true"
              placeholder="Email"
            />
            <input
              name="password"
              className="bg-white px-3 py-3"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-400 p-3 cursor-pointer" type="submit">
              {isSignedIn ? " Sign In" : "Sign Up"}
            </button>
            <p className="text-white cursor-pointer" onClick={toggleSignIn}>
              {isSignedIn
                ? "New to BroadTube? Sign Up"
                : "Already have an account? Sign In"}
              {/* <span className="underline cursor-pointer" onClick={toggleSignIn}>
                {isSignedIn ? " Sign Up" : " Sign In"}
              </span> */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
