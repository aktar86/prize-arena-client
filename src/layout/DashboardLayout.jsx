import {
  CheckCircle,
  Home,
  ListCollapse,
  Settings,
  Sparkles,
  Trophy,
  UserCircle,
  UserPlus,
  Users,
} from "lucide-react";
import React from "react";
import { FaToggleOn } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../components/Logo/Logo";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <ListCollapse />
          </label>
          <div className="px-4 text-2xl font-bold">
            <Logo />
          </div>
        </nav>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link to="/">
                <button
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Homepage"
                >
                  {/* Home icon */}
                  <span className="flex gap-2 items-center">
                    <Home />
                    <span className="is-drawer-close:hidden">Homepage</span>
                  </span>
                </button>
              </Link>
            </li>
            {/*  user route  */}
            <li>
              <NavLink
                to="/dashboard/my-participated-contest"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Participated Contest"
              >
                {/* icon */}
                <Trophy />
                <span className="is-drawer-close:hidden">
                  My Participated Contest
                </span>
              </NavLink>
            </li>

            {/*  creator route my contest */}
            <li>
              <NavLink
                to="/dashboard/my-contest"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Contest"
              >
                {/* icon */}
                <Trophy />
                <span className="is-drawer-close:hidden">My Contest</span>
              </NavLink>
            </li>
            {/* add contest page */}
            <li>
              <NavLink
                to="/dashboard/add-contest"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Contest"
              >
                {/* icon */}
                <Sparkles />
                <span className="is-drawer-close:hidden">Add Contest</span>
              </NavLink>
            </li>

            {/* Submited Task */}
            <li>
              <NavLink
                to="/dashboard/submited-tasks"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Contest"
              >
                {/* icon */}
                <CheckCircle />
                <span className="is-drawer-close:hidden">Submited Tasks</span>
              </NavLink>
            </li>

            {/*  admin route approve-creators  */}
            <li>
              <NavLink
                to="/dashboard/approve-creators"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Approve Creators"
              >
                {/* icon */}
                <UserPlus />
                <span className="is-drawer-close:hidden">Approve Creators</span>
              </NavLink>
            </li>
            {/* User Management */}
            <li>
              <NavLink
                to="/dashboard/user-management"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="User Management"
              >
                {/* icon */}
                <Users />
                <span className="is-drawer-close:hidden">User Management</span>
              </NavLink>
            </li>

            {/* Contest Management */}
            <li>
              <NavLink
                to="/dashboard/contest-management"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Contest Management"
              >
                {/* icon */}
                <Trophy />
                <span className="is-drawer-close:hidden">
                  Contest Management
                </span>
              </NavLink>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <Settings />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
