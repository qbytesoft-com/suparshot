import React from 'react';
import Navbar from 'components/global/navbar';
import HomeHero from './home/hero';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import GridPhotos from 'components/global/gridphotos';
import TitleTabs from './home/titleTabs';
import axios from 'axios';

function Home() {
  const [photos, setPhotos] = React.useState(null);
  let [navTransparent, setNavTransparent] = React.useState(true);
  let navStyle = navTransparent ? 'navbar-main-transparent' : null;

  useScrollPosition(({ prevPos, currPos }) => {
    currPos.y <= -60 ? setNavTransparent(false) : setNavTransparent(true);
  });

  React.useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/fakedata.json`)
      .then((res) => {
        setPhotos(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Navbar className={navStyle} />
      <HomeHero />
      <div className="spr-container spr-home-container pt-6">
        <TitleTabs />
        <GridPhotos photos={photos} />
      </div>
    </>
  );
}

export default Home;
