const SEARCHRESULTS = "search/SEARCHRESULTS";

const setSearchProperties = (properties, searchLocation) => ({
  type: SEARCHRESULTS,
  properties,
  searchLocation,
});

export const search = ({
  searchLocation,
  guestNumber,
  startDate,
  endDate,
}) => async (dispatch) => {
  const res = await fetch(
    `/api/search/?location=${searchLocation}&&guests=${guestNumber}&&start_date=${startDate}&&end_date=${endDate}`
  );
  const properties = await res.json();
  console.log("what is this", properties);
  dispatch(setSearchProperties(properties, searchLocation));
};

export default function searchReducer(state = { properties: null }, action) {
  let newState;
  switch (action.type) {
    case SEARCHRESULTS: {
      newState = { ...state };
      newState["properties"] = action.properties[0];
      newState["searchLocation"] = {
        lng: action.properties[1],
        lat: action.properties[2],
      };
      return newState;
    }
    default:
      return state;
  }
}
