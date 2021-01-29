import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
function PhotoItemsAction(props) {
  const [fav, setFav] = React.useState(false);
  const makeFav = () => setFav(!fav);
  return (
    <div className="photo-items-action px-4">
      <div className="photo-item-action-bg"></div>
      <div className="flex justify-between">
        <div className="photo-items-action-profile flex justify-between items-center z-10">
          <img src={`${process.env.PUBLIC_URL}/images/profile.jpg`} alt="Profile" />
          <a href="/" className="text-white text-sm ml-2">
            Maruf Ahmed
          </a>
        </div>

        <div className="items-actions flex justify-end items-center text-white z-10">
          <a href="/">
            <HiDownload size="1.3rem" />
          </a>
          <a href="/" className="ml-3">
            <IoMdAddCircleOutline size="1.3rem" />
          </a>
          <button className="ml-3 cursor-pointer outline-none focus:outline-none" onClick={() => makeFav()}>
            {fav ? <AiTwotoneHeart size="1.3rem" /> : <AiOutlineHeart size="1.3rem" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoItemsAction;
