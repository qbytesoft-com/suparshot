import React from 'react';
import Navbar from 'components/global/navbar';
import Footer from 'components/global/footer';

function Profile() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-4xl">Profile page</h1>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
