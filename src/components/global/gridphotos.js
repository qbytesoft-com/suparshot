import React from 'react';
import Colcade from 'colcade';
import { LazyImage } from 'components/lib';
import PhotoItemsAction from './gridphotos/photoItemsAction';
import { Link, useLocation } from 'react-router-dom';

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

  let location = useLocation();

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
                <Link
                  to={{
                    pathname: `/img/${index}`,
                    state: { background: location },
                  }}
                >
                  <LazyImage image={{ ...photo, index }} />
                </Link>
                <PhotoItemsAction userinfo={photo} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default GridPhotos;
