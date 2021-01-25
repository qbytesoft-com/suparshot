import React from 'react';
import Navbar from 'components/global/navbar';
import HomeHero from './home/hero';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function Home() {
  let [navTransparent, setNavTransparent] = React.useState(true);
  let navStyle = navTransparent ? 'navbar-main-transparent' : null;

  useScrollPosition(({ prevPos, currPos }) => {
    currPos.y <= -60 ? setNavTransparent(false) : setNavTransparent(true);
  });

  return (
    <>
      <Navbar className={navStyle} />
      <HomeHero />
      <div className="h-screen flex justify-center items-center text-2xl font-semibold">
        <p>Welcome to SuparShot</p>
      </div>
    </>
  );
}

export default Home;
