import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Components/Signup";
import Userprovider from "./Context/UserProvider";
import Notes from "./Components/Notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Userprovider>
    <RouterProvider router={router} />
  </Userprovider>
);
