import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from 'components/Main/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/(:palette)" component={App} />
  </Router>
);

export default routes;
