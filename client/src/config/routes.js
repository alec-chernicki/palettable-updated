// @flow
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../components/Main/App';
import GeneratorPage from '../components/Generator/GeneratorPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/(:palette)" component={App}>
      <IndexRoute component={GeneratorPage} />
    </Route>
  </Router>
);

export default routes;
