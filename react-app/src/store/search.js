const SEARCHRESULTS = "search/SEARCHRESULTS";

const setSearchProperties = (properties) => ({
  type: SEARCHRESULTS,
  properties,
});

export const search = ({ searchLocation, guestNumber }) => async (dispatch) => {
  const res = await fetch(
    `/api/search/?location=${searchLocation}&&guests=${guestNumber}`
  );
  const properties = await res.json();
  dispatch(setSearchProperties(properties));
};

export default function searchReducer(state = { properties: null }, action) {
  let newState;
  switch (action.type) {
    case SEARCHRESULTS: {
      newState = { ...state };
      newState["properties"] = action.properties;
      return newState;
    }
    default:
      return state;
  }
}
