import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service';
import Header from './Header';
import useTitle from "../../hooks/useTitle";
import HowItWork from './HowItWork';

const Home = () => {
  const foods = useLoaderData()
  useTitle("AAhar")
    return (
      <>
        <Header />
        <Service foods={foods} />
        <HowItWork/>
      </>
    );
};

export default Home;