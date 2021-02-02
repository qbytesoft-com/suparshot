import React from 'react';
import GridPhotos from 'components/global/gridphotos';
import { useProfileContext } from './ProfileContextProvider';

function ProfilePhotos() {
  let { photos } = useProfileContext();
  return <GridPhotos className="my-4" photos={photos} />;
}

export default ProfilePhotos;
