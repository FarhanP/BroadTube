import React from "react";
import playButton from "../assets/play-button.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error:", error);
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-start items-center gap-0.5 mx-4 py-4">
      <img className="w-9 h-9" src={playButton} alt="Play button logo" />
      <h1 className="text-emerald-500 text-3xl shadow-xl">broadTube</h1>
      {user && (
        <button
          onClick={handleSignOut}
          type="button"
          className="text-lg cursor-pointe bg-red-400 px-3 py-2 ml-auto"
        >
          Sign out
        </button>
      )}
    </div>
  );
};

export default Header;
