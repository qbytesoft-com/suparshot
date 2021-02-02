import React, { useContext } from 'react';
import axios from 'axios';
const ProfileContext = React.createContext();
ProfileContext.displayName = 'ProfileContext';

function ProfileContextProvider({ children, ...props }) {
  let profileInfo = useProfileInfoFetch();
  return (
    <ProfileContext.Provider value={profileInfo} {...props}>
      {children}
    </ProfileContext.Provider>
  );
}

function useProfileInfoFetch() {
  let [photos, setPhotos] = React.useState();

  React.useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/fakedata.json`)
      .then((res) => {
        setPhotos(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return {
    photos,
  };
}

function useProfileContext() {
  return useContext(ProfileContext);
}

export { ProfileContextProvider, useProfileContext };
