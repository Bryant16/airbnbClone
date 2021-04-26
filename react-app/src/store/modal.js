const LOGIN = 'modal/LOGIN';

const SIGNUP = 'modal/SIGNUP';

const TEARDOWN = 'modal/TEARDOWN';

const MOORING = 'modal/MOORING';

const AFTER = 'modal/AFTER';

export const popLogin = () => ({ type: LOGIN });

export const popSignup = () => ({ type: SIGNUP });

export const setAfter = after => ({ type: AFTER, after });

export const setMooring = mooring => ({ type: MOORING, mooring });

export const teardown = () => ({ type: TEARDOWN });

export default function reducer (
  // eslint-disable-next-line default-param-last
  state = { mooring: null, current: null, after: null },
  { type, mooring, after }
) {
  switch (type) {
    case LOGIN:
      return { ...state, current: 'login' };
    case SIGNUP:
      return { ...state, current: 'signup' };
    case TEARDOWN:
      return { ...state, current: null, after: null };
    case AFTER:
      return { ...state, after };
    case MOORING:
      return { ...state, mooring };
    default:
      return state;
  }
}
