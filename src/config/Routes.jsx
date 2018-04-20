import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../screens/LandingPage';
import Explore from '../screens/Explore';
import VideoStream from '../screens/VideoStream';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/stream/:robotID" component={VideoStream} />
    </div>
  </Router>
);

export default Routes;
