const USER = 'session/USER';

const setSession = (user = null) => ({ type: USER, user });

export const LogIn = (email, password) => async dispatch => {
  const loginResponse = await window.fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const { user } = await loginResponse.json();
  if (!user.errors) dispatch(setSession(user));
  else {
    const outErr = new Error();
    outErr.errors = [...user.errors];
    throw outErr;
  }
};

export const SignUp = (username, email, password) => async dispatch => {
  const signupResponse = await window.fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
  });
  const { user } = await signupResponse.json();
  if (!user.errors) dispatch(setSession(user));
  else {
    const outErr = new Error();
    outErr.errors = [...user.errors];
    throw outErr;
  }
};

export const LogOut = () => async dispatch => {
  await window.fetch('/api/auth/logout');
  dispatch(setSession());
};

export const Restore = () => async dispatch => {
  const restoreResponse = await window.fetch('/api/auth/');
  const { user } = await restoreResponse.json();
  if (!user.errors) dispatch(setSession(user));
  else dispatch(setSession(null));
};

export default function sessionReducer (
  // eslint-disable-next-line default-param-last
  state = { user: null }, { type, user }) {
  return (type === USER) ? { user } : state;
}
