// @flow
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import routes from '../config/routes';

const store = configureStore();

const Root = () =>
  <Provider store={store}>
    {routes}
  </Provider>;

export default Root;
