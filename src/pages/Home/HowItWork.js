import React from 'react';
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
const HowItWork = () => {
    return (
      <div className="w-4/5 mx-auto text-gray-600 my-10">
        <p>The process of our service</p>
        <h2 className="text-5xl">How it work</h2>
        <div className="md:flex md:justify-between gap-6 mt-12">
          <div className="bg-red-100 p-12 rounded-lg mb-8 shadow-lg shadow-red-300">
            <img src={icon1} alt="" />
            <p className="text-xl font-semibold mt-3">Choose restaurant</p>
          </div>
          <div className="bg-red-100 p-12 rounded-lg mb-8 shadow-lg shadow-red-300">
            <img src={icon2} alt="" />
            <p className="text-xl font-semibold mt-3">
              Select, you love to eat
            </p>
          </div>
          <div className="bg-red-100 p-12 rounded-lg mb-8 shadow-lg shadow-red-300">
            <img src={icon3} alt="" />
            <p className="text-xl font-semibold mt-3">Pickup or delivery</p>
          </div>
        </div>
      </div>
    );
};

export default HowItWork;