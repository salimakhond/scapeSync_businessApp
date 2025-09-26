import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./component/Home.jsx";
import Register from "./component/Register.jsx";
import Login from "./component/Login.jsx";
import VerifyPage from "./component/VerifyPage.jsx";
import ResetPasswordPage from "./component/ResetPasswordPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "verify_otp",
    Component: VerifyPage,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "reset-password",
    Component: ResetPasswordPage,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
