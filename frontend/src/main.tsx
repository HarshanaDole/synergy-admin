import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import HomePage from "./client/pages/HomePage";
import AdminNotFound from "./admin/pages/AdminNotFound";
import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Profile from "./admin/pages/Profile";
import ClientNotFound from "./client/pages/ClientNotFound";
import Projects from "./admin/pages/Projects";
import Clients from "./admin/pages/Clients";
import Register from "./admin/pages/Register";
import AddEditProject from "./admin/pages/AddEditProject";
import AddEditClient from "./admin/pages/AddEditClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "admin/*",
    element: <AdminNotFound />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/login",
    element: <Login />,
  },
  {
    path: "/admin/register",
    element: <Register />,
  },
  {
    path: "/admin/profile",
    element: <Profile />,
  },
  {
    path: "/admin/projects",
    element: <Projects />,
  },
  {
    path: "/admin/projects/add",
    element: <AddEditProject />,
  },
  {
    path: "/admin/projects/edit/:id",
    element: <AddEditProject />,
  },
  {
    path: "/admin/clients",
    element: <Clients />,
  },
  {
    path: "/admin/clients/add",
    element: <AddEditClient />,
  },
  {
    path: "/admin/clients/edit/:id",
    element: <AddEditClient />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
