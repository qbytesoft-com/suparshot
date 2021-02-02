import Explore from 'components/pages/explore';
import Home from 'components/pages/home';
import Login from 'components/pages/login';
import Profile from 'components/pages/profile';
import Signup from 'components/pages/signup';
import Upload from 'components/pages/upload';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes />
    </>
  );
}

function Routes() {
  return (
    <Switch>
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
    </Switch>
  );
}

export default App;
