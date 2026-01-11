import { Search } from "lucide-react";
import React from "react";

const BannerSectionTwo = ({ setSearchText }) => {
  return (
    <section className="bg-primary/10  py-10  px-6 mt-5 rounded-xl ">
      <div>
        {/* content */}
        {/* <div>
          <h1 className="text-7xl font-bold text-center">
            Unlesh Your Design <br />{" "}
            <span className="text-secondary">Mastery</span>
          </h1>
          <p className="text-center my-5 md:max-w-2xl mx-auto">
            Participate in our monthly banner contest. Show off your creative
            skills, get featured in the Hall of Fame, and win exclusive prizes
            in the Arena.
          </p>
        </div> */}
        {/* <p>Text: {searchText}</p> */}
        <h3 className="text-center text-3xl font-bold mb-5">Search Contest </h3>
        {/* search bar from daisyUI */}
        <div className=" bg-gray-200  max-w-md mx-auto rounded-full">
          <label className=" flex   w-full rounded-full outline-0">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              required
              className="text-black px-5  py-2 w-full outline-0"
              placeholder="Search Contest"
            />
            <span className="bg-secondary px-8 text-white rounded-full flex items-center">
              <Search />
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionTwo;
