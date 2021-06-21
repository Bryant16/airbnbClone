import { SetCurrentErrors } from './errors';
import { AfterEffect } from './modal';

const USER = 'session/USER';

const setSession = (user = null) => ({
  type: USER, user
});

export const LogIn = (email, password) => async dispatch => {
  const res = await window.fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  try {
    const { user, errors } = await res.json();
    if (user) {
      dispatch(setSession(user));
      dispatch(AfterEffect());
    } else dispatch(SetCurrentErrors(errors));
  } catch (_) {
    dispatch(SetCurrentErrors(['Sorry, something went wrong. Please refresh the page and try again.']));
  }
};

export const SignUp = (username, email, password) => async dispatch => {
  const res = await window.fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });
  try {
    const { user, errors } = await res.json();
    if (user) {
      dispatch(setSession(user));
      dispatch(AfterEffect());
    } else dispatch(SetCurrentErrors(errors));
  } catch (_) {
    dispatch(SetCurrentErrors(['Sorry, something went wrong. Please refresh the page and try again.']));
  }
};

export const LogOut = () => async dispatch => {
  await window.fetch('/api/auth/logout');
  dispatch(setSession());
};

export const Restore = () => async dispatch => {
  const restoreResponse = await window.fetch('/api/auth/');
  try {
    const { user } = await restoreResponse.json();
    if (user) dispatch(setSession(user));
    else dispatch(setSession());
  } catch (_) {
    dispatch(SetCurrentErrors(['Sorry, something went wrong. Please refresh the page and try again.']));
  }
};

export default function sessionReducer (
  // eslint-disable-next-line default-param-last
  state = { user: null, loaded: false }, { type, user }) {
  return (type === USER) ? { user, loaded: true } : state;
}
