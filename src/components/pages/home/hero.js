import React from 'react';
import HeroBg from 'images/hero_bg.jpg';
import SearchBar from 'components/global/navbar/searchbar';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <div className="hero-main relative flex justify-center items-center">
      <div className="hero-main-bg absolute w-full h-full top-0 left-0 bottom-0 right-0 overflow-hidden">
        <img src={HeroBg} alt="hero main background" className="object-cover w-full h-full" />
      </div>

      <div className="hero-text z-10">
        <h1 className="font-bold text-white text-4xl">
          The best free stock photos & videos shared by talented creators.
        </h1>
        <SearchBar className="mt-5" />
        <div className="suggestion mt-1">
          <p className="mr-3">Suggested : </p>
          <Link to="/">building,</Link>
          <Link to="/">car,</Link>
          <Link to="/">girl,</Link>
          <Link to="/">boy,</Link>
          <Link to="/">more</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
