import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service';
import Header from './Header';

const Home = () => {
  const foods = useLoaderData()
    return (
      <>
        <Header />
        <Service foods={foods} />
      </>
    );
};

export default Home;