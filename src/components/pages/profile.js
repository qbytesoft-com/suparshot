import React from 'react';
import Navbar from 'components/global/navbar';
import Footer from 'components/global/footer';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProfileInfo from './profile/ProfileInfo';
import ProfileTitleTabs from './profile/ProfileTitleTabs';
import ProfilePhotos from './profile/ProfilePhotos';
import ProfileCollection from './profile/ProfileCollection';
import { ProfileContextProvider } from './profile/ProfileContextProvider';
import ProfileStats from './profile/ProfileStats';

function Profile() {
  return (
    <>
      <Navbar />
      <ProfileContextProvider>
        <div className="avoid-nav">
          <ProfileInfo />
          <div className="min-h-screen w-full px-4">
            <ProfileTitleTabs />

            <ProfileRoutes />
          </div>
        </div>
      </ProfileContextProvider>
      <Footer />
    </>
  );
}

function ProfileRoutes() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <ProfilePhotos />
      </Route>
      <Route exact path={`${path}/collection`}>
        <ProfileCollection />
      </Route>
      <Route exact path={`${path}/stats`}>
        <ProfileStats />
      </Route>
    </Switch>
  );
}

export default Profile;
