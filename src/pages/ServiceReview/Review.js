import React from "react";
const Review = ({ review }) => {
  const { name, message, photo, rating } = review;
  return (
    <div className="border flex justify-between items-center bg-slate-200 p-4 my-5 rounded-xl">
      <div>
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={photo} alt="" />
          <p className="font-semibold">{name}</p>
        </div>
        <p className="mt-3">{message}</p>
      </div>
      <p>rating: { rating}</p>
    </div>
  );
};

export default Review;
