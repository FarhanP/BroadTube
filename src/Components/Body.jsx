import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { addUser, removeUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log("User", user.displayName);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="">
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default Body;
