import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../Utils/Validate";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSign = () => {
    const validationError = checkValidation(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationError);
  };

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center pt-20">
        <form className="border border-gray-700 bg-gray-800 px-8 py-4 rounded-lg shadow-lg">
          <div className="flex min-w-sm max-w-sm flex-col gap-8 mx-4 my-8">
            <h2 className="text-white text-3xl text-center">
              {isSignedIn ? " Sign In" : "Sign Up"}
            </h2>
            {!isSignedIn && (
              <input
                className="bg-white px-3 py-3"
                name="fullName"
                ref={name}
                type="text"
                autoComplete="true"
                placeholder="Full Name"
                maxLength={50}
              />
            )}
            <input
              className="bg-white px-3 py-3"
              ref={email}
              name="email"
              type="email"
              autoComplete="true"
              placeholder="Email"
              ßß
            />
            <input
              name="password"
              ref={password}
              className="bg-white px-3 py-3"
              type="password"
              placeholder="Password"
              autoComplete="true"
            />
            {errorMessage && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}
            <button
              className="bg-red-400 p-3 cursor-pointer"
              onClick={handleSign}
              type="button"
            >
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
