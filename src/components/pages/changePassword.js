import React from 'react';
import Navbar from 'components/global/navbar';
import { Button } from 'components/lib';
import Footer from 'components/global/footer';

function ChangePassword(props) {
  return (
    <>
      <Navbar />
      <div className="avoid-nav min-h-screen px-4 lg:px-0">
        <div className="my-8 w-full lg:w-1/2 mx-auto p-8 border border-gray-200">
          <h1 className="text-gray-900 font-bold text-2xl text-center mb-8">Change Your Password</h1>

          <form>
            <label className="font-bold text-gray-900 text-sm" htmlFor="currentPass">
              Current Password
            </label>
            <input type="password" className="input-field mt-2 mb-4" id="currentPass" />

            <label className="font-bold text-gray-900 text-sm" htmlFor="newPass">
              New Password
            </label>
            <input type="password" className="input-field mt-2 mb-4" id="newPass" />

            <Button className="font-light block mt-8" type="submit">
              Update Password
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChangePassword;
