import React from 'react';
import Brand from 'components/global/navbar/brand';
import { Button } from 'components/lib';

function JoinAs(props) {
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex justify-between px-4 py-4">
        <Brand className="text-gray-900" />
        <div className="flex gap-4 items-center">
          <p className="text-gray-500 hidden sm:block">Have and account?</p>
          <Button href="/login">Sign In</Button>
        </div>
      </div>
      <h1 className="font-bold text-4xl text-gray-900 text-center mt-8">What do you mainly want to do?</h1>

      <div className="flex gap-8 w-1/2 mx-auto mt-10">
        <div className="card border border-gray-300 p-2 rounded-lg">
          <div className="card-img rounded-lg overflow-hidden">
            <img src={`${process.env.PUBLIC_URL}/images/downloader.jpg`} alt="Join as downloader" className="w-full" />
          </div>
          <div className="card-body pt-8 pb-4">
            <p className="text-gray-500 text-center text-md">I'm here to download free photos and videos.</p>
            <Button href="/join/downloader" className="mt-4">
              <p className="font-light">I want to download</p>
            </Button>
          </div>
        </div>

        <div className="card border border-gray-300 p-2 rounded-lg">
          <div className="card-img rounded-lg overflow-hidden">
            <img src={`${process.env.PUBLIC_URL}/images/contributor.jpg`} alt="Join as downloader" className="w-full" />
          </div>

          <div className="card-body pt-8 pb-4">
            <p className="text-gray-500 text-center text-md">I'm here to share my photos and videos with the world.</p>
            <Button href="/join/contributor" className="mt-4">
              <p className="font-light">I want to contribute</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinAs;
