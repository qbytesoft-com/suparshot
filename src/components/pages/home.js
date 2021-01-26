import React from 'react';
import Navbar from 'components/global/navbar';
import HomeHero from './home/hero';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import GridPhotos from 'components/global/gridphotos';
import TitleTabs from './home/titleTabs';

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
      <div className="spr-container spr-home-container pt-6">
        <TitleTabs />
        <GridPhotos />
      </div>
    </>
  );
}

export default Home;
