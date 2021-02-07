import React from 'react';
import { Button } from 'components/lib';
function SingleImgModalTags(props) {
  return (
    <div className="mt-8">
      <p className="text-gray-900 text-2xl font-semibold">Related Tags</p>
      <div className="flex flex-wrap gap-3 mt-4">
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Fog
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Foggy
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Forest
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Forest Background
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Haze
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Mist
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Misty
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Mistical
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Nature
        </Button>
        <Button href="/" variant="light" className="border border-gray-300 py-1 text-sm">
          Trees
        </Button>
      </div>
    </div>
  );
}

export default SingleImgModalTags;
