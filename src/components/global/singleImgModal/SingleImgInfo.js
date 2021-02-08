import React from 'react';
import { HiDownload, HiOutlineCheck } from 'react-icons/hi';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { Button } from 'components/lib';
import { Link } from 'react-router-dom';

function SingleImgInfo({ isOpen, imgInfoToggle }) {
  return (
    <>
      {isOpen ? (
        <div className="mt-8 w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
          <div className="border border-gray-300 p-4 rounded">
            <p className="font-light text-gray-500 text-xs">STATISTICS</p>
            <h1 className="text-green-600 font-bold text-4xl flex gap-2 justify-center items-center">
              <BsFillEyeFill />
              3.7M
            </h1>
            <div className="flex justify-center gap-3 mt-4">
              <p className="text-gray-500 flex items-center gap-1 font-semibold">
                <HiDownload /> 100K
              </p>

              <p className="text-gray-500 flex items-center gap-1 font-semibold">
                <AiTwotoneHeart />
                3.88K
              </p>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded mt-4">
            <p className="font-light text-gray-500 text-xs">PHOTO INFORMATION</p>
            <h1 className="text-gray-900 font-semibold text-lg mt-4">High Angle-photography of Green Forest Trees</h1>

            <p className="font-light text-gray-500 text-xs mt-4">Uploaded at May 16, 2015</p>

            <table className="mt-4 w-full">
              <tbody>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Lens</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">3.61mm ƒ/2.8 ISO 400</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Size</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">5.81 MB</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Resolution</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">1580px x 2809px</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Camera</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">FC330</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Software</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">Adobe Photoshop Lightroom 6.0 (Macintosh)</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="font-light text-sm text-gray-500 pr-2 pb-4">Taken at</p>
                  </td>
                  <td>
                    <p className="text-gray-900 text-base pb-3">December 02, 2017 12:43 pm</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border border-gray-300 p-4 rounded mt-4">
            <p className="font-light text-gray-500 text-xs">LICENSE</p>

            <ul className="list-none mt-4">
              <li>
                <p className="flex gap-1 items-center text-gray-500">
                  <HiOutlineCheck /> Free to use.
                </p>
              </li>
              <li>
                <p className="flex gap-1 items-center text-gray-500">
                  <HiOutlineCheck /> No attribution required.
                </p>
              </li>
            </ul>
            <Link to="/" className="underline block mt-4 text-gray-500">
              Learn more about license
            </Link>
          </div>

          <Button variant="light" className="bg-gray-200 font-light mx-auto w-full mt-4" onClick={imgInfoToggle}>
            Hide Information
          </Button>
        </div>
      ) : null}
    </>
  );
}

export default SingleImgInfo;
