import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Foods from './Foods';

const AllFoods = () => {
    const allFoods=useLoaderData()
    return (
      <div className="w-4/5 mx-auto my-12">
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 shadow-xl'>
          {allFoods.map((food) => (
            <Foods key={food._id} food={food} />
          ))}
        </div>
      </div>
    );
};

export default AllFoods;