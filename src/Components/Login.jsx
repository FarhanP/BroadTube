import React, { useRef, useState } from "react";
import Header from "./Header.jsx";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidation } from "../utils/Validate.js";
import { auth } from "../utils/Firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const handleSign = () => {
    const validationError = checkValidation(
      name?.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationError);
    if (validationError) return;

    // handling the sign-in or sign-up logic
    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log("User signed up:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing up:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          setErrorMessage(errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="flex flex-col gap-15">
      <Header />
      <div className="flex items-center justify-center pt-20">
        <form className="border border-gray-700 bg-gray-800 sm:px-8 px-4 sm:py-4 py-2 rounded-lg shadow-lg">
          <div className="flex sm:min-w-sm min-w-xs max-w-xs sm:max-w-sm flex-col gap-8 mx-4 my-8">
            <h2 className="text-white text-3xl text-center">
              {isSignedIn ? " Sign In" : "Sign Up"}
            </h2>
            {!isSignedIn && (
              <input
                className="bg-white rounded-md px-3 py-3"
                name="fullName"
                ref={name}
                type="text"
                autoComplete="true"
                placeholder="Full Name"
                maxLength={50}
              />
            )}
            <input
              className="bg-white rounded-md px-3 py-3"
              ref={email}
              name="email"
              type="email"
              autoComplete="true"
              placeholder="Email"
            />
            <input
              name="password"
              ref={password}
              className="bg-white rounded-md px-3 py-3"
              type="password"
              placeholder="Password"
              autoComplete="true"
            />
            {errorMessage && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}
            <button
              className="bg-red-400 text-white hover:opacity-90 font-bold p-3 cursor-pointer"
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
