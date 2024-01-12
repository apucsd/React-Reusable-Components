import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import App from "../App";
import AdminLayout from "../components/layout/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <h2>This is admin dashboard</h2>,
      },
      {
        path: "add-admin",
        element: <h2>This is add admin page</h2>,
      },
    ],
  },
]);
