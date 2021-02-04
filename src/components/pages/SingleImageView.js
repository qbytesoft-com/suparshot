import Navbar from 'components/global/navbar';
import React from 'react';
import { useParams } from 'react-router-dom';

function SingleImageView(props) {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="avoid-nav py-10">
        <p>Image id {id}</p>
      </div>
    </>
  );
}

export default SingleImageView;
