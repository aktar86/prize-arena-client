import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivetRoute from "../privetRoute/PrivetRoute";
import Details from "../pages/Details/Details";
import BecomeACreator from "../pages/BecomeACreator/BecomeACreator";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "details",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
      },
      {
        path: "be_a_creator",
        element: (
          <PrivetRoute>
            <BecomeACreator></BecomeACreator>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    Component: Dashboard,
  },
]);

export default router;
