import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import property from './propertyPage';
import search from './search';
import profile from './profilePage';
import reel from './reel';
import homepage from './homepage';
import modal from './modal';
import reservation from './reservation';
import mapReel from './mapReel';
import errors from './errors';
import socket from './socket';

const rootReducer = combineReducers({
  session,
  property,
  search,
  profile,
  reel,
  homepage,
  modal,
  reservation,
  mapReel,
  errors,
  socket
});

let enhancer;

if (process.env.NODE_ENV === 'production') enhancer = applyMiddleware(thunk);
else {
  const logger = require('redux-logger').default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => createStore(rootReducer, preloadedState, enhancer);

export default configureStore;
