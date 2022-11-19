import React from 'react';

const Reviews = ({ review, handleDelete }) => {
  const { _id, strMeal, strMealThumb, message, photo, rating } = review;
  return (
    <div className="border flex justify-between items-center bg-slate-200 p-4 my-5 rounded-xl">
      <div>
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={photo} alt="" />
          <p className="font-semibold">{strMeal}</p>
        </div>
        <p className="mt-3">{message}</p>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white px-3 my-2 rounded-md hover:shadow hover:shadow-red-400"
        >
          Delete
        </button>
      </div>
      <p>rating: {rating}</p>
    </div>
  );
};

export default Reviews;