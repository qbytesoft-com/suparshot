import React from 'react';

const UploadContext = React.createContext();
UploadContext.displayName = 'UploadContext';

function useSelectItem() {
  const [selectedItem, setSelectedItem] = React.useState();
  const selectItemHandle = (e) => {
    if (e.target.files.length) {
      const fileRead = new FileReader();
      fileRead.onload = () => {
        if (fileRead.readyState === 2) {
          setSelectedItem(fileRead.result);
        }
      };
      fileRead.readAsDataURL(e.target.files[0]);
    }
  };

  const clearSelectItem = () => setSelectedItem(null);

  const publish = (e) => {
    e.preventDefault();
    console.log('Published');
  };

  return {
    selectedItem,
    selectItemHandle,
    clearSelectItem,
    publish,
  };
}

function UploadContextProvider(props) {
  let value = useSelectItem();
  return <UploadContext.Provider value={value} {...props} />;
}

function useUploadContext() {
  const context = React.useContext(UploadContext);
  if (!context) {
    throw new Error('All upload component should be render inside UploadContextProvider');
  }

  return context;
}

export { UploadContextProvider, useUploadContext };
