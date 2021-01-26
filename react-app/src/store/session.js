const USER = 'session/USER';

const constructSession = user => ({ type: USER, user });

const deconstructSession = () => ({ type: USER });

export const LogIn = (email, password) => async dispatch => {
  const loginResponse = await window.fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const user = await loginResponse.json();
  if (!user.errors) return dispatch(constructSession(user));
  const outErr = new Error();
  outErr.errors = [...user.errors];
  throw outErr;
};

export const LogOut = () => async dispatch => {
  const logoutResponse = await window.fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (logoutResponse.ok) return dispatch(deconstructSession());
};

export const Restore = () => async dispatch => {
  const restoreResponse = await window.fetch('/api/auth', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const user = await restoreResponse.json();
  if (!user.errors) return dispatch(constructSession(user));
  return dispatch(constructSession(null));
};

export const SignUp = (username, email, password) => async dispatch => {
  const signupResponse = await window.fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, email, password })
  });
  if (signupResponse) dispatch(constructSession(signupResponse.data.user));
};

export default function sessionReducer (state = { user: null }, action) {
  return (action.type === USER) ? { ...state, user: action.user } : state;
}
