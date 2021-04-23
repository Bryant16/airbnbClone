import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import createStore from './store';

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
  if (!this.match(/ /g)) return [this[0].toUpperCase(), this.slice(1)].join('');
  return this
    .split(' ')
    .map($ => [$[0].toUpperCase(), $.slice(1)].join(''))
    .join(' ');
};

const store = createStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function Root () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
