import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import App from "./App";

import "mdb-react-ui-kit/dist/scss/mdb.dark.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Points from "./pages/Points";

import LoginUser from "./pages/LoginUser";

import DataContextProvider from "./context/DataContext";

const router = createBrowserRouter([
  {
    element: (
      <DataContextProvider>
        <App />
      </DataContextProvider>
    ),
    children: [
      {
        path: "/loginuser",
        element: <LoginUser />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/points",
        element: <Points />,
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
