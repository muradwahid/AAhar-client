import React from 'react';
import img from '../../src/assets/2.jpg'
const ServiceWork = () => {
    return (
      <div
        className=""
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <p>The process of our service</p>
          <h2>Search by food category</h2>
        </div>
      </div>
    );
};

export default ServiceWork;