import { Search } from "lucide-react";
import React from "react";
import texture from "../../assets/watercolor-paper-texture.jpg";

const BannerSectionTwo = ({ searchText, setSearchText }) => {
  return (
    <section className="bg-primary text-white py-40  ">
      <div>
        <h1 className="text-7xl font-bold text-center">
          Unlesh Your Design <br />{" "}
          <span className="text-secondary">Mastery</span>
        </h1>
        <p className="text-center my-5 md:max-w-2xl mx-auto">
          Participate in our monthly banner contest. Show off your creative
          skills, get featured in the Hall of Fame, and win exclusive prizes in
          the Arena.
        </p>

        {/* <p>Text: {searchText}</p> */}
        {/* search bar from daisyUI */}
        <div className=" bg-gray-200 text-black max-w-md mx-auto rounded-full">
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
