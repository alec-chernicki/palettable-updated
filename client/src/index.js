import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
import Raven from 'raven-js';

Raven.config(
  'https://cf322013a54848f3944b99a00d925647@sentry.io/217790'
).install();

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
