import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import App from "./App";

import "mdb-react-ui-kit/dist/scss/mdb.dark.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import LoginUser from "./pages/LoginUser";

import DataContextProvider from "./context/DataContext";
import LoginProvider from "./context/LoginContext";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Picture from "./pages/Picture";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <DataContextProvider>
        <UserContextProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </UserContextProvider>
      </DataContextProvider>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/loginuser",
        element: <LoginUser />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
      {
        path: "/picture",
        element: <Picture />,
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
