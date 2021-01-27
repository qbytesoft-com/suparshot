import React from 'react';
import Colcade from 'colcade';
import { LazyImage } from 'components/lib';

function GridPhotos({ photos }) {
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
      {photos && photos.length > 0
        ? photos.map((photo, index) => {
            return (
              <div className="photos-item" key={index}>
                <LazyImage image={{ ...photo, index }} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default GridPhotos;
