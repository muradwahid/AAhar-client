import React from 'react';
import { Link } from 'react-router-dom';

const FoodsService = ({food}) => {
    const { _id, strMeal, strMealThumb } = food;
    console.log(food);
    return (
      <div className="shadow-md rounded-xl bg-white p-4">
        <img className="rounded-xl" src={strMealThumb} alt="" />
        <h4 className="text-2xl font-semibold text-gray-700 my-3">{strMeal}</h4>
        <div className="flex justify-between items-center">
          <Link className="text-white bg-red-700 py-2 px-7 rounded-md font-semibold">
            Order Now
          </Link>
          <div>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
            <i className="fa-solid fa-star text-yellow-400"></i>
          </div>
        </div>
      </div>
    );
};

export default FoodsService;