import Explore from 'components/pages/explore';
import Home from 'components/pages/home';
import Upload from 'components/pages/upload';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
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
      </Switch>
    </>
  );
}

export default App;
