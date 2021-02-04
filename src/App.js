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
function App() {
  return <Routes />;
}

function Routes() {
  let location = useLocation();
  console.log(location);
  let background = location.state && location.state.background;
  console.log(background);

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
        <Route path="/join">
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
      </Switch>
      {background && <Route path="/img/:id" children={<SingleImgModal />} />}
    </>
  );
}

export default App;
