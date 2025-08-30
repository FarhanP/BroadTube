import React, { useEffect } from "react";
import playButton from "../assets/play-button.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log("Error:", error);
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-start items-center gap-0.5 px-4 py-4">
      <img className="w-9 h-9" src={playButton} alt="Play button logo" />
      <h1 className="text-emerald-500 text-3xl">broadTube</h1>
      {user && (
        <div className="flex items-center gap-0 ml-auto">
          <FontAwesomeIcon
            size="xl"
            icon={faUser}
            className="text-emerald-500 py-2 "
          />
          <button
            onClick={handleSignOut}
            type="button"
            className="text-xl max-h-10 font-bold cursor-pointer text-red-400 p-2 ml-auto"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
