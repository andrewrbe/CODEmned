import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Initial from './Initial';
import { Materials, Butts, Success } from './Education';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Initial} />
      <Route path="/education/materials" component={Materials} />
      <Route path="/education/butts" component={Butts} />
      <Route path="/education/success" component={Success} />
    </Switch>
  </Router>
);