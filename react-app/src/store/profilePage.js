const ENUMERATE = 'profile/ENUMERATE';

const lookup = user => ({ type: ENUMERATE, user });

export const LookUp = userId => async dispatch => {
  const lookupResponse = await window.fetch(`/api/users/${userId}`);
  const { user } = await lookupResponse.json();
  return dispatch(lookup(user));
};

export default function profileReducer (
  // eslint-disable-next-line default-param-last
  state = { user: null, loaded: false },
  { type, user }
) {
  switch (type) {
    case ENUMERATE:
      return { ...state, user, loaded: true };
    default:
      return state;
  }
}
