import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { registerReactAxe } from './utils/accessibility/reactAxeUtil';
import 'index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// Give detailed accessibility feedback in console
registerReactAxe();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
