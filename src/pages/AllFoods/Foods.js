import React from 'react';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    const { idMeal, _id, strInstructions, strMeal, strMealThumb } = food;
    return (
      <div className="shadow-md rounded-xl bg-white p-4">
        <img className="rounded-xl" src={strMealThumb} alt="" />
        <h4 className="text-xl font-semibold text-gray-700 my-3">{strMeal}</h4>
        <p className="text-gray-700">{strInstructions.slice(0, 100)}...</p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/ServiceReview/${_id}`}
            className="text-white bg-red-700 py-2 px-7 rounded-md font-semibold"
          >
            View Details
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

export default Foods;