import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import HomePage from "./client/pages/Homepage/Home";
import AboutUs from "./client/pages/AboutUs/AboutUs";
import Service from "./client/pages/Services/Service";
import ProjectsClient from "./client/pages/Projects/Projects";
import Blog from "./client/pages/Blogs/Blogs";
import BlogDetailed from "./client/pages/Blogs/BlogDetailed";
import Contact from "./client/pages/Contact/Contact";
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
import Messages from "./admin/pages/Messages";
import Blogs from "./admin/pages/Blogs";
import Admins from "./admin/pages/Admins";
import Error404Page from "./admin/pages/404ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/services",
    element: <Service />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/projects",
    element: <ProjectsClient />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetailed />,
    errorElement: <ClientNotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
  {
    path: "/admin/messages",
    element: <Messages />,
  },
  {
    path: "/admin/blogs",
    element: <Blogs />,
  }, 
  {
    path: "/admin/admins",
    element: <Admins />,
  },
  {
    path: "/admin/404",
    element: <Error404Page />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
