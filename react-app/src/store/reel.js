const ENUMERATE = 'reel/ENUMERATE';

const populate = list => ({ type: ENUMERATE, list });

export const Populate = whereAmI => async dispatch => {
  const propertyResponse = await window.fetch(`/api${whereAmI}/properties`);
  const { list } = await propertyResponse.json();
  return dispatch(populate(list));
};

export default function reelReducer (state = { list: null }, { type, list }) {
  switch (type) {
    case ENUMERATE:
      return { ...state, list };
    default:
      return state;
  }
}
