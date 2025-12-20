import React from "react";
import BannerImag from "../../assets/banner-img.png";
import { Link } from "react-router";

const BannerSection = () => {
  return (
    <section className="flex gap-4 justify-center items-center bg-primary/5 py-10">
      <div className=" flex-1  px-6 ">
        {/* content */}
        <h1 className="text-7xl font-black">
          Unlesh Your Design <span className="text-secondary">Mastery</span>
        </h1>
        <p className="my-5 text-xl">
          Participate in our monthly banner contest. Show off your creative
          skills, get featured in the Hall of Fame, and win exclusive prizes in
          the Arena.
        </p>
        <div className="mt-10">
          <Link
            to="/be-a-creator"
            className="bg-primary text-white mr-3 px-5 py-2 cursor-pointer"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="bg-secondary text-white px-5 py-2 cursor-pointer"
          >
            Join Now
          </Link>
        </div>
      </div>
      <div className=" hidden lg:flex justify-center items-center flex-1">
        {/* img */}
        <img className="max-w-160" src={BannerImag} alt={BannerImag} />
      </div>
    </section>
  );
};

export default BannerSection;
