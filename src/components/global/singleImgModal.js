/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal, ModalDismissButton, Button, ModalOverLay, ModalContent } from 'components/lib';
import { useParams, useHistory, Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

import { IoMdAddCircleOutline, IoMdInformationCircle } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import { BsFillEyeFill } from 'react-icons/bs';
import { RiShareForwardFill } from 'react-icons/ri';

import SingleImgModalHeader from './singleImgModal/SingleImgModalHeader';
import GridPhotos from './gridphotos';
import axios from 'axios';
import SingleImgModalTags from './singleImgModal/SingleImgModalTags';
import SingleImgInfo from './singleImgModal/SingleImgInfo';

function SingleImgModal(props) {
  const [imgInfo, setImgInfo] = React.useState(false);
  const imgInfoToggle = () => setImgInfo(!imgInfo);

  const { id } = useParams();
  let history = useHistory();
  const close = () => {
    history.goBack();
  };
  // const [photos, setPhotos] = React.useState(null);
  // React.useEffect(() => {
  //   axios
  //     .get(`${process.env.PUBLIC_URL}/fakedata.json`)
  //     .then((res) => {
  //       setPhotos(res.data.data);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  return (
    <Modal>
      <ModalOverLay style={{ background: 'rgba(0, 0, 0, 80%)' }} isOpen={true} onDismiss={close}>
        <ModalContent aria-label="Single image modal" className="singleImageViewModal">
          <ModalDismissButton>
            <Button onClick={close} variant="light" className="absolute top-8 left-0 md:left-8">
              <MdClose className="text-gray-200" size="2rem" />
            </Button>
          </ModalDismissButton>

          <div>
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
        </ModalContent>
      </ModalOverLay>
    </Modal>
  );
}

export default SingleImgModal;
