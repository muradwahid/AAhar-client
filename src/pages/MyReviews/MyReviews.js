import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from './Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  useTitle('MyReviews')
    useEffect(() => {
        fetch(`http://localhost:5000/myreview?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setMyReview(data));
    }, [user?.email]);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/myreview/${id}`, {
            method:"DELETE"
        })
        .then(res=>res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myReview.filter(review => review._id !== id);
              setMyReview(remaining)
              toast.error("Successfully deleted");
          }
        })
    }
    return (
      <div className="w-4/5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {myReview?.length ? (
          myReview.map((review) => (
            <Reviews
              key={review._id}
              review={review}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h3>No reviews were added.</h3>
        )}
      </div>
    );
};

export default MyReviews;