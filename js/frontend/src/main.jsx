import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import "mdb-react-ui-kit/dist/scss/mdb.dark.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LoginUser from "./pages/LoginUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/loginuser",
        element: <LoginUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
