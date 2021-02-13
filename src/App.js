import React from 'react';
import SingleImgModal from 'components/global/singleImgModal';
import ChangePassword from 'components/pages/changePassword';
import Explore from 'components/pages/explore';
import Home from 'components/pages/home';
import Login from 'components/pages/login';
import Profile from 'components/pages/profile';
import Settings from 'components/pages/settings';
import Signup from 'components/pages/signup';
import SingleImageView from 'components/pages/SingleImageView';
import Upload from 'components/pages/upload';
import { Route, Switch, useLocation } from 'react-router-dom';
import JoinAs from 'components/pages/JoinAs';
function App(props) {
  return <Routes />;
}

function Routes() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/join/downloader">
          <Signup />
        </Route>
        <Route path="/join/contributor">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/me">
          <Profile />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/reset-password">
          <ChangePassword />
        </Route>
        <Route path="/img/:id">
          <SingleImageView />
        </Route>
        <Route path="/joinas">
          <JoinAs />
        </Route>
      </Switch>
      {background && <Route path="/img/:id" children={<SingleImgModal />} />}
    </>
  );
}

export default App;
