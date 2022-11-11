import React from 'react';
import img from '../../src/assets/2.jpg'
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
        <div className='w-4/5 mx-auto'>
          <h2 className='text-4xl text-gray-700 font-semibold text-center'>Services</h2>
          {
            foods.slice(0, 3).map(food => <div>
              
            </div>)
          }
        </div>
      </div>
    );
};

export default Service;