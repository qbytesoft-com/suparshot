import Brand from 'components/global/navbar/brand';
import { Button } from 'components/lib';
import React from 'react';

function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="w-full flex justify-between px-4 fixed top-0 py-4">
        <Brand className="text-gray-900" />
        <div className="flex gap-4 items-center">
          <p className="text-gray-500 hidden sm:block">New to suparshot?</p>
          <Button href="/join">Join</Button>
        </div>
      </div>

      <div className="h-full px-4 md:w-6/12 mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-4xl text-gray-900 mb-8">Welcome Back</h1>

        <form className="mt-4">
          <input type="email" className="input-field mb-4" id="email" placeholder="Email" />
          <input type="password" className="input-field mb-4" id="pass" placeholder="Password" />

          <Button className="w-full rounded-md" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
