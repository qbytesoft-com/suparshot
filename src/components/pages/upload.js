import React from 'react';
import Navbar from 'components/global/navbar';
import { UploadContextProvider } from './upload/UploadContext';
import UploadForm from './upload/UploadForm';
import { ErrorBoundary } from 'components/lib';

function Upload() {
  return (
    <>
      <Navbar />
      <div className="avoid-nav w-full min-h-screen relative pb-32">
        <div className="w-full px-4 lg:w-1/2 lg:mx-auto">
          <h1 className="font-bold text-2xl text-gray-900 text-center mt-8">Upload Photos</h1>

          <ul className="mt-4 list-disc flex flex-col gap-4 w-10/12 mx-auto">
            <li className="text-gray-500">
              <p className="font-light text-sm">
                Your uploads will be distributed for free under the Pexels license.{' '}
                <a href="/" className="underline">
                  Learn more
                </a>
              </p>
            </li>
            <li className="text-gray-500">
              <p className="font-light text-sm">
                We'll review your submission. If it gets selected, you will receive an email notification and your
                content will be featured in our search.
              </p>
            </li>
          </ul>
          <UploadContextProvider>
            <ErrorBoundary>
              <UploadForm />
            </ErrorBoundary>
          </UploadContextProvider>
        </div>
      </div>
    </>
  );
}

export default Upload;
