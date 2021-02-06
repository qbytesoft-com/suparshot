import React from 'react';
import { Button } from 'components/lib';
import { MdClose } from 'react-icons/md';
import { useUploadContext } from './UploadContext';

function UploadForm() {
  const { selectedItem, selectItemHandle, clearSelectItem, publish } = useUploadContext();
  console.log(selectedItem);
  return (
    <form className="mt-8" onSubmit={publish}>
      <label htmlFor="uploadFile">
        <div className="w-100 h-32 border-2 border-dashed border-green-400 bg-gray-100 flex items-center justify-center gap-4">
          <Button>
            <label htmlFor="uploadFile">Browse</label>
          </Button>
          {/* <p className="font-semibold text-base text-gray-900">Or Drag & Drop</p> */}
        </div>
      </label>
      <input type="file" id="uploadFile" className="hidden" onChange={selectItemHandle} />
      {/* Selected image preview */}
      {selectedItem && (
        <div className="mt-10 flex flex-col md:flex-row gap-8">
          <div className="w-full relative">
            <Button variant="light" className="absolute p-0 top-2 right-2 text-gray-200" onClick={clearSelectItem}>
              <MdClose size="1.5rem" />
            </Button>
            <img src={selectedItem} alt="Selected" className="w-full object-cover object-top" />
          </div>

          <div className="w-full">
            <label className="font-semibold text-sm text-gray-900" htmlFor="imageTitle">
              Title
            </label>
            <input
              type="text"
              className="input-field w-full mb-4 mt-2"
              id="imageTitle"
              placeholder="A man front of a door"
            />

            <label className="font-semibold text-sm text-gray-900" htmlFor="imageTags">
              Tags <span className="font-light text-gray-500">(optional)</span>
            </label>
            <input type="text" className="input-field w-full mb-4 mt-2" id="imageTags" placeholder="door, man" />

            <label className="font-semibold text-sm text-gray-900" htmlFor="imageLocation">
              Location <span className="font-light text-gray-500">(optional)</span>
            </label>
            <input
              type="text"
              className="input-field w-full mb-4 mt-2"
              id="imageLocation"
              placeholder="Dhaka, bangladesh"
            />
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 w-full border-t border-gray-300 py-4 text-center bg-white z-10">
        <Button type="submit">Publish</Button>
      </div>
    </form>
  );
}

export default UploadForm;
