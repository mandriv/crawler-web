import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LandingPage from '../screens/LandingPage';

const Routes = () => (
  <Router>
    <Route exact path="/" component={LandingPage} />
  </Router>
);

export default Routes;
