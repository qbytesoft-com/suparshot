import Brand from 'components/global/navbar/brand';
import { Button } from 'components/lib';
import React from 'react';

function Signup() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex justify-between px-4 fixed top-0 py-4">
        <Brand className="text-gray-900" />
        <div className="flex gap-4 items-center">
          <p className="text-gray-500 hidden sm:block">Have and account?</p>
          <Button href="/login">Sign In</Button>
        </div>
      </div>

      <div className="h-full px-4 md:w-6/12 mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-6xl text-gray-900 mb-8">SuparShot</h1>
        <p className="font-light text-xl text-gray-600">
          Download free photos and videos powered by a community of photographers.
        </p>

        <form className="mt-4">
          <div className="flex gap-4 mb-4">
            <input type="text" className="input-field" id="fname" placeholder="First Name" />
            <input type="text" className="input-field" id="lname" placeholder="Last Name" />
          </div>
          <input type="email" className="input-field mb-4" id="email" placeholder="Email" />
          <input type="password" className="input-field mb-4" id="pass" placeholder="Password" />

          <Button className="w-full rounded-md">Create New Account</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
