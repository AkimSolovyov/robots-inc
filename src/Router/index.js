import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from 'components/App';
import About from 'components/About';
import Employee from 'components/Employee';
import PageNotFound from 'components/ErrorPages/PageNotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Employee} />
      <Route exact path="/about" component={About} />
      <Route exact path="/employees" component={Employee} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
