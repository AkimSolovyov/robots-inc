import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'components/App';
import About from 'components/About';
import Employee from 'components/Employee';
import PageNotFound from 'components/ErrorPages/PageNotFound';

const RouterData = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/employees" component={Employee} />
      <Route path="/error" component={PageNotFound} />
    </Switch>
  </Router>
);

export default RouterData;
