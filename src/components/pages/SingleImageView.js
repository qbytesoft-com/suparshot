import Navbar from 'components/global/navbar';
import SingleImgInfo from 'components/global/singleImgModal/SingleImgInfo';
import SingleImgModalHeader from 'components/global/singleImgModal/SingleImgModalHeader';
import SingleImgModalTags from 'components/global/singleImgModal/SingleImgModalTags';
import { Button } from 'components/lib';
import React from 'react';
import { BsFillEyeFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { IoMdInformationCircle } from 'react-icons/io';
import { RiShareForwardFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';

function SingleImageView() {
  const [imgInfo, setImgInfo] = React.useState(false);
  const imgInfoToggle = () => setImgInfo(!imgInfo);
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <div className="avoid-nav py-10">
        <div className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col">
            <SingleImgModalHeader className="order-2 mt-8 md:mt-0 md:order-1" />
            <div className="w-full order-1 md:mt-8 md:order-2">
              <img
                src={`${process.env.PUBLIC_URL}/images/houseInTheForest.jpg`}
                alt="house"
                className="w-11/12 md:w-10/12 lg:w-8/12 object-contain mx-auto"
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-3 justify-center">
              <p className="text-gray-500 flex gap-2 items-center text-sm">
                <BsFillEyeFill /> 37.6M views
              </p>
              <p className="text-gray-500 flex gap-2 items-center text-sm">
                <GoVerified /> Free to use (CC0)
              </p>
            </div>
            <div className="flex gap-3 justify-center mt-4">
              <Button
                variant="light"
                className="border border-gray-300 text-gray-800 flex gap-2 items-center text-xs px-3 rounded-md hover:shadow h-8"
              >
                <RiShareForwardFill />
                <span>Share</span>
              </Button>

              <Button
                variant="light"
                className="border border-gray-300 text-gray-800 flex gap-2 items-center text-xs px-3 rounded-md hover:shadow h-8"
                onClick={imgInfoToggle}
              >
                <IoMdInformationCircle />
                <span>Info</span>
              </Button>
            </div>
          </div>

          <SingleImgInfo isOpen={imgInfo} imgInfoToggle={imgInfoToggle} />

          {/* <div className="mt-8">
              <p className="text-gray-900 text-2xl font-semibold">Similar Photos</p>
              <GridPhotos photos={photos} className="mt-4" />
            </div> */}
          <SingleImgModalTags />
        </div>
      </div>
    </>
  );
}

export default SingleImageView;
