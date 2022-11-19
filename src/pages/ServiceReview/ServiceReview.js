import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Review from "./Review";

const ServiceReview = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const { idMeal, _id, strInstructions, strMeal, strMealThumb } = food;
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview]=useState();
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const message = form.message.value;
    const serviceRating = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      ratingId: _id,
      rating: rating,
      message: message,
      strMealThumb,
      strMeal,
    };
    setNewReview({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      ratingId: _id,
      rating: rating,
      message: message,
      strMealThumb,
      strMeal,
    });
    fetch("https://assignment11-server-five.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceRating),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset()
        toast.success("Review Successfully added");
        console.log(data)
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetch("https://assignment11-server-five.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        const foodReviews = data.filter(rv => rv.ratingId === _id);
        setReviews(foodReviews)
      });
  }, [newReview]);
  return (
    <div className="md:w-4/5 mx-auto md:flex md:gap-8">
      <div className="bg-slate-100 p-4 rounded-lg text-gray-600 w-1/2">
        <img className="rounded-lg" src={strMealThumb} alt="" />
        <h4 className="my-3 text-3xl font-bold text-gray-600">{strMeal}</h4>
        <p>{strInstructions}</p>
      </div>
      <div className="w-1/2">
        <div className="my-12">
          <h2
            className="text-3xl font-semibold
             text-gray-700 underline text-center
             "
          >
            Review
          </h2>
          <div>
            {user?.uid ? (
              <>
                {reviews.map((review) => (
                  <Review key={review._id} review={review} />
                ))}
              </>
            ) : (
              <p>
                Please{" "}
                <Link
                  className="underline font-semibold text-red-600"
                  to="/login"
                >
                  login
                </Link>{" "}
                to add a review.
              </p>
            )}
          </div>
        </div>
        {user?.uid ? (
          <div className="bg-slate-200 p-4 text-center rounded-xl">
            <h3 className="text-xl font-semibold text-gray-700 my-2">
              Add Review
            </h3>
            <form onSubmit={handleReview}>
              <input
                className="w-full border border-gray-600 p-2 rounded-md"
                type="text"
                name="rating"
                placeholder="Rating"
              />
              <textarea
                name="message"
                className="w-full border border-gray-600 p-2 rounded-md my-4"
                placeholder="type your message"
              ></textarea>
              <input
                className="bg-red-700 text-white py-2 px-4 rounded-xl hover:bg-red-600"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ServiceReview;
