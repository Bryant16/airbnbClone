const ENUMERATE = 'profile/ENUMERATE';

const lookup = user => ({ type: ENUMERATE, user });

export const LookUp = userId => async dispatch => {
  const lookupResponse = await window.fetch(`/api/users/${userId}`);
  const { user } = await lookupResponse.json();
};

export default function profileReducer (state = { user: null }, action) {
  switch (action.type) {
    case ENUMERATE:
      return { ...state, user: action.user };
  }
}
