import React from "react";
import img from "../../assets/1.jpg";
const Header = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `linear-gradient(#00000082,#00000082),url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-4/5 mx-auto text-center flex flex-col pt-[15%]">
        <div>
          <h2 className="text-5xl text-white font-bold my-[3vh]">"AAHAR"</h2>
          <h2 className="text-5xl text-white font-bold mb-[3vh]">
            "FOOD DELIVERY & SERVICE"
          </h2>
        </div>
        <div className="mt-[3vh]">
          <input
            type="text"
            className="w-[40%] px-6 py-4 rounded-md bg-red-700 placeholder:text-white placeholder:text-[17px] placeholder:font-semibold"
            placeholder="Type Place, City.Division"
          />
          <input
            type="text"
            className="w-[40%] mx-4 px-6 py-4 rounded-md bg-red-700 placeholder:text-white placeholder:text-[17px]  placeholder:font-semibold"
            placeholder="Restaurant"
          />
          <input
            type="submit"
            value="Search"
            className="text-white bg-red-700 py-4 px-7 rounded-md font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
