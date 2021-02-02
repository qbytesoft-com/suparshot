import React from 'react';
import Colcade from 'colcade';
import { LazyImage } from 'components/lib';
import PhotoItemsAction from './gridphotos/photoItemsAction';

function GridPhotos({ photos, className }) {
  const photosRef = React.useRef();
  let style = `photos ${className}`;

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
    <div className={style} ref={photosRef}>
      <div className="photos-col block"></div>
      <div className="photos-col hidden md:block"></div>
      <div className="photos-col hidden 2xl:block"></div>
      <div className="photos-col hidden sm:block"></div>
      {photos && photos.length > 0
        ? photos.map((photo, index) => {
            return (
              <div className="photos-item" key={index}>
                <a href="/">
                  <LazyImage image={{ ...photo, index }} />
                </a>
                <PhotoItemsAction />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default GridPhotos;
