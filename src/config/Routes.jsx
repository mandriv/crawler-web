import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../screens/LandingPage';
import Explore from '../screens/Explore';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/explore" component={Explore} />
    </div>
  </Router>
);

export default Routes;
