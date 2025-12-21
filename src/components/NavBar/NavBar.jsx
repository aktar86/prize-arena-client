import { Menu, Moon, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./NavBar.css";

import useAuth from "../../hooks/useAuth";
import Logo from "../Logo/Logo";
import useRole from "../../hooks/useRole";

const NavBar = () => {
  const { user, logOut, darkMode, toggleDarkMode } = useAuth();
  const [open, setOpen] = useState(false);
  const { location } = useLocation();

  const { role } = useRole();

  const handleSignOutUser = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-contests">All Contests</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      {role === "user" && (
        <>
          {" "}
          <li>
            <NavLink to="/be-a-creator">Be a Creator</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={` px-2  md:px-0  ${
        darkMode ? " bg-black text-white" : "bg-secondary/10 "
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5">
        {/* first part */}
        <div className="flex items-center">
          <span onClick={() => setOpen(!open)} className="md:hidden">
            <span>{user && open ? <X /> : <Menu />}</span>
            <ul
              className={`absolute px-5 bg-white ${
                open ? "top-15" : "-top-50"
              }`}
            >
              {links}
            </ul>
          </span>
          <span className="">
            <Logo></Logo>
          </span>
        </div>

        {/* center part  */}
        <div className="hidden lg:flex">
          <nav>
            <ul className="flex gap-5 font-semibold">{links}</ul>
          </nav>
        </div>

        {/* end part  */}
        <div className="">
          {user ? (
            <div className="flex items-center gap-3">
              {/* <button className="bg-linear-to-r from-primary to-secondary px-3 py-1 rounded-sm text-white">
                Create a Contest
              </button> */}
              {/* dark light  when logout */}
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={` mr-2 ${
                    darkMode ? "bg-black text-white" : "text-black"
                  }`}
                >
                  {darkMode ? <Sun></Sun> : <Moon></Moon>}
                </button>
              </div>
              <div className="dropdown dropdown-end">
                <div className="relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                      <img
                        src={user?.photoURL}
                        alt={user.displayName}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  {/* Green dot for active user
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div> */}
                </div>

                <ul
                  tabIndex={0}
                  className={` ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } mt-3 z-9999 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`}
                >
                  <li className="px-2 py-2 text-sm font-semibold">
                    {user.displayName}
                  </li>
                  <li className="px-2 py-2 text-xs">{user.email}</li>
                  <li className="py-2 text-xs">
                    <NavLink to="/dashboard/leaderboard">Dashboard</NavLink>
                  </li>
                  <li className=" mt-1 pt-2">
                    <button
                      onClick={handleSignOutUser}
                      className="w-full bg-linear-to-r from-primary to-secondary text-white flex justify-center items-center py-2 rounded"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              {/* dark light  when logout */}
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={` mr-2 ${darkMode ? " text-white" : "text-black"}`}
                >
                  {darkMode ? <Sun></Sun> : <Moon></Moon>}
                </button>
              </div>
              <Link
                to="/register"
                className={`${
                  location === "/register" ? "text-primary" : "text-primary"
                }`}
              >
                Register
              </Link>
              {/* <span className="text-white">/</span> */}
              {/* <Link
                to="/login"
                className={`${
                  location === "/login" ? "text-primary" : "text-white"
                }`}
              >
                Login
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
