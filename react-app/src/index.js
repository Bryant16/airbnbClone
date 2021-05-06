import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import './index.css';
import App from './App';
import createStore from './store';
import { setMooring } from './store/modal';

// eslint-disable-next-line no-extend-native
String.prototype.toTitleCase = function () {
  if (!this.match(/ /g)) return [this[0].toUpperCase(), this.slice(1)].join('');
  return this
    .split(' ')
    .map($ => $ && [$[0].toUpperCase(), $.slice(1)].join(''))
    .join(' ');
};

Object.deepEq = function ($, _) {
  if (!$ || !_ || typeof $ !== 'object' || typeof _ !== 'object') return false;
  const [$$, __] = [$, _].map(Object.values);
  if ($$.length !== __.length) return false;
  for (const $_ in $$) {
    if (
      (typeof $$[+$_] !== typeof __[+$_]) ||
      (typeof $$[+$_] !== 'object' && $$[+$_] !== __[+$_]) ||
      (typeof $$[+$_] === 'object' && !Object.deepEq($$[+$_], __[+$_]))
    ) return false;
  }
  return true;
};

const store = createStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}

function Root () {
  const dispatch = useDispatch();
  const mooringRef = useRef(null);

  useEffect(() => {
    dispatch(setMooring(mooringRef.current));
  }, [dispatch]);

  return (
    <>
      <App />
      <div ref={mooringRef} className='modalMooring' />
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
