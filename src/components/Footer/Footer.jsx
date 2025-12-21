import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className=" footer-center bg-primary text-primary-content py-20">
      <div className="w-full max-w-[1440px] mx-auto ">
        <div className="mb-10 p-5 lg:p-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* 1 & 2  */}
          <div className="lg:col-span-2">
            <h1 className="font-bold text-5xl mb-5">PrizeArena</h1>
            <p>
              The premier destination for esports enthusiasts. We bridge the gap
              between passion and rewards through fair competition and a vibrant
              gaming community.
            </p>
          </div>
          {/* 3 */}
          <div>
            <p className="font-bold">Quick Links</p>
            <nav>
              <ul>
                <NavLink to="/">
                  <li className="text-white hover:underline transform transition-all ease-in-out">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/all-contests">
                  <li className="text-white hover:underline transform transition-all ease-in-out">
                    All Contests
                  </li>
                </NavLink>
                <NavLink to="/about-us">
                  <li className="text-white hover:underline transform transition-all ease-in-out">
                    About Us
                  </li>
                </NavLink>{" "}
                <NavLink to="/dashboard/leaderboard">
                  <li className="text-white hover:underline transform transition-all ease-in-out">
                    Dashboard
                  </li>
                </NavLink>
              </ul>
            </nav>
          </div>
          {/* 4  */}
          <div>
            <p className="font-bold">Company</p>
            <nav>
              <ul>
                <li> About PrizeArena</li>
                <li> How its works</li>
                <li> Help Center</li>
                <li> Terms of service</li>
                <li> Privacy policy</li>
                <li> Creator Network</li>
                <li> Invite a friends</li>
              </ul>
            </nav>
          </div>
          {/* 5 */}
          <div>
            <p className="font-bold">Social Links</p>
            <nav>
              <ul>
                <li>
                  <a href="http://www.facebook.com" target="blank">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="blank">
                    Linkedin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <p className="text-center pt-10 border-t border-gray-200">
          © {new Date().getFullYear()} Prize Arena. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
