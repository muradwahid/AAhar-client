import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../src/assets/2.jpg'
import FoodsService from './Home/FoodsService';
const Service = ({foods}) => {
    return (
      <div
        className="py-12"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-4/5 mx-auto">
          <h2 className="text-4xl text-gray-700 font-semibold text-center mb-3">
            Services
          </h2>
          <div className="flex gap-6">
            {foods.slice(0, 3).map((food) => (
              <FoodsService key={food._id} food={food} />
            ))}
          </div>
          <div className="text-center my-12">
            <Link to="/allfoods" className="text-white bg-red-700 py-2 px-7 rounded-md font-semibold">
              Show All
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;