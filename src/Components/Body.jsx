import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../Components/Login";
import Browse from "./Browse";

const Body = () => {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
};

export default Body;
