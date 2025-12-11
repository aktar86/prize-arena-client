import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/mainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import PrivetRoute from "../privetRoute/PrivetRoute";
import Details from "../pages/Details/Details";
import BecomeACreator from "../pages/BecomeACreator/BecomeACreator";
import DashboardLayout from "../layout/DashboardLayout";
import MyContest from "../pages/Dashboard/MyContest/MyContest";
import ApproveCreators from "../pages/Dashboard/ApproveCreator/ApproveCreators";
import AddContest from "../pages/Dashboard/CreatorDashboard/AddContest/AddContest";
import UserManagement from "../pages/Dashboard/AdminDashboard/UserManagement/UserManagement";

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
        path: "be-a-creator",
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
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      // creator area
      {
        path: "add-contest",
        Component: AddContest,
      },
      {
        path: "my-contest",
        Component: MyContest,
      },
      // admin area
      {
        path: "approve-creators",
        Component: ApproveCreators,
      },
      {
        path: "user-management",
        Component: UserManagement,
      },
    ],
  },
]);

export default router;
