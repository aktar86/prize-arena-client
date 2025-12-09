import { Home, ListCollapse, Settings, Trophy, UserPlus } from "lucide-react";
import React from "react";
import { FaToggleOn } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";

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
          <div className="px-4">Navbar Title</div>
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
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <Home />
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>
            {/* my contest */}
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

            {/* approve-creators */}
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
