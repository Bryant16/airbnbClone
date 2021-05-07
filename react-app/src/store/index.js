import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import propertyPageReducer from './propertyPage';
import profilePageReducer from './profilePage';
import reel from './reel';
import schoolsReducer from './homepage';
import modal from './modal';
import reservation from './reservation';
import mapReel from './mapReel';

const rootReducer = combineReducers({
  session: sessionReducer,
  property: propertyPageReducer,
  profile: profilePageReducer,
  schools: schoolsReducer,
  reel,
  modal,
  reservation,
  mapReel
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
