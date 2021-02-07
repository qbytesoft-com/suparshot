import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.imgAlt}
      src={`${process.env.PUBLIC_URL}/${image.imgurl}`}
      effect="blur"
      key={image.index}
      height="inherit"
      width="inherit"
    />
  </div>
);

export default LazyImage;
