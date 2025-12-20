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
import ContestManagement from "../pages/Dashboard/AdminDashboard/ContestManagement/ContestManagement";
import SubmitedTask from "../pages/Dashboard/CreatorDashboard/SubmitedTask/SubmitedTask";
import AllContest from "../pages/AllContest/AllContest";
import ContestCardDetails from "../pages/AllContest/ContestCardDetails";
import MyParticipatedContest from "../pages/Dashboard/UserDashboard/MyParticipatedContest/MyParticipatedContest";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel";
import UpdateContest from "../pages/Dashboard/MyContest/UpdateContest";
import AdminRoute from "../privetRoute/AdminRoute";
import CreatorRoute from "../privetRoute/CreatorRoute";
import UserRoute from "../privetRoute/UserRoute";
import LeaderBoard from "../pages/Dashboard/LeaderBoard/LeaderBoard";

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
        path: "all-contests",
        element: (
          <PrivetRoute>
            <AllContest></AllContest>
          </PrivetRoute>
        ),
      },
      {
        path: "/contests/contest-card-details/:id",
        element: (
          <PrivetRoute>
            <ContestCardDetails></ContestCardDetails>
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
      // common route
      {
        path: "leaderboard",
        Component: LeaderBoard,
      },
      // user area
      {
        path: "my-participated-contest",
        element: (
          <UserRoute>
            <MyParticipatedContest></MyParticipatedContest>
          </UserRoute>
        ),
      },
      // creator area
      {
        path: "add-contest",
        element: (
          <CreatorRoute>
            <AddContest></AddContest>
          </CreatorRoute>
        ),
      },
      {
        path: "my-contest",
        element: (
          <CreatorRoute>
            <MyContest></MyContest>
          </CreatorRoute>
        ),
      },
      {
        path: "update-contest/:id",
        element: (
          <CreatorRoute>
            <UpdateContest></UpdateContest>
          </CreatorRoute>
        ),
      },
      // admin area
      {
        path: "approve-creators",
        element: (
          <AdminRoute>
            <ApproveCreators></ApproveCreators>
          </AdminRoute>
        ),
      },
      {
        path: "user-management",
        element: (
          <AdminRoute>
            <UserManagement></UserManagement>
          </AdminRoute>
        ),
      },
      {
        path: "contest-management",
        element: (
          <AdminRoute>
            <ContestManagement></ContestManagement>
          </AdminRoute>
        ),
      },
      {
        path: "submited-tasks/:id",
        Component: SubmitedTask,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancel",
        Component: PaymentCancel,
      },
    ],
  },
]);

export default router;
