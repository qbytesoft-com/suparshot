import React from 'react';
import { Button } from 'components/lib';
import { Link } from 'react-router-dom';
function ProfileInfo() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center h-80">
      <img
        src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
        alt="maruf ahmed"
        className="w-32 h-32 rounded-full object-cover object-center"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
          <h1 className="font-bold text-4xl text-gray-900">Maruf Ahmed</h1>
          <Button className="p-3 w-20 text-xs">Follow</Button>
        </div>
        <div className="flex gap-6">
          <Link to="/me/stats" className="text-xs">
            <p className="font-semibold text-gray-900">48</p>
            <p className="font-light text-gray-500">Total views</p>
          </Link>
          <span className="text-xs">
            <p className="font-semibold text-gray-900">9999999th</p>
            <p className="font-light text-gray-500">All time rank</p>
          </span>
          <span className="text-xs">
            <p className="font-semibold text-gray-900">690nd</p>
            <p className="font-light text-gray-500">30 days rank</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
