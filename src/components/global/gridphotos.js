import React from 'react';
import Colcade from 'colcade';

function GridPhotos() {
  const photosRef = React.useRef();

  React.useEffect(() => {
    var colc = new Colcade(photosRef.current, {
      columns: '.photos-col',
      items: '.photos-item',
    });
    return () => {
      colc.destroy();
    };
  });

  return (
    <div className="photos" ref={photosRef}>
      <div className="photos-col block"></div>
      <div className="photos-col hidden md:block"></div>
      <div className="photos-col hidden 2xl:block"></div>
      <div className="photos-col hidden sm:block"></div>

      <div className="photos-item">
        <img src="images/dipForest.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/houseInTheForest.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/redDipForest.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/riderInTheRoad.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/riderInTheRoad2.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/roadAndBuilding.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/roadBetweenForest.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/sunsetAndRoad.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/profile.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/yalloCar.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/trees.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/manInBlack.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/orange.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/girl.jpg" alt="Dip Forest" />
      </div>
      <div className="photos-item">
        <img src="images/eyes.jpg" alt="Dip Forest" />
      </div>
    </div>
  );
}

export default GridPhotos;
