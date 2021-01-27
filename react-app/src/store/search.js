const SEARCHRESULTS = "search/SEARCHRESULTS";

const setSearchProperties = (properties) => ({
  type: SEARCHRESULTS,
  properties,
});

export const search = ({ searchLocation, guestNumber, startDate, endDate }) => async (dispatch) => {
  const res = await fetch(
    `/api/search/?location=${searchLocation}&&guests=${guestNumber}&&start_date=${startDate}&&end_date=${endDate}`
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
