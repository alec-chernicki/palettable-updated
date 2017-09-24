import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from 'components/Main/App';
import ExportPage from 'components/Export/ExportPage';
import GeneratorPage from 'components/Generator/GeneratorPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/(:palette)" component={App}>
      <Route path="export" component={ExportPage} />
      <IndexRoute component={GeneratorPage} />
    </Route>
  </Router>
);

export default routes;
