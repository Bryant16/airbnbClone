const SEARCHRESULTS = "search/SEARCHRESULTS";
const FOCUSID = "search/FOCUSID";

const setSearchProperties = (properties, searchLocation) => ({
  type: SEARCHRESULTS,
  properties,
  searchLocation,
});

const setFocusId = (id) => ({
  type: FOCUSID,
  id,
});

export const search = ({
  searchLocation,
  guestNumber,
  startDate,
  endDate,
}) => async (dispatch) => {
  const res = await window.fetch(
    `/api/search/?location=${searchLocation}&&guests=${guestNumber}&&start_date=${startDate}&&end_date=${endDate}`
  );
  const properties = await res.json();
  dispatch(setSearchProperties(properties, searchLocation));
};

export const focusListing = (idNumber) => async (dispatch) => {
  dispatch(setFocusId(idNumber));
};

export default function searchReducer(
  state = { properties: null, searchLocation: null, focusId: null },
  action
) {
  let newState;
  switch (action.type) {
    case SEARCHRESULTS: {
      newState = { ...state };
      newState.properties = action.properties[0];
      newState.searchLocation = {
        lng: action.properties[1],
        lat: action.properties[2],
      };
      return newState;
    }
    case FOCUSID: {
      newState = { ...state };
      newState.focusId = action.id;
      return newState;
    }
    default:
      return state;
  }
}
