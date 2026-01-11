import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./NavBar.css";

import useAuth from "../../hooks/useAuth";
import Logo from "../Logo/Logo";
import useRole from "../../hooks/useRole";

const NavBar = () => {
  const { user, logOut, darkMode, toggleDarkMode } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
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
        <li>
          <NavLink to="/be-a-creator">Be a Creator</NavLink>
        </li>
      )}
      <li className="md:hidden">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="md:hidden">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 z-50 w-full px-2 md:px-0 border-b-2 border-gray-100 ${
        darkMode ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-5">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center">
          <span onClick={() => setOpen(!open)} className="md:hidden">
            <span>{open ? <X /> : <Menu />}</span>
            <ul
              className={`absolute px-5 space-y-2 bg-secondary text-white p-5 ${
                open ? "top-15" : "-top-70"
              }`}
            >
              {links}
            </ul>
          </span>
          <span className="">
            <Logo />
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <nav>
            <ul className="flex gap-5 font-semibold">{links}</ul>
          </nav>
        </div>

        {/* User Actions */}
        <div className="">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Dark/Light Toggle */}
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={`mr-2 ${
                    darkMode ? "bg-black text-white" : "text-black"
                  }`}
                >
                  {darkMode ? <Sun /> : <Moon />}
                </button>
              </div>

              {/* User Dropdown */}
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
                </div>

                <ul
                  tabIndex={0}
                  className={`${
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
                  <li className="mt-1 pt-2">
                    <button
                      onClick={handleSignOutUser}
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-sm font-bold transition-all duration-300 border ${
                        darkMode
                          ? "bg-slate-900 border-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                          : "bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900"
                      }`}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Dark/Light Toggle */}
              <div>
                <button
                  onClick={toggleDarkMode}
                  className={`mr-2 ${darkMode ? "text-white" : "text-black"}`}
                >
                  {darkMode ? <Sun /> : <Moon />}
                </button>
              </div>

              {/* Auth Buttons */}
              <Link
                to="/register"
                className={`bg-gradient-to-r from-[#fc466b] to-[#3f5efb] hidden md:flex rounded-full px-5 py-2 ${
                  location.pathname === "/register"
                    ? "text-white"
                    : "text-white"
                }`}
              >
                Register
              </Link>
              <Link
                to="/login"
                className={`bg-gradient-to-r from-[#fc466b] to-[#3f5efb] hidden md:flex rounded-full px-5 py-2 ${
                  location.pathname === "/login" ? "text-white" : "text-white"
                }`}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
